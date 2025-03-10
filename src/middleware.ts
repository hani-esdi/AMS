import { NextRequest, NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

// Define public paths that don't require authentication
const publicPaths = [
  '/login',
  '/register',
  '/api/auth/login',
  '/api/auth/register',
  '/api/auth/logout',
  '/api/auth/validate',
];

// API paths with specific role requirements
const roleRestrictedPaths: Record<string, string[]> = {
  '/api/admin': ['admin', 'ADMIN'],
  '/api/audit-logs': ['admin', 'ADMIN'],
  '/dashboard/admin': ['admin', 'ADMIN'],
  '/dashboard/audit-logs': ['admin', 'ADMIN'],
};

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Log the path being processed (helpful for debugging)
  console.log('Middleware processing path:', path);
  
  // Check if the path is public
  if (isPublicPath(path)) {
    console.log('Public path, allowing access');
    return NextResponse.next();
  }
  
  // Get token from cookies
  const token = request.cookies.get('token')?.value;
  
  // If no token, redirect to login
  if (!token) {
    return redirectToLogin(request);
  }
  
  try {
    // Verify the token
    const decoded = verify(token, process.env.JWT_SECRET || 'default_secret') as {
      id: string;
      email: string;
      role: string;
    };
    
    // Check role restrictions for the path
    if (isRoleRestrictedPath(path)) {
      console.log('Checking role restrictions for path:', path);
      console.log('User role:', decoded.role);
      console.log('Allowed roles:', roleRestrictedPaths[getBaseRestrictedPath(path)]);
      
      const allowedRoles = roleRestrictedPaths[getBaseRestrictedPath(path)];
      if (!allowedRoles.includes(decoded.role)) {
        console.log('Access denied based on role');
        return NextResponse.redirect(new URL('/dashboard?unauthorized=true', request.url));
      }
      console.log('Access granted');
    }
    
    // The user is authenticated and has proper role, proceed
    return NextResponse.next();
  } catch (error) {
    // Token is invalid
    console.error('Token validation error:', error);
    return redirectToLogin(request);
  }
}

// Check if path is public
function isPublicPath(path: string): boolean {
  return publicPaths.some(publicPath => 
    path === publicPath || 
    path.startsWith('/static') || 
    path.startsWith('/_next') || 
    path.startsWith('/images') ||
    path.endsWith('.ico') ||
    path.endsWith('.png') ||
    path.endsWith('.svg')
  );
}

// Check if path is role restricted
function isRoleRestrictedPath(path: string): boolean {
  return Object.keys(roleRestrictedPaths).some(restrictedPath => 
    path.startsWith(restrictedPath)
  );
}

// Get the base restricted path for a given path
function getBaseRestrictedPath(path: string): string {
  return Object.keys(roleRestrictedPaths).find(restrictedPath => 
    path.startsWith(restrictedPath)
  ) || '';
}

// Redirect to login
function redirectToLogin(request: NextRequest) {
  const loginUrl = new URL('/login', request.url);
  loginUrl.searchParams.set('from', request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * 1. /api route (API routes)
     * 2. /_next (Next.js internals)
     * 3. /static (static files)
     * 4. all root level files in public folder
     */
    '/((?!_next|static|.*\\.ico|.*\\.png|.*\\.svg|.*\\.jpg|.*\\.jpeg).*)',
  ],
};