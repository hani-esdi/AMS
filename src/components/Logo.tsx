'use client';

import { useEffect, useState } from 'react';

export function Logo() {
  const [logoSrc, setLogoSrc] = useState('/images/logo.svg');

  useEffect(() => {
    // Check if there's a custom logo URL in localStorage
    const customLogoUrl = localStorage.getItem('customLogoUrl');
    if (customLogoUrl) {
      setLogoSrc(customLogoUrl);
    }
  }, []);

  return (
    <img 
      src={logoSrc} 
      alt="Agency Management System Logo" 
      className="w-auto h-12 object-contain"
    />
  );
} 