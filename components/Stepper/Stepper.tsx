// components/Stepper/Stepper.tsx
import React from 'react';

export interface StepperProps {
    steps: string[];
    currentStep: number;
    className?: string;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep, className }) => {
    return (
        <div className={`flex items-center ${className}`} aria-label="Progress">
            {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                    <div
                        className={`w-8 h-8 flex items-center justify-center rounded-full ${
                            index <= currentStep ? 'bg-blue-500 text-white' : 'bg-gray-200'
                        }`}
                        aria-current={index === currentStep ? 'step' : undefined}
                        aria-label={`Step ${index + 1}: ${step}`}
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

Stepper.displayName = "Stepper";
export default Stepper;
