import React from 'react';
import { cn } from 'lib/utils';

export interface SwitchProps {
    className?: string;
    ariaLabel?: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange, className = '', ariaLabel, disabled = false, size = 'medium' }) => {
    const sizeClasses = {
        small: 'w-8 h-4',
        medium: 'w-10 h-5',
        large: 'w-12 h-6',
    };

    const knobSizeClasses = {
        small: 'w-3 h-3',
        medium: 'w-4 h-4',
        large: 'w-5 h-5',
    };

    const translateClasses = {
        small: 'translate-x-4',
        medium: 'translate-x-5',
        large: 'translate-x-6',
    };

    return (
        <label className={cn("relative inline-flex items-center cursor-pointer", className, { 'cursor-not-allowed opacity-50': disabled })}>
            <input 
                type="checkbox" 
                checked={checked} 
                onChange={onChange} 
                className="sr-only" 
                role="switch" 
                aria-checked={checked} 
                aria-label={ariaLabel} 
                disabled={disabled}
            />
            <span 
                className={cn(
                    "rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500",
                    sizeClasses[size], 
                    { 'bg-gray-300 dark:bg-gray-700': !checked, 'bg-green-700': checked }
                )}
            ></span>
            <span 
                className={cn(
                    "absolute bg-white rounded-full transition-transform",
                    knobSizeClasses[size],
                    { [translateClasses[size]]: checked, 'translate-x-0': !checked, 'peer-focus:ring-2 peer-focus:ring-blue-500': !disabled }
                )}
            ></span>
        </label>
    );
};

Switch.displayName = "Switch";
export default Switch;
