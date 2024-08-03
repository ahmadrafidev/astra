// app/components/alert/page.tsx
import React from 'react';
import type { Metadata } from "next";

import Layout from '@/components/Layout/Layout';
import Badge from '@/components/Badge/Badge';
import { Alert, AlertTitle, AlertContent} from '@/components/Alert/Alert';

export const metadata: Metadata = {
    title: "Alert",
    description: "A prominent message that informs users about important events or status changes.",
};

const AlertPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Components" />

            {/* Header Content */}
            <section className="mb-5">
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-3 md:mb-4">Alert</h1>
                    <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                        A prominent message that informs users about important events or status changes.
                    </p>
                </div>
            </section>

            {/* Alert Variants Section */}
            <section className="mb-5">
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Variants</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-base md:text-lg font-normal font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">Info Alert</h3>
                        <Alert type="info" title="This is an information alert" isDismissible>
                        </Alert>
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-normal font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">Success Alert</h3>
                        <Alert type="success" isDismissible>
                            <AlertTitle>This is a success alert</AlertTitle>
                            <AlertContent>A little bit of a content here</AlertContent>
                        </Alert>
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-normal font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">Warning Alert</h3>
                        <Alert type="warning" isDismissible>
                            <AlertTitle>This is a warning alert</AlertTitle>
                        </Alert>
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-normal font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">Error Alert</h3>
                        <Alert type="error" isDismissible>
                            <AlertTitle>This is an error alert</AlertTitle>
                        </Alert>
                    </div>
                </div>
            </section>

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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">type</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">&quot;info&quot; | &quot;success&quot; | &quot;warning&quot; | &quot;error&quot;</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The type of alert to display.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">message</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The main message to display in the alert.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">children</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">ReactNode</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional content to display in the alert.</td>
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
                    <p className="text-gray-700 dark:text-gray-300">Use alerts to convey important information to users in a prominent manner.</p>
                    <p className="text-gray-700 dark:text-gray-300">Choose the appropriate alert type to match the importance and context of the message.</p>
                    <p className="text-gray-700 dark:text-gray-300">Keep alert messages concise and to the point.</p>
                </div>
            </section>
        </Layout>
    );
};

AlertPage.displayName = "AlertPage";
export default AlertPage;
