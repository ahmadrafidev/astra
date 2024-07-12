// components/TextArea/TextArea.tsx
import React from 'react';

interface TextAreaProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ value, onChange, placeholder, className = '' }) => {
    return (
    <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="px-4 py-2 border rounded ${className}"
    />
    );
};

TextArea.displayName = "TextArea";
export default TextArea;
