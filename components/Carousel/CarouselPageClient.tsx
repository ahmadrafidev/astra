'use client';

import React from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Carousel from './Carousel';

const images = [
    '/icons/apple-light.webp',
    '/icons/android-light.webp',
    '/icons/twitter.webp',
];

const CarouselPageClient: React.FC = () => {
    return (
        <Layout>
            <Badge text="Components" />
            {/* Header Content */}
            <section className="mb-5">
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-3 md:mb-4">Carousel</h1>
                    <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                        A slideshow-like component for cycling through a series of content items.
                    </p>
                </div>
            </section>
            {/* Carousel Section */}
            <section className="mb-5">
                <Carousel
                    className="max-w-md md:max-w-lg mx-auto"
                    images={images}
                    width={400}
                    height={200}
                    autoPlay={true}
                    autoPlayInterval={5000}
                    showDots={true}
                    showArrows={true}
                />
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
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">images</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string[]</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Array of image URLs to display in the carousel.</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
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
                    <ul className="list-decimal list-inside pl-5 text-gray-700 dark:text-gray-300">
                        <li className="mb-2">Use high-quality images to ensure clarity and visual appeal.</li>
                        <li className="mb-2">Limit the number of images to avoid overwhelming the user.</li>
                        <li className="mb-2">Provide clear navigation controls for users to move between slides.</li>
                        <li className="mb-2">Ensure that the carousel is responsive and works well on different screen sizes.</li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

CarouselPageClient.displayName = "CarouselPageClient";
export default CarouselPageClient;
