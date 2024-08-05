'use client';

import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import RadioButton from './RadioButton';

const RadioButtonPageClient: React.FC = () => {
    const [selectedValue, setSelectedValue] = useState('option1');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(e.target.value);
        console.log("Selected value:", e.target.value);
    };

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5"> 
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">RadioButton</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A control allowing users to select a single option from a group.
                </p>
            </div>
            <div className="space-y-4">
                <RadioButton
                    name="example"
                    value="option1"
                    checked={selectedValue === 'option1'}
                    onChange={handleChange}
                    label="Option 1"
                    className="my-4"
                />
                <RadioButton
                    name="example"
                    value="option2"
                    checked={selectedValue === 'option2'}
                    onChange={handleChange}
                    label="Option 2"
                    className="my-4"
                />
            </div>
            <p className="mt-4 text-gray-900 dark:text-gray-50">Selected value: {selectedValue}</p>
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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">boolean</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Whether the radio button is checked.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onChange</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">{'(e: React.ChangeEvent<HTMLInputElement>) => void'}</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Callback function to handle change events.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">label</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Label text for the radio button.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">name</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Name attribute for the radio button group.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">value</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Value attribute for the radio button.</td>
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
                        <li>Use radio buttons when the user needs to select one option from a group.</li>
                        <li>Ensure that radio buttons are clearly labeled and grouped logically.</li>
                        <li>Provide a default selection whenever possible.</li>
                        <li>Make sure radio buttons are accessible and usable via keyboard navigation.</li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

RadioButtonPageClient.displayName = "RadioButtonPageClient";
export default RadioButtonPageClient;
