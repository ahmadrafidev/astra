import React, { forwardRef, useCallback, KeyboardEvent } from 'react';
import { XCircle, ChevronDown } from 'lucide-react';

/**
 * Represents an option in the Select component.
 * 
 * @typedef {Object} SelectOption
 * @property {string} value - The value of the option.
 * @property {string} label - The label of the option.
 * @property {boolean} [disabled] - Whether the option is disabled.
 */
export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

/**
 * Props for the Select component.
 * 
 * @typedef {Object} SelectProps
 * @property {SelectOption[]} options - The options to be displayed in the select.
 * @property {string} [label] - The label for the select component.
 * @property {string} [error] - Error message to be displayed.
 * @property {string} [helpText] - Help text to be displayed.
 * @property {boolean} [fullWidth=false] - Whether the select should take the full width of its container.
 * @property {'small' | 'medium' | 'large'} [variant='medium'] - The size variant of the select.
 * @property {boolean} [isClearable=false] - Whether the select is clearable.
 * @property {() => void} [onClear] - Function to call when the clear button is clicked.
 * @property {string} [placeholder] - Placeholder text for the select.
 */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  label?: string;
  error?: string;
  helpText?: string;
  fullWidth?: boolean;
  variant?: 'small' | 'medium' | 'large';
  isClearable?: boolean;
  onClear?: () => void;
  placeholder?: string;
}

/**
 * Select component for rendering a dropdown menu with options.
 * 
 * @component
 * @param {SelectProps} props - Props for the Select component.
 * @param {React.Ref<HTMLSelectElement>} ref - Ref for the select element.
 * @returns {JSX.Element} The rendered Select component.
 */
const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options,
      label,
      error,
      helpText,
      fullWidth = false,
      variant = 'medium',
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
    
    const variantClasses = {
      small: 'py-1 pl-2 pr-8 text-sm',
      medium: 'py-2 pl-3 pr-10',
      large: 'py-3 pl-4 pr-12 text-lg',
    };

    const fixedWidths = {
      small: 'w-40',
      medium: 'w-48',
      large: 'w-56',
    };

    const handleKeyDown = useCallback((e: KeyboardEvent<HTMLSelectElement>) => {
      if (isClearable && (e.key === 'Backspace' || e.key === 'Delete') && onClear) {
        e.preventDefault();
        onClear();
      }
    }, [isClearable, onClear]);

    const handleClearClick = useCallback((e: React.MouseEvent) => {
      e.stopPropagation();
      if (onClear) {
        onClear();
      }
    }, [onClear]);

    return (
      <div className={`flex flex-col ${fullWidth ? 'w-full' : 'inline-flex'}`}>
        {label && (
          <label htmlFor={selectId} className="mb-1 text-sm font-medium text-gray-800 dark:text-gray-50">
            {label}
          </label>
        )}
        <div className={`relative ${fullWidth ? 'w-full' : fixedWidths[variant]}`}>
          <select
            ref={ref}
            id={selectId}
            className={`
              appearance-none border rounded-md bg-white text-gray-700
              disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed
              ${variantClasses[variant]}
              ${fullWidth ? 'w-full' : 'w-full'}
              ${error ? 'border-red-500' : 'border-gray-300'}
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
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-700 hover:text-gray-500">
            <ChevronDown size={18} />
          </div>
          {isClearable && value && (
            <button
              type="button"
              onClick={handleClearClick}
              className="absolute inset-y-0 right-0 flex items-center pr-8 text-gray-700 hover:text-gray-500"
              aria-label="Clear selection"
            >
              <XCircle size={18} />
            </button>
          )}
        </div>
        {error && (
          <p id={`${selectId}-error`} className="mt-1 text-sm text-red-600 dark:text-red-500">
            {error}
          </p>
        )}
        {helpText && (
          <p id={`${selectId}-help`} className="mt-1 text-sm text-gray-600 dark:text-gray-100">
            {helpText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
export default Select;
