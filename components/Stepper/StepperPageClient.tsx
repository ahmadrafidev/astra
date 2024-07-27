// components/Stepper/StepperPageClient.tsx
'use client';

import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';
import Stepper from './Stepper';

const StepperPageClient: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

    return (
        <Layout>
            <Badge text="Components" />
            <h1 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Stepper</h1>
            <Stepper steps={steps} currentStep={currentStep} className="mb-6" />
            {/* Props Section */}
            <section className="mb-10">
                <h2 className="text-2xl md:text-3xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Props</h2>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow">
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr>
                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Name</th>
                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Type</th>
                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Default</th>
                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">steps</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">{'string[]'}</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">An array of step names.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">currentStep</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">number</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The index of the current step (0-based).</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling the stepper.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            {/* Best Practices Section */}
            <section>
                <h2 className="text-2xl md:text-3xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">Use steppers to guide users through a series of steps in a sequential manner.</p>
                    <p className="text-gray-700 dark:text-gray-300">Ensure each step is clearly labeled and distinguishable.</p>
                    <p className="text-gray-700 dark:text-gray-300">Provide feedback to users on their current step and the steps they have completed.</p>
                </div>
            </section>
        </Layout>
    );
};

StepperPageClient.displayName = "StepperPageClient";
export default StepperPageClient;
