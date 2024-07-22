import React from 'react';

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
}

const Badge: React.FC<BadgeProps> = ({
    text,
    count,
    maxCount = 99,
    className = '',
    color = 'bg-gray-200', 
    darkColor = 'bg-gray-700',
    textColor = 'text-gray-900',
    darkTextColor = 'text-gray-100',
    size = 'medium' 
}) => {

    const sizeClasses = {
        small: 'px-2 py-0.5 text-xs rounded-lg',
        medium: 'px-3 py-1 text-sm rounded-lg',
        large: 'px-4 py-1 text-base rounded-lg'
    };

    return (
        <span className={`inline-block rounded-lg mb-2 ${color} dark:${darkColor} ${textColor} dark:${darkTextColor} ${sizeClasses[size]} ${className}`}>
            {text || (count !== undefined && (count > maxCount ? `${maxCount}+` : count))}
        </span>
    );
};

Badge.displayName = "Badge";
export default Badge;
