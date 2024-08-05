import React, { forwardRef } from 'react';
import { cn } from "@/lib/utils";

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
            onChange={() => {}}  // We're handling changes in onClick
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
                "font-medium text-gray-900",
                error && "text-red-500",
                disabled && "opacity-50 cursor-not-allowed",
                labelClassName
              )}
            >
              {label}
            </label>
          )}
          {description && (
            <p className={cn("text-gray-500", descriptionClassName)}>
              {description}
            </p>
          )}
          {error && (
            <p className={cn("mt-1 text-sm text-red-600", errorClassName)}>
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