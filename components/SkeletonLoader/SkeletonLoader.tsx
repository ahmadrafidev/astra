import React from 'react';

export interface SkeletonLoaderProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  shape?: 'rectangle' | 'circle' | 'text';
  animation?: 'pulse' | 'wave' | 'none';
  count?: number;
  gap?: string | number;
  variant?: 'light' | 'dark';
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  width = '100%',
  height = '1rem',
  className = '',
  shape = 'rectangle',
  animation = 'pulse',
  count = 1,
  gap = '0.5rem',
  variant = 'light',
}) => {
  
  const baseClasses = `bg-gray-300 dark:bg-gray-700 ${className}`;
  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'animate-wave',
    none: '',
  };
  const shapeClasses = {
    rectangle: 'rounded',
    circle: 'rounded-full',
    text: 'rounded',
  };
  const variantClasses = {
    light: 'bg-gray-300 dark:bg-gray-700',
    dark: 'bg-gray-700 dark:bg-gray-300',
  };

  const skeletonStyle: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  const renderSkeleton = (key: number) => (
    <div
      key={key}
      className={`${baseClasses} ${animationClasses[animation]} ${shapeClasses[shape]} ${variantClasses[variant]}`}
      style={skeletonStyle}
      role="status"
      aria-label={`Loading item ${key + 1} of ${count}`}
    />
  );

  if (count === 1) {
    return renderSkeleton(0);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap }}>
      {Array.from({ length: count }, (_, index) => renderSkeleton(index))}
    </div>
  );
};

SkeletonLoader.displayName = "SkeletonLoader";
export default SkeletonLoader;
