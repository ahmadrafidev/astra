'use client';

import React from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import { List } from './List';

const ListPageClient: React.FC = () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];

    return (
        <Layout>
            <Badge text="Components" />
            <h1 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">List</h1>
            <List items={items} />
            <section className="mb-10">
                <h2 className="text-2xl md:text-3xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Props</h2>
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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">React.ReactNode[]</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Array of items to be displayed in the list.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling the list.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section>
                <h2 className="text-2xl md:text-3xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">Use lists to group related items and improve readability.</p>
                    <p className="text-gray-700 dark:text-gray-300">Ensure list items are clearly distinguishable and visually separated.</p>
                    <p className="text-gray-700 dark:text-gray-300">Use appropriate ARIA roles to enhance accessibility.</p>
                    <p className="text-gray-700 dark:text-gray-300">Avoid overloading lists with too many items; break them into smaller groups if necessary.</p>
                </div>
            </section>
        </Layout>
    );
};

ListPageClient.displayName = "ListPageClient";
export default ListPageClient;
