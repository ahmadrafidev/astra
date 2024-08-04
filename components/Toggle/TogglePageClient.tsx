'use client';

import React from 'react';

import { Check, X } from 'lucide-react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';
import Toggle from './Toggle';

const TogglePageClient: React.FC = () => {

    const handleToggleChange = (state: boolean) => {
        console.log("Toggle is now", state ? "On" : "Off");
    };

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Toggle</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A button that switches between two states when clicked.
                </p>
            </div>
            <section className="mb-5">
                <h2 className="text-lg md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Variants</h2>
                <div className="space-y-3 flex flex-col justify-around">
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Default Toggle
                        </h3>
                        <Toggle 
                            ariaLabel="Toggle switch"
                            className="max-w-md"
                            onIcon={<Check />}
                            offIcon={<X />}
                            onChange={handleToggleChange}
                            defaultOn={false}
                        />
                    </div>
                </div>
            </section>
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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">children</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">ReactNode</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The content inside the toggle button.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling the toggle button.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">ariaLabel</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Accessible label for the toggle button.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            {/* Best Practices Section */}
            <section>
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">Use toggle buttons to switch between two states.</p>
                    <p className="text-gray-700 dark:text-gray-300">Ensure the button clearly indicates its current state.</p>
                    <p className="text-gray-700 dark:text-gray-300">Provide feedback to users when the state changes.</p>
                </div>
            </section>
        </Layout>
    );
};

TogglePageClient.displayName = "TogglePageClient";
export default TogglePageClient;
