import React from 'react';

/**
 * Props for the Badge component.
 * 
 * @typedef {Object} BadgeProps
 * @property {string} [text] - The text to display inside the badge.
 * @property {number} [count] - The count to display inside the badge.
 * @property {number} [maxCount=99] - The maximum count to display before showing "maxCount+".
 * @property {string} [className] - Additional class names for custom styling.
 * @property {string} [color='bg-gray-200'] - Background color for the badge.
 * @property {string} [darkColor='bg-gray-700'] - Background color for the badge in dark mode.
 * @property {string} [textColor='text-gray-900'] - Text color for the badge.
 * @property {string} [darkTextColor='text-gray-100'] - Text color for the badge in dark mode.
 * @property {'small' | 'medium' | 'large'} [size='medium'] - Size of the badge.
 * @property {string} [ariaLabel] - Aria label for accessibility.
 */
export interface BadgeProps {
  text?: string;
  count?: number;
  maxCount?: number;
  className?: string;
  color?: string;
  darkColor?: string;
  textColor?: string;
  darkTextColor?: string;
  size?: 'small' | 'medium' | 'large';
  ariaLabel?: string;
}

/**
 * Badge component for displaying text or a count.
 * 
 * @component
 * @param {BadgeProps} props - Props for the Badge component.
 * @returns {JSX.Element} The rendered Badge component.
 */
const Badge: React.FC<BadgeProps> = ({
  text,
  count,
  maxCount = 99,
  className = '',
  color = 'bg-gray-200',
  darkColor = 'bg-gray-700',
  textColor = 'text-gray-900',
  darkTextColor = 'text-gray-100',
  size = 'medium',
  ariaLabel
}) => {

  const sizeClasses = {
    small: 'px-2 py-0.5 text-xs rounded-lg',
    medium: 'px-3 py-1 text-sm rounded-lg',
    large: 'px-4 py-1 text-base rounded-lg'
  };

  return (
    <span 
      aria-label={ariaLabel} 
      className={`inline-block rounded-lg mb-2 ${color} dark:${darkColor} ${textColor} dark:${darkTextColor} ${sizeClasses[size]} ${className}`}
    >
      {text || (count !== undefined && (count > maxCount ? `${maxCount}+` : count))}
    </span>
  );
};

Badge.displayName = "Badge";
export default Badge;
