import React from 'react';

export interface ErrorProps {
    message: string;
    onRetry?: () => void;
    className?: string;
}

const Error: React.FC<ErrorProps> = ({ message, onRetry, className }) => {
    return (
        <div className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ${className}`} role="alert" aria-live="assertive">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{message}</span>
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="ml-4 bg-red-500 text-white px-3 py-1 rounded"
                >
                    Retry
                </button>
            )}
        </div>
    );
};

Error.displayName = "Error";
export default Error;
