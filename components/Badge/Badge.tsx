// components/Badge/Badge.tsx
import React from 'react';

export interface BadgeProps {
    count: number;
    maxCount?: number;
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({ count, maxCount = 99, className = '' }) => {
    return (
        <span className={`inline-block px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full ${className}`}>
            {count > maxCount ? `${maxCount}+` : count}
        </span>
    );
};

export default Badge;
