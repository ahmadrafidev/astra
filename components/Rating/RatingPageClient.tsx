// components/Rating/RatingPageClient.tsx
'use client';

import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Rating from './Rating';

const RatingPageClient: React.FC = () => {
    const [currentRating, setCurrentRating] = useState(0);

    const handleRate = (rating: number) => {
        setCurrentRating(rating);
        console.log("Current rating:", rating);
    };

    return (
        <Layout>
            <Badge text="Components" />
            <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Rating</h1>
            <Rating maxRating={5} onRate={handleRate} className="my-4" />
            <p className="mt-4 text-gray-900 dark:text-gray-50">Current rating: {currentRating}</p>

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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">maxRating</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">number</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The maximum rating value.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onRate</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">{'(rating: number) => void'}</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Callback function to handle rating changes.</td>
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
                    <p className="text-gray-700 dark:text-gray-300">Ensure the rating component is easy to use and accessible to all users.</p>
                    <p className="text-gray-700 dark:text-gray-300">Use clear and distinguishable icons for ratings.</p>
                    <p className="text-gray-700 dark:text-gray-300">Provide feedback to users after they rate.</p>
                    <p className="text-gray-700 dark:text-gray-300">Handle the rating value appropriately in the parent component.</p>
                </div>
            </section>
        </Layout>
    );
};

RatingPageClient.displayName = "RatingPageClient";
export default RatingPageClient;
