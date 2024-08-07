// components/Dropdown/DropdownPageClient.tsx
'use client';

import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';
import Dropdown from './Dropdown';

const DropdownPageClient: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleSelect = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Dropdown</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A menu that expands to reveal a list of selectable options when activated.
                </p>
            </div>
            <Dropdown 
                options={['Option 1', 'Option 2', 'Option 3']} 
                onSelect={handleSelect} 
                className="my-4"
            />
            <p className="mt-4 text-gray-900 dark:text-gray-50">Selected option: {selectedOption || 'None'}</p>

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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">options</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string[]</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Array of options to display in the dropdown.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onSelect</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">{`(option: string) => void`}</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Function to call when an option is selected.</td>
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
                    <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3">
                        <li>Ensure the dropdown is accessible via keyboard navigation.</li>
                        <li>Use clear and concise labels for each option.</li>
                        <li>Provide visual feedback when the dropdown is open.</li>
                        <li>Make sure the dropdown is easily tappable on mobile devices.</li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

DropdownPageClient.displayName = "DropdownPageClient";
export default DropdownPageClient;
