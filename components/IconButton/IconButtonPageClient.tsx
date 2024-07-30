// components/IconButton/IconButtonPageClient.tsx
'use client';

import React from 'react';
import * as RadixIcons from '@radix-ui/react-icons';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import IconButton from './IconButton';

const icons = [
    { icon: 'TrashIcon', label: 'Delete', ariaLabel: 'Delete' },
    { icon: 'Pencil1Icon', label: 'Edit', ariaLabel: 'Edit' },
    { icon: 'PlusIcon', label: 'Add', ariaLabel: 'Add' },
];

const IconButtonPageClient: React.FC = () => {
    return (
        <Layout>
            <Badge text="Components" />
            {/* Header Content */}
            <section className="mb-5">
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-4xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-3 md:mb-4">IconButton</h1>
                    <p className="ext-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                        Icon buttons are used to represent actions with icons, providing a compact and visually appealing interface.
                    </p>
                </div>
            </section>
            {/* IconButton Section */}
            <section className="mb-5">
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Examples</h2>
                <div className="flex space-x-4">
                    {icons.map((icon, index) => (
                        <IconButton key={index} icon={icon.icon as keyof typeof RadixIcons} onClick={() => alert(`${icon.label} button clicked`)} ariaLabel={icon.ariaLabel} />
                    ))}
                </div>
            </section>
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
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">icon</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">RadixUI Icons</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The icon to display inside the button.</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onClick</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">function</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The function to call when the button is clicked.</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">ariaLabel</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The ARIA label for the button.</td>
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
                        <li>Use clear and intuitive icons that represent the action they perform.</li>
                        <li>Provide an `ariaLabel` to ensure accessibility for screen readers.</li>
                        <li>Ensure sufficient color contrast between the icon and its background for readability.</li>
                        <li>Use consistent icon sizes and spacing to maintain visual harmony in your UI.</li>
                        <li>Group related icons together to help users understand their functionality.</li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

IconButtonPageClient.displayName = "IconButtonPageClient";
export default IconButtonPageClient;
