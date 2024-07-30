// components/Breadcrumbs/BreadcrumbsPageClient.tsx
'use client';

import React from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Breadcrumbs from './Breadcrumbs';

const BreadcrumbsPageClient: React.FC = () => {
    const items = [
        { name: 'Home', path: '/' },
        { name: 'Documentation', path: '/documentation' },
        { name: 'Components', path: '/documentation/components' },
        { name: 'Breadcrumbs', path: '/documentation/components/breadcrumbs' },
    ];

    return (
        <Layout>
            <Badge text="Components" />
            <h1 className="text-2xl md:text-4xl font-medium mb-4 text-gray-900 dark:text-gray-50">Breadcrumbs</h1>
            <Breadcrumbs items={items} className="mb-6" />
            {/* Props Section */}
            <section className="my-4">
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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">{'Array<{ name: string; path: string }>'}</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The breadcrumb items to display.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
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
                    <p className="text-gray-700 dark:text-gray-300">Use breadcrumbs to provide users with a navigational aid that indicates their current location in the application.</p>
                    <p className="text-gray-700 dark:text-gray-300">Ensure that breadcrumb items are ordered correctly from highest to lowest hierarchy.</p>
                    <p className="text-gray-700 dark:text-gray-300">Provide meaningful names for each breadcrumb item.</p>
                </div>
            </section>
        </Layout>
    );
};

BreadcrumbsPageClient.displayName = "BreadcrumbsPageClient";
export default BreadcrumbsPageClient;
