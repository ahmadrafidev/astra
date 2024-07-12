// components/RadioButton/RadioButton.tsx
import React from 'react';

export interface RadioButtonProps {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    name: string;
    value: string;
    className?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ checked, onChange, label, name, value, className = '' }) => {
    return (
        <label className="flex items-center ${className}">
            <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="mr-2" />
            {label}
        </label>
    );
};

RadioButton.displayName = "RadioButton";
export default RadioButton;
