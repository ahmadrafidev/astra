import React, { forwardRef } from 'react';
import { cn } from "@/lib/utils";

/**
 * Props for the Radio component.
 * 
 * @typedef {Object} RadioProps
 * @property {string} [label] - The label for the radio button.
 * @property {string} [description] - Additional description for the radio button.
 * @property {string} [error] - Error message to be displayed.
 * @property {string} [containerClassName] - Additional class names for the container.
 * @property {string} [labelClassName] - Additional class names for the label.
 * @property {string} [descriptionClassName] - Additional class names for the description.
 * @property {string} [errorClassName] - Additional class names for the error message.
 * @property {(value: string | null) => void} onChange - Function to call when the radio button value changes.
 */
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  description?: string;
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
  descriptionClassName?: string;
  errorClassName?: string;
  onChange: (value: string | null) => void;
}

/**
 * Radio component for rendering a radio button with label, description, and error message.
 * 
 * @component
 * @param {RadioProps} props - Props for the Radio component.
 * @param {React.Ref<HTMLInputElement>} ref - Ref for the radio input element.
 * @returns {JSX.Element} The rendered Radio component.
 */
const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ 
    className,
    containerClassName,
    labelClassName,
    descriptionClassName,
    errorClassName,
    label,
    description,
    error,
    id,
    disabled,
    onChange,
    checked,
    value,
    ...props
  }, ref) => {
    const inputId = id || `radio-${props.name}-${value}`;

    const handleClick = () => {
      if (disabled) return;
      
      if (checked) {
        onChange(null);  
      } else {
        onChange(value as string); 
      }
    };

    return (
      <div className={cn("flex items-start", containerClassName)}>
        <div className="flex items-center h-5">
          <input
            type="radio"
            id={inputId}
            ref={ref}
            disabled={disabled}
            checked={checked}
            onChange={() => {}}  
            onClick={handleClick}
            value={value}
            className={cn(
              "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600",
              error && "border-red-500",
              disabled && "opacity-50 cursor-not-allowed",
              className
            )}
            {...props}
          />
        </div>
        <div className="ml-3 text-sm flex-grow">
          {label && (
            <label
              htmlFor={inputId}
              className={cn(
                "font-medium text-gray-900 dark:text-gray-50",
                error && "text-red-600 dark:text-red-500",
                disabled && "opacity-50 cursor-not-allowed",
                labelClassName
              )}
            >
              {label}
            </label>
          )}
          {description && (
            <p className={cn("text-gray-600 dark:text-gray-100", descriptionClassName)}>
              {description}
            </p>
          )}
          {error && (
            <p className={cn("mt-1 text-sm text-red-600 dark:text-red-500", errorClassName)}>
              {error}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Radio.displayName = "Radio";
export default Radio;
