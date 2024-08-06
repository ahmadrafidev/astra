'use client';

import React from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Breadcrumbs from './Breadcrumbs';

const BreadcrumbsPageClient: React.FC = () => {
    const pageItems = [
        { name: 'Home', path: '/' },
        { name: 'Documentation', path: '/documentation' },
        { name: 'Components', path: '/documentation/components' },
        { name: 'Breadcrumbs', path: '/documentation/components/breadcrumbs' },
    ];

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Breadcrumbs</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A navigation aid showing the user location within a website hierarchy.
                </p>
            </div>      
            <Breadcrumbs
                items={pageItems}
                className="my-4"
                />
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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">items</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">{'Array<{ name: string; path: string }>'}</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The breadcrumb items to display.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling the breadcrumbs.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            {/* Best Practices Section */}
            <section className="my-4">
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                <div className="space-y-4">
                    <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3">
                        <li>Use breadcrumbs to provide users with a navigational aid that indicates their current location in the application.</li>
                        <li>Ensure that breadcrumb items are ordered correctly from highest to lowest hierarchy.</li>
                        <li>Provide meaningful names for each breadcrumb item.</li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

BreadcrumbsPageClient.displayName = "BreadcrumbsPageClient";
export default BreadcrumbsPageClient;
