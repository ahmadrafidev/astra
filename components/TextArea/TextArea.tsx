import React from 'react';

export interface TextAreaProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    className?: string;
    ariaLabel?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ value, onChange, placeholder, className = '', ariaLabel }) => {
    return (
        <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`px-4 py-2 border rounded ${className}`}
            aria-label={ariaLabel}
        />
    );
};

TextArea.displayName = "TextArea";
export default TextArea;
