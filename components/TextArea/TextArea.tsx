import React, { forwardRef } from 'react';
import { cn } from "@/lib/utils";

/**
 * TextArea component with label, error message, and helper text.
 * 
 * @component
 * @param {Object} props - Props for TextArea component
 * @param {string} [props.label] - Label for the textarea
 * @param {string} [props.error] - Error message to display
 * @param {string} [props.helperText] - Helper text to display
 * @param {string} [props.className] - Additional class names for styling
 * @param {string} [props.id] - ID for the textarea
 * @param {React.Ref<HTMLTextAreaElement>} ref - Ref for the textarea
 * @returns {JSX.Element} The rendered TextArea component
 */
export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={textareaId} className="block text-base font-medium text-gray-700 dark:text-gray-200 mb-1">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400",
            error ? "border-red-500" : "border-gray-300",
            className
          )}
          aria-invalid={!!error}
          aria-describedby={`${textareaId}-error ${textareaId}-helper`}
          {...props}
        />
        {error && (
          <p id={`${textareaId}-error`} className="mt-1 text-xs text-red-500">
            {error}
          </p>
        )}
        {helperText && (
          <p id={`${textareaId}-helper`} className="mt-1 text-xs text-gray-600 dark:text-gray-300">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
export default TextArea;
