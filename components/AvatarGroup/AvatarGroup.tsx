import React from 'react';
import Avatar, { AvatarProps } from '../Avatar/Avatar';

/**
 * Props for the AvatarGroup component.
 * 
 * @typedef {Object} AvatarGroupProps
 * @property {AvatarProps[]} avatars - Array of avatar props to render.
 * @property {number} [max=3] - Maximum number of avatars to display.
 * @property {AvatarProps['size']} [size='md'] - Size of the avatars.
 * @property {AvatarProps['shape']} [shape='circle'] - Shape of the avatars.
 * @property {'sm' | 'md' | 'lg'} [overlap='md'] - Overlap size for the avatars.
 * @property {string} [className] - Additional class names for custom styling.
 */
export interface AvatarGroupProps {
  avatars: AvatarProps[];
  max?: number;
  size?: AvatarProps['size'];
  shape?: AvatarProps['shape'];
  overlap?: 'sm' | 'md' | 'lg';
  className?: string;
}

const overlapClasses = {
  sm: '-space-x-1',
  md: '-space-x-2',
  lg: '-space-x-3',
};

/**
 * AvatarGroup component for displaying a group of avatars with overlap.
 * 
 * @component
 * @param {AvatarGroupProps} props - Props for the AvatarGroup component.
 * @returns {JSX.Element} The rendered AvatarGroup component.
 */
const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars,
  max = 3,
  size = 'md',
  shape = 'circle',
  overlap = 'md',
  className = '',
}) => {
  const visibleAvatars = avatars.slice(0, max);
  const remainingCount = avatars.length - max;

  return (
    <div className={`flex ${overlapClasses[overlap]} ${className}`}>
      {visibleAvatars.map((avatar, index) => (
        <div key={index} className="transition-transform hover:scale-110 focus-within:scale-110">
          <Avatar
            {...avatar}
            size={size}
            shape={shape}
            className={`border-2 border-background ${avatar.className || ''}`}
          />
        </div>
      ))}
      {remainingCount > 0 && (
        <div 
          className={`
            flex items-center justify-center bg-gray-200 dark:bg-gray-700
            border-2 border-background
            transition-transform hover:scale-110 focus-within:scale-110
            ${shape === 'circle' ? 'rounded-full' : 'rounded-md'}
          `}
          style={{
            width: typeof size === 'number' ? size : undefined,
            height: typeof size === 'number' ? size : undefined
          }}
        >
          <span className="text-xs font-medium">+{remainingCount}</span>
        </div>
      )}
    </div>
  );
};

AvatarGroup.displayName = "AvatarGroup";
export default AvatarGroup;
