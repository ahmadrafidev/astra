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
                <h1 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Status Dot</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A small colored circle or icon that visually represents the current status of an item.
                </p>
            </div>
            <section className="my-5">
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
            <section className="my-5">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-6">Props</h2>
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
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">status</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">{'"online" | "offline" | "busy"'}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">none</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The status of the dot, determining its color.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">type</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">{'"dot" | "icon"'}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">dot</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Determines if the status indicator is a dot or an icon.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">icon</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">React.ReactNode</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Icon to be used when type is set to `icon`.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">label</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">empty</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Text label for the status dot, used for accessibility.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">showLabel</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">boolean</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">true</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Determines if the label should be displayed next to the status dot.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">empty</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Additional classes for styling the status dot.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            {/* Best Practices Section */}
            <section className="my-5">
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
