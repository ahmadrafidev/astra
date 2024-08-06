import React, { useState, useCallback, useMemo } from 'react';
import { Star } from 'lucide-react';

/**
 * Props for the Rating component.
 * 
 * @typedef {Object} RatingProps
 * @property {number} [maxRating=5] - The maximum rating value.
 * @property {number} [defaultRating=0] - The default rating value.
 * @property {(rating: number | null) => void} [onRate] - Function to call when the rating changes.
 * @property {'sm' | 'md' | 'lg'} [size='md'] - The size of the rating icons.
 * @property {boolean} [readOnly=false] - Whether the rating component is read-only.
 * @property {React.ReactNode} [icon] - Custom icon for the rating.
 * @property {string} [activeColor='text-yellow-400'] - Color of the active rating icons.
 * @property {string} [inactiveColor='text-gray-300'] - Color of the inactive rating icons.
 * @property {string} [className] - Additional class names for custom styling.
 * @property {string} [label='Rating Component'] - Accessible label for the rating component.
 * @property {boolean} [allowClear=false] - Whether the rating can be cleared.
 */
export interface RatingProps {
  maxRating?: number;
  defaultRating?: number;
  onRate?: (rating: number | null) => void;
  size?: 'sm' | 'md' | 'lg';
  readOnly?: boolean;
  icon?: React.ReactNode;
  activeColor?: string;
  inactiveColor?: string;
  className?: string;
  label?: string;
  allowClear?: boolean;
}

/**
 * Rating component for displaying a star rating system.
 * 
 * @component
 * @param {RatingProps} props - Props for the Rating component.
 * @returns {JSX.Element} The rendered Rating component.
 */
const Rating: React.FC<RatingProps> = ({
  maxRating = 5,
  defaultRating = 0,
  onRate,
  size = 'md',
  readOnly = false,
  icon,
  activeColor = 'text-yellow-400',
  inactiveColor = 'text-gray-300',
  className = '',
  label = 'Rating Component',
  allowClear = false,
}) => {
  const [rating, setRating] = useState<number | null>(defaultRating);
  const [hover, setHover] = useState<number | null>(null);

  const handleRating = useCallback((newRating: number) => {
    if (!readOnly) {
      if (allowClear && newRating === rating) {
        setRating(null);
        onRate?.(null);
      } else {
        setRating(newRating);
        onRate?.(newRating);
      }
    }
  }, [readOnly, allowClear, rating, onRate]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLSpanElement>, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleRating(index + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      handleRating(Math.max(1, (rating || 0) - 1));
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      handleRating(Math.min(maxRating, (rating || 0) + 1));
    }
  }, [handleRating, rating, maxRating]);

  const sizeClasses = useMemo(() => ({
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  }), []);

  const stars = useMemo(() => 
    Array.from({ length: maxRating }, (_, index) => (
      <span
        key={index}
        onClick={() => handleRating(index + 1)}
        onMouseEnter={() => !readOnly && setHover(index + 1)}
        onMouseLeave={() => !readOnly && setHover(null)}
        onKeyDown={(e) => handleKeyDown(e, index)}
        tabIndex={readOnly ? -1 : 0}
        role={readOnly ? 'presentation' : 'button'}
        aria-label={`${index + 1} star${index + 1 !== 1 ? 's' : ''}`}
        className={`cursor-${readOnly ? 'default' : 'pointer'} ${sizeClasses[size]} ${
          index < (hover ?? rating ?? 0) ? activeColor : inactiveColor
        }`}
      >
        {icon || <Star fill={index < (hover ?? rating ?? 0) ? 'currentColor' : 'none'} />}
      </span>
    )), [maxRating, handleRating, readOnly, hover, rating, handleKeyDown, sizeClasses, size, activeColor, inactiveColor, icon]);

  return (
    <div className={`inline-flex flex-col items-start ${className}`} role="group" aria-label={label}>
      <div className="sr-only">{label}</div>
      <div className="flex">
        {stars}
      </div>
      {!readOnly && (
        <div className="sr-only" aria-live="polite">
          Current rating is {rating === null ? 'cleared' : `${rating} out of ${maxRating} stars`}
        </div>
      )}
    </div>
  );
};

Rating.displayName = "Rating";
export default Rating;
