import React from 'react';

export interface CheckboxProps {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label, className = '', ...props }) => {
    return (
        <label className={`flex items-center ${className}`}>
            <input 
                type="checkbox" 
                checked={checked} 
                onChange={onChange} 
                className="mr-2" 
                aria-checked={checked}
                {...props}
            />
            {label}
        </label>
    );
};

Checkbox.displayName = "Checkbox";
export default Checkbox;
