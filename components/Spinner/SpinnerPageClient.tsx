// components/Spinner/SpinnerPageClient.tsx
'use client';

import React from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Spinner from './Spinner';

const SpinnerPageClient: React.FC = () => {
    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Spinner</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    An animated indicator showing that content is loading or processing.
                </p>
            </div>
            <div className="space-y-6">
                <Spinner size={24} className="text-blue-500" />
                <Spinner size={32} className="text-red-500" />
                <Spinner size={40} className="text-green-500" />
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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">size</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">number</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">24</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The size of the spinner in pixels.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling the spinner.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            {/* Best Practices Section */}
            <section>
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">Use spinners to indicate loading or ongoing processes.</p>
                    <p className="text-gray-700 dark:text-gray-300">Ensure the spinner is clearly visible and distinguishable.</p>
                    <p className="text-gray-700 dark:text-gray-300">Provide an accessible label to describe the loading state.</p>
                </div>
            </section>
        </Layout>
    );
};

SpinnerPageClient.displayName = "SpinnerPageClient";
export default SpinnerPageClient;
