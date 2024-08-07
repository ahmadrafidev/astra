import React from 'react';

/**
 * Props for the Spinner component.
 * 
 * @typedef {Object} SpinnerProps
 * @property {'sm' | 'md' | 'lg' | number} [size='md'] - The size of the spinner.
 * @property {string} [color] - The color of the spinner.
 * @property {number} [thickness=4] - The thickness of the spinner border.
 * @property {'slow' | 'normal' | 'fast'} [speed='normal'] - The speed of the spinner animation.
 * @property {string} [className] - Additional class names for custom styling.
 * @property {string} ['aria-label'] - ARIA label for accessibility.
 */
export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | number;
  color?: string;
  thickness?: number;
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
  'aria-label'?: string;
}

/**
 * Spinner component for displaying a loading spinner.
 * 
 * @component
 * @param {SpinnerProps} props - Props for the Spinner component.
 * @returns {JSX.Element} The rendered Spinner component.
 */
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
