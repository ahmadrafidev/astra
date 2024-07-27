// components/IconButton/IconButton.tsx
import React from 'react';
import * as RadixIcons from '@radix-ui/react-icons';

export interface IconButtonProps {
    icon: keyof typeof RadixIcons;
    onClick: () => void;
    ariaLabel: string;
    className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, ariaLabel, className }) => {
    const IconComponent = RadixIcons[icon];
    return (
        <button
            onClick={onClick}
            aria-label={ariaLabel}
            className={`p-2 rounded-full focus:outline-none ${className}`}
        >
            <IconComponent className="w-6 h-6" />
        </button>
    );
};

IconButton.displayName = "IconButton";
export default IconButton;
