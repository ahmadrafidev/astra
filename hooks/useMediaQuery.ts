'use client';

import { useState, useEffect } from 'react';
import { debounce } from '@/lib/performance';

/**
 * A hook that returns whether a media query matches
 * 
 * @param query The media query to match against
 * @returns Boolean indicating if the media query matches
 */
export default function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia(query);
      
      // Set initial value
      setMatches(mediaQuery.matches);
      
      // Create handler with debounce to avoid excessive renders
      const handler = debounce(() => {
        setMatches(mediaQuery.matches);
      }, 100);

      // Add event listener
      mediaQuery.addEventListener('change', handler);
      
      // Clean up
      return () => {
        mediaQuery.removeEventListener('change', handler);
      };
    }
    
    return undefined;
  }, [query]);

  return matches;
} 