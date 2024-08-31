import React from 'react';
import Image from 'next/image';

/**
 * Props for the Avatar component.
 * 
 * @typedef {Object} AvatarProps
 * @property {string} src - The source URL of the avatar image.
 * @property {string} [alt='Avatar'] - The alt text for the avatar image.
 * @property {'sm' | 'md' | 'lg' | number} [size='md'] - The size of the avatar. Can be a preset size or a custom number.
 * @property {'circle' | 'square'} [shape='circle'] - The shape of the avatar.
 * @property {React.ReactNode} [fallback] - Fallback content to display if the image fails to load.
 * @property {string} [className] - Additional class names for custom styling.
 * @property {() => void} [onClick] - Click event handler for the avatar.
 */
export interface AvatarProps {
  src: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | number;
  shape?: 'circle' | 'square';
  fallback?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const sizeMap = {
  sm: 30,
  md: 36,
  lg: 42,
};

/**
 * Avatar component for displaying user profile images.
 * 
 * @component
 * @param {AvatarProps} props - Props for the Avatar component.
 * @returns {JSX.Element} The rendered Avatar component.
 */
const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'md',
  shape = 'circle',
  fallback,
  className = '',
  onClick,
}) => {
  const [error, setError] = React.useState(false);

  const handleError = () => {
    setError(true);
  };

  const dimensionSize = typeof size === 'number' ? size : sizeMap[size];

  const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded-lg';

  if (error && fallback) {
    return (
      <div
        className={`inline-flex items-center justify-center bg-gray-200 ${shapeClass} ${className}`}
        style={{ width: dimensionSize, height: dimensionSize }}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
      >
        {fallback}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={dimensionSize}
      height={dimensionSize}
      className={`inline-block ${shapeClass} ${className}`}
      onError={handleError}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    />
  );
};

Avatar.displayName = "Avatar";
export default Avatar;
