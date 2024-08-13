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
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Progress Tracker</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A step-by-step guide displaying progress through a multi-stage process.
                </p>
            </div>
            <section className="my-5 space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-6">Example</h2>
                <ProgressTracker
                    steps={steps}
                    currentStep={currentStep}
                    activeClassName="bg-blue-500 text-white dark:text-white"
                    inactiveClassName="bg-gray-200 text-gray-900"
                    stepNumberClassName="w-8 h-8 flex items-center justify-center rounded-full"
                    stepLabelClassName="ml-2 mr-4 font-medium text-black dark:text-white"
                    separatorClassName="w-8 h-1 bg-gray-200"
                />
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
            </section>
            {/* Props Section */}
            <section className="my-5">
                <h2 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-50 mb-6">Props</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Type</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Default</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Description</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">steps</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string[]</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The list of steps to display in the progress tracker.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">currentStep</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">number</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The current step (0-based index).</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Empty</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Additional class names for custom styling.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">activeClassName</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Empty</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Class names for active steps.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">inactiveClassName</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Empty</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Class names for inactive steps.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">stepNumberClassName</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Empty</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Class names for step numbers.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">stepLabelClassName</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Empty</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Class names for step labels.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">separatorClassName</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Empty</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Class names for step separators.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            {/* Best Practices Section */}
            <section>
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                <div className="space-y-4">
                    <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3">
                        <li>Ensure the progress tracker clearly indicates the current step.</li>
                        <li>Use distinguishable colors to indicate completed, current, and upcoming steps.</li>
                        <li>Provide meaningful labels for each step to help users understand the process.</li>
                        <li>Ensure the progress tracker is accessible and usable via keyboard navigation.</li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

ProgressTrackerPageClient.displayName = "ProgressTrackerPageClient";
export default ProgressTrackerPageClient;
