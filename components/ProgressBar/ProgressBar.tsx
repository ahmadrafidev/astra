import React from 'react';

export interface ProgressBarProps {
    progress: number; 
    className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, className = '' }) => {
    return (
        <div className={`w-full bg-gray-200 rounded ${className}`} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
            <div
                className="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded"
                style={{ width: `${progress}%` }}
            >
                {progress}%
            </div>
        </div>
    );
};

ProgressBar.displayName = "ProgressBar";
export default ProgressBar;
