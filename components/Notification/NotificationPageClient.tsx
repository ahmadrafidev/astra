// components/Notification/NotificationPageClient.tsx
'use client';

import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Notification from './Notification';

const NotificationPageClient: React.FC = () => {
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false);
    };

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Notification</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A component for displaying brief messages or alerts to users.
                </p>
            </div>
            {visible && (
                <Notification
                    message="This is a notification message."
                    type="info"
                    onClose={handleClose}
                    className="my-4"
                />
            )}
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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">message</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The message to display in the notification.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">type</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">&quot;success&quot; | &quot;error&quot; | &quot;info&quot; | &quot;warning&quot;</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The type of notification to display.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onClose</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">{`() => void`}</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Function to call when the notification is closed.</td>
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
                    <p className="text-gray-700 dark:text-gray-300">Use notifications to inform users about important events or actions.</p>
                    <p className="text-gray-700 dark:text-gray-300">Ensure notifications are easily dismissible.</p>
                    <p className="text-gray-700 dark:text-gray-300">Use different colors to distinguish between different types of notifications (e.g., success, error, info, warning).</p>
                    <p className="text-gray-700 dark:text-gray-300">Make sure notifications are accessible and provide meaningful messages.</p>
                </div>
            </section>
        </Layout>
    );
};

NotificationPageClient.displayName = "NotificationPageClient";
export default NotificationPageClient;
