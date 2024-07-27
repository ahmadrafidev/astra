// components/Spinner/Spinner.tsx
import React from 'react';

export interface SpinnerProps {
    size?: number;
    className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 24, className = '' }) => {
    return (
        <div
            className={`inline-block border-4 border-t-transparent border-gray-400 rounded-full ${className}`}
            style={{ width: size, height: size }}
            role="status"
            aria-label="Loading"
        >
            <span className="sr-only">Loading...</span>
        </div>
    );
};

Spinner.displayName = "Spinner";
export default Spinner;
