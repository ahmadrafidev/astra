'use client';

import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Stepper from './Stepper';
import StepperDocumentation from './StepperDocumentation';

const StepperPageClient: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const steps = [
        { label: 'Step 1', description: 'First step description' },
        { label: 'Step 2', description: 'Second step description' },
        { label: 'Step 3', description: 'Third step description' },
        { label: 'Step 4', description: 'Fourth step description' },
    ];

    const handleStepClick = (stepIndex: number) => {
        setCurrentStep(stepIndex);
    };

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Stepper</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A progress indicator for multi-step processes or forms.
                </p>
            </div>
            <Stepper
                steps={steps}
                currentStep={currentStep}
                onStepClick={handleStepClick}
                className="mb-4"
                activeColor="bg-blue-700"
                inactiveColor="bg-gray-200"
            />
            <div className="mt-4">
                <p>Current Step: {currentStep + 1}</p>
                <button
                    onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                    className="mr-2 px-4 py-1 bg-blue-500 text-white rounded"
                    disabled={currentStep === 0}
                >
                    Previous
                </button>
                <button
                    onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
                    className="px-4 py-1 bg-blue-500 text-white rounded"
                    disabled={currentStep === steps.length - 1}
                    >
                    Next
                </button>
            </div>
            <StepperDocumentation />
        </Layout>
    );
};

StepperPageClient.displayName = "StepperPageClient";
export default StepperPageClient;
