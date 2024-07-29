// components/ProgressBar/ProgressBarPageClient.tsx
'use client';

import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import ProgressBar from './ProgressBar';

const ProgressBarPageClient: React.FC = () => {
    const [progress, setProgress] = useState(50);

    return (
        <Layout>
            <Badge text="Components" />
            <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">ProgressBar</h1>
            <ProgressBar progress={progress} className="my-4" />
            <div className="flex space-x-2 mt-4">
                <button
                    onClick={() => setProgress((prev) => Math.max(prev - 10, 0))}
                    className="px-4 py-2 bg-gray-300 rounded"
                >
                    Decrease
                </button>
                <button
                    onClick={() => setProgress((prev) => Math.min(prev + 10, 100))}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Increase
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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">progress</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">number</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The current progress value.</td>
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
                <h2 className="text-2xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">Ensure the progress bar is clearly visible and indicates progress accurately.</p>
                    <p className="text-gray-700 dark:text-gray-300">Use distinguishable colors to indicate progress.</p>
                    <p className="text-gray-700 dark:text-gray-300">Make sure the progress bar is accessible and usable via screen readers.</p>
                </div>
            </section>
        </Layout>
    );
};

ProgressBarPageClient.displayName = "ProgressBarPageClient";
export default ProgressBarPageClient;
