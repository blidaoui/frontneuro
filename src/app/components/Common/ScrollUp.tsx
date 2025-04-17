'use client';

import { useEffect } from 'react';

export default function ScrollUp() {
  useEffect(() => {
    const scrollToTop = () => {
      document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    const handleLoad = () => scrollToTop();
    
    if (document.readyState === 'complete') {
      scrollToTop();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return null;
}
