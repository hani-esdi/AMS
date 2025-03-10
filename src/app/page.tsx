'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/hooks/useAuth';

export default function Home() {
  const router = useRouter();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        // If user is logged in, redirect to dashboard
        router.push('/dashboard');
      } else {
        // If user is not logged in, redirect to login
        router.push('/login');
      }
    }
  }, [user, isLoading, router]);

  // Show loading state while checking authentication
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 pt-20 bg-gray-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      <p className="mt-4 text-gray-600">Redirecting...</p>
    </main>
  );
}