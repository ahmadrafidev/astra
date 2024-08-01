// components/Switch/SwitchPageClient.tsx
'use client';

import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Switch from './Switch';

const SwitchPageClient: React.FC = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    };

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Switch</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A toggle control for switching between two states.
                </p>
            </div>
            <div className="space-y-6">
                <Switch 
                    checked={checked} 
                    onChange={handleChange} 
                    ariaLabel="Toggle switch"
                    className="max-w-md"
                />
            </div>
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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">checked</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">boolean</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Whether the switch is checked.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onChange</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">{'(e: React.ChangeEvent<HTMLInputElement>) => void'}</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Function to call when the switch value changes.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling the switch.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">ariaLabel</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Accessible label for the switch.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            {/* Best Practices Section */}
            <section>
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">Use switches to toggle between two states.</p>
                    <p className="text-gray-700 dark:text-gray-300">Ensure the switch clearly indicates its current state.</p>
                    <p className="text-gray-700 dark:text-gray-300">Provide feedback to users when the state changes.</p>
                </div>
            </section>
        </Layout>
    );
};

SwitchPageClient.displayName = "SwitchPageClient";
export default SwitchPageClient;
