import React, { forwardRef, useCallback, KeyboardEvent } from 'react';
import { XCircle } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  label?: string;
  error?: string;
  helpText?: string;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  isClearable?: boolean;
  onClear?: () => void;
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options,
      label,
      error,
      helpText,
      fullWidth = false,
      size = 'medium',
      className,
      id,
      isClearable = false,
      onClear,
      onChange,
      value,
      placeholder,
      ...props
    },
    ref
  ) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

    const sizeClasses = {
      small: 'px-2 py-1 text-sm',
      medium: 'px-3 py-2',
      large: 'px-4 py-3 text-lg',
    };

    const handleKeyDown = useCallback((e: KeyboardEvent<HTMLSelectElement>) => {
      if (isClearable && (e.key === 'Backspace' || e.key === 'Delete') && onClear) {
        e.preventDefault();
        onClear();
      }
    }, [isClearable, onClear]);

    const handleClearClick = useCallback(() => {
      if (onClear) {
        onClear();
      }
    }, [onClear]);

    return (
      <div className={`flex flex-col ${fullWidth ? 'w-full' : ''}`}>
        {label && (
          <label htmlFor={selectId} className="mb-1 text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={`
              border rounded-md bg-white text-gray-900
              disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed
              ${sizeClasses[size]}
              ${fullWidth ? 'w-full' : ''}
              ${error ? 'border-red-500' : 'border-gray-300'}
              ${isClearable ? 'pr-10' : ''}
              ${className}
            `}
            aria-invalid={!!error}
            aria-describedby={`${selectId}-error ${selectId}-help`}
            onChange={onChange}
            onKeyDown={handleKeyDown}
            value={value}
            {...props}
          >
            {placeholder && (
              <option value="" disabled selected={!value}>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>
          {isClearable && value && (
            <button
              type="button"
              onClick={handleClearClick}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Clear selection"
            >
              <XCircle size={18} />
            </button>
          )}
        </div>
        {error && (
          <p id={`${selectId}-error`} className="mt-1 text-sm text-red-600">
            {error}
          </p>
        )}
        {helpText && (
          <p id={`${selectId}-help`} className="mt-1 text-sm text-gray-500">
            {helpText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
export default Select;
