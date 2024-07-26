// components/Input/Input.tsx
import React from 'react';

export interface InputProps {
    type?: 'text' | 'password' | 'email';
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    label?: string;
    hint?: string;
    error?: string;
    icon?: React.ReactNode;
    className?: string;
}

const Input: React.FC<InputProps> = ({ type = 'text', value, onChange, placeholder, label, hint, error, icon, className = '', ...props }) => {
    const inputId = React.useId();
    const hintId = hint ? `${inputId}-hint` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;

    return (
        <div className={`flex flex-col ${className}`}>
            {label && (
                <label htmlFor={inputId} className="mb-1 text-gray-700 dark:text-gray-300">
                    {label}
                </label>
            )}
            <div className="relative">
                <input
                    id={inputId}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    aria-describedby={errorId || hintId}
                    aria-invalid={!!error}
                    className={`w-full px-4 py-2 border rounded ${error ? 'border-red-500' : 'border-gray-300'} ${className}`}
                    {...props}
                />
                {icon && <div className="absolute inset-y-0 right-0 pr-3 flex items-center">{icon}</div>}
            </div>
            {hint && !error && (
                <p id={hintId} className="mt-1 text-sm text-gray-500">
                    {hint}
                </p>
            )}
            {error && (
                <p id={errorId} className="mt-1 text-sm text-red-600">
                    {error}
                </p>
            )}
        </div>
    );
};

Input.displayName = "Input";
export default Input;
