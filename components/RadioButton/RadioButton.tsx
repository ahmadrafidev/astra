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
    const id = `${name}-${value}`;

    return (
        <div className={`flex items-center ${className}`}>
            <input type="radio" id={id} name={name} value={value} checked={checked} onChange={onChange} className="mr-2" />
            {label && <label htmlFor={id}>{label}</label>}
        </div>
    );
};

RadioButton.displayName = "RadioButton";
export default RadioButton;
