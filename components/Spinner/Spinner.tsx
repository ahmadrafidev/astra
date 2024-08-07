import React from 'react';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | number;
  color?: string;
  thickness?: number;
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
  'aria-label'?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color,
  thickness = 4,
  speed = 'normal',
  className,
  'aria-label': ariaLabel = 'Spinner',
}) => {
  const sizeMap = {
    sm: 16,
    md: 24,
    lg: 32,
  };

  const speedMap = {
    slow: 'animate-spin-slow',
    normal: 'animate-spin',
    fast: 'animate-spin-fast',
  };

  const spinnerSize = typeof size === 'number' ? size : sizeMap[size];
  const spinnerSpeed = speedMap[speed];

  return (
    <div
      className={`inline-block rounded-full ${spinnerSpeed} ${color} ${className}`}
      style={{
        width: spinnerSize,
        height: spinnerSize,
        borderWidth: thickness,
        borderTopColor: 'transparent',
      }}
      role="status"
      aria-label={ariaLabel}
    >
      <span className="sr-only">{ariaLabel}</span>
    </div>
  );
};

Spinner.displayName = "Spinner";
export default Spinner;
