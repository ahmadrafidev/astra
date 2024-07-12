// components/Spinner/Spinner.tsx
import React from 'react';

export interface SpinnerProps {
    size?: number;
    className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 24, className = '' }) => {
    return (
        <div
            className={`spinner-border animate-spin inline-block w-${size} h-${size} border-4 rounded-full ${className}`}
            role="status"
        >
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};

Spinner.displayName = "Spinner";
export default Spinner;
