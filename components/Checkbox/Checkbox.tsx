import React, { forwardRef } from 'react';
import { cn } from "@/lib/utils";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
  error?: string;
  className?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className, labelClassName, ...props }, ref) => {
    const id = React.useId();

    return (
      <div className="flex flex-col">
        <div className={cn("flex items-center", className)}>
          <input
            type="checkbox"
            id={id}
            ref={ref}
            className={cn(
              "h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary",
              props.disabled && "cursor-not-allowed opacity-50",
              error && "border-red-500"
            )}
            {...props}
          />
          {label && (
            <label
              htmlFor={id}
              className={cn(
                "ml-2 text-base font-normal text-gray-900 dark:text-gray-50",
                props.disabled && "cursor-not-allowed opacity-50",
                labelClassName
              )}
            >
              {label}
            </label>
          )}
        </div>
        {error && <p className="mt-1 text-sm font-sans font-normal text-red-500">{error}</p>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
export default Checkbox;
