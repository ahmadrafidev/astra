// components/AvatarGroup/AvatarGroup.tsx
import React from 'react';
import Avatar, { AvatarProps } from '../Avatar/Avatar';

export interface AvatarGroupProps {
    avatars: AvatarProps[];
    max?: number;
    size?: number;
    className?: string;
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ avatars, max = 3, size = 40, className = '' }) => {
    return (
        <div className={`flex -space-x-2 overflow-hidden ${className}`}>
            {avatars.slice(0, max).map((avatar, index) => (
                <Avatar key={index} {...avatar} size={size} className="border-2 border-white dark:border-gray-800" />
            ))}
            {avatars.length > max && (
                <div className={`flex items-center justify-center w-${size} h-${size} bg-gray-200 dark:bg-gray-700 rounded-full border-2 border-white dark:border-gray-800`}>
                    <span className="text-xs text-gray-600 dark:text-gray-300">+{avatars.length - max}</span>
                </div>
            )}
        </div>
    );
};

AvatarGroup.displayName = "AvatarGroup";
export default AvatarGroup;
