'use client';

// Import the useAuth hook directly from the context
import { useAuth as useAuthFromContext } from '../contexts/AuthContext';

// Re-export the useAuth hook
export const useAuth = useAuthFromContext;