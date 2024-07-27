// components/Switch/Switch.tsx
import React from 'react';

export interface SwitchProps {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    ariaLabel?: string;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange, className = '', ariaLabel }) => {
    return (
        <label className={`relative inline-flex items-center cursor-pointer ${className}`}>
            <input 
                type="checkbox" 
                checked={checked} 
                onChange={onChange} 
                className="sr-only" 
                role="switch" 
                aria-checked={checked} 
                aria-label={ariaLabel}
            />
            <span className="w-10 h-4 bg-gray-300 rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:bg-gray-700"></span>
            <span 
                className={`absolute left-0.5 top-0.5 w-3.5 h-3.5 bg-white rounded-full transition-transform ${checked ? 'translate-x-6' : 'translate-x-0'} peer-focus:ring-2 peer-focus:ring-blue-500`}
            ></span>
        </label>
    );
};

Switch.displayName = "Switch";
export default Switch;
