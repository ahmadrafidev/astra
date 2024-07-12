// components/Select/Select.tsx
import React from 'react';

export interface SelectProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
    className?: string;
}

const Select: React.FC<SelectProps> = ({ value, onChange, options, className = '' }) => {
    return (
        <select value={value} onChange={onChange} className={`px-4 py-2 border rounded ${className}`}>
            {options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
            ))}
        </select>
    );
};

Select.displayName = "Select";
export default Select;
