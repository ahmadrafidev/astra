// app/components/badge/page.tsx
import React from 'react';
import type { Metadata } from "next";

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';

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
                    <h1 className="text-2xl md:text-3xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-3 md:mb-4">Badge</h1>
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
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">text</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The text to display inside the badge.</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">count</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">number</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The count to display inside the badge.</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">maxCount</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">number</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">99</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The maximum count to display inside the badge.</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">color</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">bg-gray-200</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The background color of the badge in light mode.</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">darkColor</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">bg-gray-700</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The background color of the badge in dark mode.</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">textColor</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">text-gray-900</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The text color of the badge in light mode.</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">darkTextColor</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">text-gray-100</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The text color of the badge in dark mode.</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">size</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">small | medium | large</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">medium</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The size of the badge.</td>
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
                </div>
            </section>
        </Layout>
    );
};

BadgePage.displayName = "BadgePage";
export default BadgePage;
