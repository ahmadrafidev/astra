'use client';

import React from 'react';
import { Check, X, AlertTriangle } from 'lucide-react';

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
                    A small colored circle or icon that visually represents the current status of an item.
                </p>
            </div>
            <section className="mb-5">
                <h2 className="text-lg md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Variants</h2>
                <div className="space-y-3 flex flex-col justify-around">
                    <div className="flex flex-col space-y-3">
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50">
                            Status Dot
                        </h3>
                        <StatusDot status="online" type="dot" className="h-2 w-2" label="Online" />
                        <StatusDot status="offline" type="dot" className="h-2 w-2" label="Offline" />
                        <StatusDot status="busy" type="dot" className="h-2 w-2" label="Busy" />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50">
                            Status Icon
                        </h3>
                        <StatusDot status="online" type="icon" icon={<Check className="text-green-500" />} label="Online" />
                        <StatusDot status="offline" type="icon" icon={<X className="text-gray-500" />} label="Offline" />
                        <StatusDot status="busy" type="icon" icon={<AlertTriangle className="text-red-500" />} label="Busy" />
                    </div>
                </div>
            </section>
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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The status of the dot, determining its color.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">type</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">{'"dot" | "icon"'}</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">dot</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Determines if the status indicator is a dot or an icon.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">icon</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">React.ReactNode</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Icon to be used when type is set to `icon`.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">label</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Text label for the status dot, used for accessibility.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">showLabel</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">boolean</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">true</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Determines if the label should be displayed next to the status dot.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
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
                    <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3">
                        <li>Use status dots to indicate the current status of an item or user.</li>
                        <li>Ensure each status is visually distinguishable and has a clear meaning.</li>
                        <li>Provide accessible labels for each status dot to improve accessibility.</li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

StatusDotPageClient.displayName = "StatusDotPageClient";
export default StatusDotPageClient;
