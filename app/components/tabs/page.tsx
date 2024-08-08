'use client';

import React from 'react';

import Layout from '@/components/Layout/Layout';
import Badge from '@/components/Badge/Badge';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

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
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">label</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">none</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The label of the tab.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">icon</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">none</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The icon to display in the tab.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">children</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">React.ReactNode</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">none</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The content of the tab.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">none</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Additional classes for styling.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            {/* Best Practices Section */}
            <section>
                <div className="flex flex-col mb-4">
                    <h2 className="text-xl md:text-2xl font-medium mb-5 text-gray-900 dark:text-gray-50">Best Practices</h2>
                    <ul className="list-decimal list-inside pl-5 text-gray-700 dark:text-gray-300">
                        <li className="mb-2">Use descriptive labels for tabs to clearly convey their content.</li>
                        <li className="mb-2">Consider using icons alongside labels for better visual representation.</li>
                        <li className="mb-2">Make sure the tab content is organized and easy to navigate.</li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

TabsPage.displayName = "TabsPage"
export default TabsPage;
