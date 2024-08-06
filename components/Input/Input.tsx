import React, { forwardRef, useState } from 'react';
import { cn } from '@/lib/utils'; 

/**
 * Props for the Input component.
 * 
 * @typedef {Object} InputProps
 * @property {'text' | 'password' | 'email'} [type] - The type of input.
 * @property {string} value - The value of the input.
 * @property {function} onChange - The function to call when the input value changes.
 * @property {string} [placeholder] - The placeholder text for the input.
 * @property {string} [label] - The label for the input.
 * @property {string} [hint] - A hint for the input.
 * @property {string} [error] - An error message for the input.
 * @property {React.ReactNode} [icon] - An optional icon to display inside the input.
 * @property {string} [className] - Additional class names for the wrapper div.
 * @property {string} [inputClassName] - Additional class names for the input element.
 * @property {string} [labelClassName] - Additional class names for the label.
 * @property {string} [hintClassName] - Additional class names for the hint.
 * @property {string} [errorClassName] - Additional class names for the error message.
 * @property {boolean} [disable] - Flag to disable the input.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'password' | 'email';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  hint?: string;
  error?: string;
  icon?: React.ReactNode;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  hintClassName?: string;
  errorClassName?: string;
  disable?: boolean;
}

/**
 * A customizable and accessible input component.
 *
 * @param {InputProps} props - The props for the input component.
 * @returns {JSX.Element} The input component.
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      value,
      onChange,
      placeholder,
      label,
      hint,
      error,
      icon,
      className = '',
      inputClassName = '',
      labelClassName = '',
      hintClassName = '',
      errorClassName = '',
      disable = false,
      ...props
    },
    ref
  ) => {
    
    const [showPassword, setShowPassword] = useState(false);
    const inputId = React.useId();
    const hintId = hint ? `${inputId}-hint` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;

    const handleIconClick = () => {
      if (type === 'password') {
        setShowPassword((prevShowPassword) => !prevShowPassword);
      }
    };

    return (
      <div className={cn('flex flex-col', className)}>
        {label && (
          <label
            htmlFor={inputId}
            className={cn('mb-1 text-gray-700 dark:text-gray-300', labelClassName)}
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            id={inputId}
            type={showPassword ? 'text' : type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            aria-describedby={errorId || hintId}
            aria-invalid={!!error}
            className={cn(
              'w-full px-4 py-2 border rounded',
              disable ? 'cursor-not-allowed' : 'cursor-auto',
              error ? 'border-red-500' : 'border-gray-300',
              inputClassName
            )}
            ref={ref}
            {...props}
          />
          {icon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={handleIconClick}>
              {icon}
            </div>
          )}
        </div>
        {hint && !error && (
          <p id={hintId} className={cn('mt-1 text-sm text-gray-500', hintClassName)}>
            {hint}
          </p>
        )}
        {error && (
          <p id={errorId} className={cn('mt-1 text-sm text-red-600', errorClassName)}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
