'use client';

import React, { useState } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import TOC from '@/components/TOC/TOC';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

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

    const tocItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'usage', label: 'Usage' },
        { id: 'properties', label: 'Properties' },
        { id: 'best-practices', label: 'Best Practices' },
    ];

    const codeExample = `
        <Stepper
            steps={steps}
            currentStep={currentStep}
            onStepClick={handleStepClick}
            className="mb-4"
            activeColor="bg-blue-700"
            inactiveColor="bg-gray-200"
        />
    `;

    return (
        <Layout>
            <div className="flex">
                <div className="w-4/5 pr-2">
                    <Badge text="Components" />
                    <div id="overview" className="flex flex-col mb-5 scroll-mt-16">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Stepper</h1>
                        <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                            A progress indicator for multi-step processes or forms.
                        </p>
                    </div>

                    {/* Usage Section */}
                    <section id="usage" className="scroll-mt-20">
                        <Tabs>
                            <Tab label="Preview">
                                <div className="relative w-full h-64 overflow-hidden mt-4 rounded-lg bg-zinc-100 dark:bg-zinc-950 shadow border border-slate-300 dark:border-slate-800">
                                    <div className="p-6 space-y-4 flex flex-col justify-center items-center">
                                        <Stepper
                                            steps={steps}
                                            currentStep={currentStep}
                                            onStepClick={handleStepClick}
                                            className="mb-4"
                                            activeColor="bg-blue-700"
                                            inactiveColor="bg-gray-200"
                                        />
                                        <div className="mt-4 flex flex-col gap-4 items-center">
                                            <p>Current Step: {currentStep + 1}</p>
                                            <div className="flex flex-row space-x-2">
                                                <button
                                                    onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                                                    className="px-6 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black rounded-lg"
                                                    disabled={currentStep === 0}
                                                >
                                                    Previous
                                                </button>
                                                <button
                                                    onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
                                                    className="px-6 py-2 bg-zinc-50 dark:bg-zinc-900 text-black dark:text-white rounded-lg border border-gray-400 dark:border-gray-700"
                                                    disabled={currentStep === steps.length - 1}
                                                >
                                                    Next
                                                </button>
                                            </div>                
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab label="Code">
                                <div
                                    className="relative rounded-lg bg-gray-900 dark:bg-gray-800/90 mt-4"
                                    role="region"
                                    aria-label="Code Snippet in tsx"
                                >
                                    <div className="flex justify-between items-center px-4 py-2 border-b border-gray-800">
                                        <span className="text-sm font-medium text-gray-100">
                                            tsx
                                        </span>
                                    </div>
                                    <div className="overflow-auto rounded-lg border border-gray-800">
                                        <SyntaxHighlighter
                                            language="tsx"
                                            style={materialLight}
                                            showLineNumbers={false}
                                            wrapLongLines={true}
                                            customStyle={{
                                                margin: 1.5,
                                                borderRadius: '0.5rem 0.5rem 0.5rem 0.5rem',
                                                fontSize: '14px',
                                                lineHeight: '1.25',
                                                padding: '10px',
                                            }}
                                        >
                                            {codeExample}
                                        </SyntaxHighlighter>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </section>
                    <StepperDocumentation />
                </div>
                <TOC items={tocItems} />
            </div>
        </Layout>
    );
};

StepperPageClient.displayName = "StepperPageClient";
export default StepperPageClient;
