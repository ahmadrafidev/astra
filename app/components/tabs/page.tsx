// pages/documentation/components/tabs.tsx
'use client';

import React from 'react';

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';
import { Tabs, Tab } from '../../../components/Tabs/Tabs';

const TabsPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Components" />
            <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Tabs</h1>
            <p className="mb-4 text-gray-900 dark:text-gray-50 text-justify font-normal">
                A set of selectable items for navigating between related content sections.
            </p>   
            {/* Tabs Example Section */}
            <section className="mb-5">
                <h2 className="text-xl md:text-2xl font-medium mb-5 text-gray-900 dark:text-gray-50">Example</h2>
                <Tabs className="w-full">
                    <Tab label="Tab 1">
                        <div>Content for Tab 1</div>
                    </Tab>
                    <Tab label="Tab 2">
                        <div>Content for Tab 2</div>
                    </Tab>
                    <Tab label="Tab 3">
                        <div>Content for Tab 3</div>
                    </Tab>
                </Tabs>
            </section>
            {/* Props Table Section */}
            <section>
                <div className="flex flex-col mb-4">
                    <h2 className="text-xl md:text-2xl font-medium mb-5 text-gray-900 dark:text-gray-50">Props</h2>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5">
                        <table className="min-w-full">
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
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">label</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The label of the tab.</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">icon</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The icon to display in the tab.</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">children</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">React.ReactNode</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The content of the tab.</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            {/* Best Practices Section */}
            <section>
                <div className="flex flex-col mb-4">
                    <h2 className="text-xl md:text-2xl font-medium mb-5 text-gray-900 dark:text-gray-50">Best Practices</h2>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                        <li className="mb-2">Use descriptive labels for tabs to clearly convey their content.</li>
                        <li className="mb-2">Consider using icons alongside labels for better visual representation.</li>
                        <li className="mb-2">Ensure the tabs are accessible by using appropriate ARIA attributes.</li>
                        <li className="mb-2">Make sure the tab content is organized and easy to navigate.</li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

TabsPage.displayName = "TabsPage"
export default TabsPage;
