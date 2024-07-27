// components/Avatar/Avatar.tsx
import React from 'react';
import Image from 'next/image';

export interface AvatarProps {
    src: string;
    alt?: string;
    size?: number;
    className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt = 'Avatar', size = 40, className = '' }) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            className={`inline-block rounded-full ${className}`}
        />
    );
};

Avatar.displayName = "Avatar";
export default Avatar;
