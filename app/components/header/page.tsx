'use client';

import React from 'react';

import Layout from '@/components/Layout/Layout';
import Badge from '@/components/Badge/Badge';
import Header from '@/components/Header/Header';

const HeaderPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Components" />
            <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Header</h1>
            <p className="mb-4 text-gray-900 dark:text-gray-50 text-justify font-normal">
                The Header component provides a consistent and customizable navigation bar for your application. It includes a site logo, navigation links, and optional theme toggle. 
            </p>
            {/* Header Example Section */}
            <section className="mb-5">
                <h2 className="text-xl md:text-2xl font-medium mb-5 text-gray-900 dark:text-gray-50">Example</h2>
                <Header 
                    setActiveSection={(section: string) => console.log(`Active section set to: ${section}`)}
                />
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
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
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
                    <ul className="list-decimal list-inside pl-5 text-gray-700 dark:text-gray-300">
                        <li className="mb-2">Ensure the navigation links are accessible and clearly labeled.</li>
                        <li className="mb-2">Use aria-labels to improve accessibility for screen reader users.</li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

HeaderPage.displayName = "HeaderPage"
export default HeaderPage;
