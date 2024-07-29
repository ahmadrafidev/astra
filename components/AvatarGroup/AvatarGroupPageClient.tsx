// components/AvatarGroup/AvatarGroupPageClient.tsx
'use client';

import React from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import AvatarGroup from './AvatarGroup';

const AvatarGroupPageClient: React.FC = () => {
    const avatars = [
        { src: '/icons/android.webp', alt: 'User Avatar 1', size: 40 },
        { src: '/icons/android.webp', alt: 'User Avatar 2', size: 40 },
        { src: '/icons/android.webp', alt: 'User Avatar 3', size: 40 },
        { src: '/icons/android.webp', alt: 'User Avatar 4', size: 40 },
    ];

    return (
        <Layout>
            <Badge text="Components" />
            <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Avatar Group</h1>
            <div className="space-y-6">
                <AvatarGroup avatars={avatars} max={3} size={40} />
            </div>
            {/* Props Section */}
            <section>
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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">avatars</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">AvatarProps[]</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Array of avatar properties.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">max</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">number</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">3</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Maximum number of avatars to display.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">size</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">number</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">40</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The size (width and height) of the avatar images.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling the avatar group.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            {/* Best Practices Section */}
            <section>
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">Use avatar groups to display multiple user avatars in a compact form.</p>
                    <p className="text-gray-700 dark:text-gray-300">Ensure the image source URLs are valid and accessible.</p>
                    <p className="text-gray-700 dark:text-gray-300">Provide meaningful alternative text for accessibility.</p>
                </div>
            </section>
        </Layout>
    );
};

AvatarGroupPageClient.displayName = "AvatarGroupPageClient";
export default AvatarGroupPageClient;
