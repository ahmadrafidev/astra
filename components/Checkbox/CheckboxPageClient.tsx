'use client';

import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Checkbox from './Checkbox';

const CheckboxPageClient: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isAgree, setIsAgree] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);

    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsAgree(e.target.checked);
        setError(e.target.checked ? undefined : "You must accept the terms and conditions.");
    };

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Checkbox</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A control allowing users to indicate agreement or consent for a single option.
                </p>
            </div>
            <section className="mb-5">
                <h2 className="text-lg md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Variants</h2>
                <div className="space-y-4 flex flex-col justify-around">
                    <div className="mb-2">
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">Basic Usage</h3>
                        <Checkbox 
                            checked={isChecked} 
                            onChange={handleCheck} 
                            label="Try check me!" 
                            className="mb-2"
                        />
                        <p className="text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                            Checkbox is {isChecked ? 'checked' : 'unchecked'}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">Checkbox with message</h3>
                        <Checkbox 
                            label="Accept this terms and conditions." 
                            checked={isAgree} 
                            onChange={handleChange} 
                            error={error} 
                            labelClassName="text-black"
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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">checked</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">boolean</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">false</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Indicates whether the checkbox is checked.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onChange</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">Event handler</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">void</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Function to call when the checkbox state changes.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">label</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Label text to display next to the checkbox.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling the checkbox container.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">labelClassName</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling the label text.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">error</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Error message to display. When provided, applies error styling.</td>
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
                        <li>Use clear and concise labels that accurately describe the option.</li>
                        <li>Provide sufficient spacing for touch interactions and visual clarity.</li>
                        <li>Ensure accessibility via keyboard navigation and screen readers.</li>
                        <li>Provide clear visual feedback for checkbox states (hover, focus, active).</li>
                        <li>Use the error prop to display clear and actionable validation messages when necessary.</li>
                        <li>Maintain consistent styling and behavior throughout the application.</li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

CheckboxPageClient.displayName = "CheckboxPageClient";
export default CheckboxPageClient;
