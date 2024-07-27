// components/ProgressTracker/ProgressTrackerPageClient.tsx
'use client';

import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import ProgressTracker from './ProgressTracker';

const ProgressTrackerPageClient: React.FC = () => {
    const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <Layout>
            <Badge text="Components" />
            <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Progress Tracker</h1>
            <ProgressTracker steps={steps} currentStep={currentStep} className="my-4" />
            <div className="flex space-x-2 mt-4">
                <button
                    onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
                    className="px-4 py-2 bg-gray-300 rounded"
                >
                    Previous
                </button>
                <button
                    onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Next
                </button>
            </div>

            {/* Props Section */}
            <section className="mb-10">
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Props</h2>
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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string[]</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The list of steps to display in the progress tracker.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">currentStep</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">number</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The current step (0-based index).</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Best Practices Section */}
            <section>
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">Ensure the progress tracker clearly indicates the current step.</p>
                    <p className="text-gray-700 dark:text-gray-300">Use distinguishable colors to indicate completed, current, and upcoming steps.</p>
                    <p className="text-gray-700 dark:text-gray-300">Provide meaningful labels for each step to help users understand the process.</p>
                    <p className="text-gray-700 dark:text-gray-300">Ensure the progress tracker is accessible and usable via keyboard navigation.</p>
                </div>
            </section>
        </Layout>
    );
};

ProgressTrackerPageClient.displayName = "ProgressTrackerPageClient";
export default ProgressTrackerPageClient;
