import React from 'react';
import type { Metadata } from "next";

import Layout from '@/components/Layout/Layout';
import Badge from '@/components/Badge/Badge';

export const metadata: Metadata = {
    title: "Badge",
    description: "Badges are concise labels that quickly convey brief information, status indicators, or important warnings for immediate recognition.",
};

const badgesTypes = [
    { label: 'Neutral', color: 'bg-gray-200', darkColor: 'bg-gray-700', textColor: 'text-black' },
    { label: 'Error', color: 'bg-red-700', darkColor: 'bg-red-400', textColor: 'text-white' },
    { label: 'Warning', color: 'bg-yellow-400', darkColor: 'bg-yellow-700', textColor: 'text-white' },
    { label: 'Success', color: 'bg-green-700', darkColor: 'bg-green-700', textColor: 'text-white' },
    { label: 'Brand', color: 'bg-blue-700', darkColor: 'bg-blue-400', textColor: 'text-white' },
];

const sizes: ('small' | 'medium' | 'large')[] = ['small', 'medium', 'large'];

const BadgePage: React.FC = () => {

    return (
        <Layout>
            <Badge text="Components" />
            {/* Header Content */}
            <section className="mb-5">
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-semibold font-sans text-gray-900 dark:text-gray-50 mb-3 md:mb-4">Badge</h1>
                    <p className="ext-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                        A small concise visual indicator displaying a status notification count or short label.
                    </p>
                </div>
            </section>
            {/* Badge Table Section */}
            <section className="mb-5">
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Variants</h2>
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-5">
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="px-6 py-2 text-gray-700 dark:text-gray-200"></th>
                                        {sizes.map((size, index) => (
                                            <th key={index} className="px-6 py-2 text-gray-700 dark:text-gray-200 capitalize">{size}</th>
                                        ))}
                                </tr>
                            </thead>
                            <tbody>
                                {badgesTypes.map((badge, index) => (
                                    <tr key={index}>
                                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-medium">{badge.label}</td>
                                            {sizes.map((size, sizeIndex) => (
                                                <td key={sizeIndex} className="border px-6 py-4">
                                                    <Badge
                                                        text="Badge"
                                                        color={badge.color}
                                                        darkColor={badge.darkColor}
                                                        textColor={badge.textColor}
                                                        size={size}
                                                    />
                                                </td>
                                            ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            {/* Props Table Section */}
            <section className="my-5">
                <h2 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-50 mb-6">Props</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Type</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Default</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Description</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">text</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">none</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The text to display inside the badge.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">count</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">number</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">none</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The count to display inside the badge.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">maxCount</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">number</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">99</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The maximum count to display inside the badge.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">color</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">bg-gray-200</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The background color of the badge in light mode.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">darkColor</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">bg-gray-700</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The background color of the badge in dark mode.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">textColor</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">text-gray-900</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The text color of the badge in light mode.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">darkTextColor</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">text-gray-100</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The text color of the badge in dark mode.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">size</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">small | medium | large</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">medium</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The size of the badge.</td>
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
                        <li>Highlight notification counts on icons for instant updates.</li>
                        <li>Show item status like active, inactive, new with badges.</li>
                        <li>Tag or categorize items in lists or card views using badges.</li>
                        <li>Display counts compactly, like items in a cart or post likes.</li>
                        <li>Label elements with extra context, e.g., `beta` or `coming soon`.</li>
                        <li>Use color coding to signify meanings (red for errors, green for success).</li>
                        <li>Choose badge sizes based on importance and context.</li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

BadgePage.displayName = "BadgePage";
export default BadgePage;
