// components/Input/Input.tsx
import React from 'react';

export interface InputProps {
    type?: 'text' | 'password' | 'email';
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
}

const Input: React.FC<InputProps> = ({ type = 'text', value, onChange, placeholder, className = '', ...props }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`px-4 py-2 border rounded ${className}`}
        />
    );
};

export default Input;
