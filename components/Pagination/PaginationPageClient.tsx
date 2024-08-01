// components/Pagination/PaginationPageClient.tsx
'use client';

import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Pagination from './Pagination';

const PaginationPageClient: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = 100; 
    const itemsPerPage = 10; 

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Pagination</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A control for navigating through multiple pages of content.
                </p>
            </div>
            <div className="space-y-6">
                <Pagination
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
            {/* Props Table Section */}
            <section>
                <div className="flex flex-col mb-4">
                    <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Props</h2>
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
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">totalItems</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">number</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Total number of items to paginate.</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">itemsPerPage</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">number</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">10</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Number of items to display per page.</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">currentPage</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">number</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">1</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The currently active page.</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onPageChange</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">function</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Function to call when the page changes.</td>
                                </tr>
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
                    <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-900 dark:text-gray-50">
                        <li>Use pagination for large data sets to improve loading times and user experience.</li>
                        <li>Clearly indicate the current page and total number of pages.</li>
                        <li>Provide controls to navigate to the next, previous, first, and last pages.</li>
                        <li>Ensure pagination controls are easily tappable on mobile devices.</li>
                        <li>Keep the number of pagination links to a manageable number to avoid overwhelming users.</li>
                        <li>Provide feedback when a page is loading to inform users of the progress.</li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

PaginationPageClient.displayName = "PaginationPageClient";
export default PaginationPageClient;
