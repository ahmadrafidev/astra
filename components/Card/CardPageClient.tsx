'use client';

import React from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Card from './Card';

const CardPageClient: React.FC = () => {
    return (
        <Layout>
            <Badge text="Components" />
            {/* Header Content */}
            <section className="mb-5">
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-4xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-3 md:mb-4">Card</h1>
                    <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                        The Card component is a versatile container for displaying content in a structured and visually appealing way.
                    </p>
                </div>
            </section>
            {/* Card Examples Section */}
            <section className="mb-5">
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Examples</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card
                        title="Card Title 1"
                        description="This is a description of the card content."
                        imageSrc="/icons/apple.webp"
                        imageWidth={300}
                        imageHeight={200}
                    />
                    <Card
                        title="Card Title 2"
                        description="This is another description of the card content."
                    />
                    <Card
                        title="Card Title 3"
                        description="This card has additional content."
                    >
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Action</button>
                    </Card>
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
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">title</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The title of the card.</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">description</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The description content of the card.</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">imageSrc</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The URL of the image to display in the card.</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">imageWidth</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">number</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">300</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The width of the image in the card.</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">imageHeight</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">number</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">200</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The height of the image in the card.</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling.</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">children</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">React.ReactNode</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional content to display inside the card.</td>
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
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                        <li className="mb-2">Use descriptive titles and concise descriptions to provide clear information.</li>
                        <li className="mb-2">Ensure images are of high quality and relevant to the card content.</li>
                        <li className="mb-2">Group related information and actions within a card to maintain a cohesive structure.</li>
                        <li className="mb-2">Maintain consistent spacing and alignment for a clean and organized layout.</li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

CardPageClient.displayName = "CardPageClient";
export default CardPageClient;
