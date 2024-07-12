// components/ProgressTracker/ProgressTracker.tsx
import React from 'react';

export interface ProgressTrackerProps {
    steps: string[];
    currentStep: number;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ steps, currentStep }) => {
    return (
        <div className="flex items-center">
            {steps.map((step, index) => (
            <div key={index} className="flex items-center">
                <div
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    index <= currentStep ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
                >
                {index + 1}
                </div>
                <div className="ml-2 mr-4">{step}</div>
                {index < steps.length - 1 && <div className="w-8 h-1 bg-gray-200" />}
            </div>
            ))}
    </div>
    );
};

ProgressTracker.displayName = "ProgressTracker";
export default ProgressTracker;
