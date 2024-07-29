// components/Checkbox/CheckboxPageClient.tsx
'use client';

import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Checkbox from './Checkbox';

const CheckboxPageClient: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    };

    return (
        <Layout>
            <Badge text="Components" />
            <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Checkbox</h1>
            <Checkbox 
                checked={isChecked} 
                onChange={handleChange} 
                label="Check me!" 
                className="my-4"
            />
            <p className="mt-4 text-gray-900 dark:text-gray-50">Checkbox is {isChecked ? 'checked' : 'unchecked'}</p>
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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">false</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Indicates whether the checkbox is checked.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onChange</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">React.ChangeEventHandler&lt;HTMLInputElement&gt;</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Function to call when the checkbox state changes.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">label</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Label text to display next to the checkbox.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
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
                    <p className="text-gray-700 dark:text-gray-300">Ensure the checkbox label is clear and concise.</p>
                    <p className="text-gray-700 dark:text-gray-300">Provide adequate space between checkboxes for easier touch interaction.</p>
                    <p className="text-gray-700 dark:text-gray-300">Use checkboxes for binary options where users can select multiple choices.</p>
                    <p className="text-gray-700 dark:text-gray-300">Make sure checkboxes are easily accessible and usable via keyboard and screen readers.</p>
                </div>
            </section>
        </Layout>
    );
};

CheckboxPageClient.displayName = "CheckboxPageClient";
export default CheckboxPageClient;
