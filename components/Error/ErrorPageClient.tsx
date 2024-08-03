// components/Error/ErrorPageClient.tsx
'use client';

import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Error from './Error';

const ErrorPageClient: React.FC = () => {
    const [showError, setShowError] = useState(true);

    const handleRetry = () => {
        setShowError(false);
        setTimeout(() => setShowError(true), 1000);
    };

    const handleCancel = () => {
        setShowError(false);
    };

    return (
        <Layout>
            <Badge text="Components" />
            <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Error</h1>
            {showError && (
                <Error 
                    type="network"
                    title="Network error"
                    message="Please check your internet connection or try again"
                    primaryAction={{
                        label: "Retry",
                        onClick: () => handleRetry()
                    }}
                    secondaryAction={{
                        label: "Cancel",
                        onClick: () => handleCancel()
                    }}
                />
            )}
            {/* Props Section */}
            <section className="my-5">
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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">message</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The error message to display.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onRetry</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">{`() => void`}</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Function to call when the retry button is clicked.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
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
                    <p className="text-gray-700 dark:text-gray-300">Use clear and concise error messages.</p>
                    <p className="text-gray-700 dark:text-gray-300">Provide a retry button for recoverable errors.</p>
                    <p className="text-gray-700 dark:text-gray-300">Ensure the error message is accessible and noticeable.</p>
                    <p className="text-gray-700 dark:text-gray-300">Use appropriate colors to indicate error states.</p>
                </div>
            </section>
        </Layout>
    );
};

ErrorPageClient.displayName = "ErrorPageClient";
export default ErrorPageClient;
