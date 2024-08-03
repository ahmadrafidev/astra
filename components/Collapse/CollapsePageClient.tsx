// components/Collapse/CollapsePageClient.tsx
'use client';

import React from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Collapse from './Collapse';

const CollapsePageClient: React.FC = () => {
    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Collapse</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">An expandable section that can be toggled to show or hide additional content.</p>
            </div>
            <Collapse title="Collapse Section 1">
                <p className="text-gray-700 dark:text-gray-300">
                    This is the content for the first collapse section. It can include any other components or HTML elements.
                </p>
            </Collapse>
            <Collapse title="Collapse Section 2">
                <p className="text-gray-700 dark:text-gray-300">
                    This is the content for the second collapse section. It can include any other components or HTML elements.
                </p>
            </Collapse>
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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">title</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The title of the collapse section.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">children</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">ReactNode</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Content to be displayed inside the collapse section.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling the collapse component.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            {/* Best Practices Section */}
            <section>
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">Use collapse components to hide or show content sections dynamically.</p>
                    <p className="text-gray-700 dark:text-gray-300">Ensure the collapse button is accessible and keyboard-navigable.</p>
                    <p className="text-gray-700 dark:text-gray-300">Provide clear titles for each collapse section to improve usability.</p>
                    <p className="text-gray-700 dark:text-gray-300">Avoid overloading collapse sections with too much content to maintain readability.</p>
                </div>
            </section>
        </Layout>
    );
};

CollapsePageClient.displayName = "CollapsePageClient";
export default CollapsePageClient;
