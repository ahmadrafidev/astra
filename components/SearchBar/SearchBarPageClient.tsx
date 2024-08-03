// components/SearchBar/SearchBarPageClient.tsx
'use client';

import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import SearchBar from './SearchBar';

const SearchBarPageClient: React.FC = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (query: string) => {
        setQuery(query);
        console.log("Search query:", query);
    };

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">SearchBar</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    An input field for entering search queries to find specific content.
                </p>
            </div>
            <SearchBar onSearch={handleSearch} />
            <p className="mt-4 text-gray-900 dark:text-gray-50">Current query: {query}</p>
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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onSearch</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">{'(query: string) => void'}</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Callback function to handle search queries.</td>
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
                    <p className="text-gray-700 dark:text-gray-300">Ensure the search bar is easily accessible and prominently displayed on the page.</p>
                    <p className="text-gray-700 dark:text-gray-300">Provide meaningful placeholder text to guide users on what they can search for.</p>
                    <p className="text-gray-700 dark:text-gray-300">Use ARIA attributes to make the search bar accessible to screen readers.</p>
                    <p className="text-gray-700 dark:text-gray-300">Debounce the search input to prevent excessive queries being sent on every keystroke.</p>
                </div>
            </section>
        </Layout>
    );
};

SearchBarPageClient.displayName = "SearchBarPageClient";
export default SearchBarPageClient;
