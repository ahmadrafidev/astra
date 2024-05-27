// components/Avatar/Avatar.tsx
import React from 'react';

export interface AvatarProps {
    src: string;
    alt?: string;
    size?: number;
    className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt = 'Avatar', size = 40, className = '' }) => {
return (
        <img
            src={src}
            alt={alt}
            className={`inline-block rounded-full ${className}`}
            style={{ width: size, height: size }}
        />
    );
};

export default Avatar;
