// components/AvatarGroup/AvatarGroup.tsx
import React from 'react';
import Image from 'next/image';

export interface AvatarGroupProps {
    src: string;
    alt?: string;
    size?: number;
    className?: string;
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ src, alt = 'Avatar', size = 40, className = '' }) => {
    return (
        <Image
            src={src}
            alt={alt}
            className={`inline-block rounded-full ${className}`}
            style={{ width: size, height: size }}
        />
    );
};

AvatarGroup.displayName = "AvatarGroup";
export default AvatarGroup;
