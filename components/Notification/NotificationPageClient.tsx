'use client';

import React from 'react';
import { Bell, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Notification from './Notification';

const NotificationPageClient: React.FC = () => {
    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Notification</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A component for displaying brief messages or alerts to users.
                </p>
            </div>
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-2">Variants</h2>
                <div className="flex flex-col max-w-md">
                    <Notification
                        message="Default notification."
                        onClose={() => console.log('Default notification closed')}
                        className="my-4 bg-gray-100 text-gray-900 border border-gray-200"
                        icon={<Bell className="w-6 h-6 text-gray-900" />}
                    />
                    <Notification
                        message="Custom notification with a success message."
                        onClose={() => console.log('Success notification closed')}
                        className="my-4 bg-green-100 text-green-900 border border-green-200"
                        icon={<CheckCircle className="w-6 h-6 text-green-900" />}
                    />
                    <Notification
                        message="Custom error notification."
                        onClose={() => console.log('Error notification closed')}
                        className="my-4 bg-red-100 text-red-900 border border-red-200"
                        icon={<AlertCircle className="w-6 h-6 text-red-900" />}
                    />
                    <Notification
                        message="Info notification with a custom icon."
                        onClose={() => console.log('Info notification closed')}
                        className="my-4 bg-blue-100 text-blue-900 border border-blue-200"
                        icon={<Info className="w-6 h-6 text-blue-900" />}
                    />
                    <Notification
                        message="Custom warning notification."
                        onClose={() => console.log('Warning notification closed')}
                        className="my-4 bg-yellow-100 text-yellow-900 border border-yellow-200"
                        icon={<AlertTriangle className="w-6 h-6 text-yellow-900" />}
                    />
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
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">message</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Empty</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The message to display in the notification.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">onClose</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">{`() => void`}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Function to call when the notification is closed.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Empty</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Additional classes for styling.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">icon</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">React.ReactNode</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">None</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Custom icon to display in the notification.</td>
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
                        <li>Use notifications to inform users about important events or actions.</li>
                        <li>Ensure notifications are easily dismissible.</li>
                        <li>Use different colors to distinguish between different types of notifications.</li>
                        <li>Make sure notifications provide meaningful messages.</li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

NotificationPageClient.displayName = "NotificationPageClient";
export default NotificationPageClient;
