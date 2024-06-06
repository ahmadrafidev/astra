// components/Badge/Badge.tsx
import React from 'react';

export interface BadgeProps {
    text?: string;      
    count?: number;     
    maxCount?: number; 
    className?: string;
    color?: string;
    darkColor?: string;   
    textColor?: string; 
}

const Badge: React.FC<BadgeProps> = ({
    text,
    count,
    maxCount = 99,
    className = '',
    color = 'bg-gray-200', 
    darkColor = 'bg-gray-300',
    textColor = 'text-gray-900' 
}) => {
    return (
        <span className={`inline-block px-3 py-1 text-sm font-normal rounded-lg mb-2 ${color} dark:${darkColor} ${textColor} ${className}`}>
            {text || (count !== undefined && (count > maxCount ? `${maxCount}+` : count))}
        </span>
    );
};

export default Badge;
