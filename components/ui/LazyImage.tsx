'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
}

/**
 * LazyImage component with blur-up loading effect
 * 
 * @component
 * @param {LazyImageProps} props - Props for the LazyImage component
 * @returns {JSX.Element} The rendered LazyImage component
 */
export default function LazyImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  onLoad,
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Reset loading state when src changes
    setIsLoaded(false);
  }, [src]);

  return (
    <div className="relative overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={cn(
          'transition-opacity duration-500 ease-in-out',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        onLoad={() => {
          setIsLoaded(true);
          if (onLoad) onLoad();
        }}
        loading={priority ? 'eager' : 'lazy'}
        {...props}
      />
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" 
          style={{ width, height }}
        />
      )}
    </div>
  );
} 