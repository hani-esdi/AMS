'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/hooks/useAuth';
import { UserRole } from '@/types/user';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}

export default function ProtectedRoute({ 
  children, 
  allowedRoles = []
}: ProtectedRouteProps) {
  const router = useRouter();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading) {
      // If no user is logged in, redirect to login
      if (!user) {
        router.push('/login');
        return;
      }

      // If specific roles are required and user doesn't have permission
      if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
        // Redirect to dashboard with unauthorized message
        router.push('/dashboard?unauthorized=true');
        return;
      }
    }
  }, [user, isLoading, router, allowedRoles]);

  // Show loading spinner while checking auth
  if (isLoading || !user) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-8 pt-20 bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    );
  }

  // If user has permission, render the protected content
  return <>{children}</>;
}