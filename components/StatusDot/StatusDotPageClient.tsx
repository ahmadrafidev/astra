// components/StatusDot/StatusDotPageClient.tsx
'use client';

import React from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import StatusDot from './StatusDot';

const StatusDotPageClient: React.FC = () => {
    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Status Dot</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A small colored circle indicating the current state of an item.
                </p>
            </div>
            <div className="space-y-6">
                <div className="flex items-center space-x-2">
                    <StatusDot status="online" />
                    <span>Online</span>
                </div>
                <div className="flex items-center space-x-2">
                    <StatusDot status="offline" />
                    <span>Offline</span>
                </div>
                <div className="flex items-center space-x-2">
                    <StatusDot status="busy" />
                    <span>Busy</span>
                </div>
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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">status</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">{'"online" | "offline" | "busy"'}</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The status of the dot, which determines its color.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling the status dot.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            {/* Best Practices Section */}
            <section>
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">Use status dots to indicate the current status of an item or user.</p>
                    <p className="text-gray-700 dark:text-gray-300">Ensure each status is visually distinguishable and has a clear meaning.</p>
                    <p className="text-gray-700 dark:text-gray-300">Provide accessible labels for each status dot to improve accessibility.</p>
                </div>
            </section>
        </Layout>
    );
};

StatusDotPageClient.displayName = "StatusDotPageClient";
export default StatusDotPageClient;
