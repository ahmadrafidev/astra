// components/Avatar/AvatarPageClient.tsx
'use client';

import React from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Avatar from './Avatar';

const AvatarPageClient: React.FC = () => {
    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Avatar</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A visual representation of a user or entity typically displayed as a profile picture or icon.
                </p>
            </div>
            <div className="space-y-6">
                <Avatar className="bg-white" src="/icons/android-light.webp" alt="User Avatar 1" size={40}/>
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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">src</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The source URL of the avatar image.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">alt</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">&quot;Avatar&quot;</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Alternative text for the avatar image.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">size</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">number</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">40</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The size (width and height) of the avatar image.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling the avatar.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            {/* Best Practices Section */}
            <section>
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">Use avatars to visually represent users or objects.</p>
                    <p className="text-gray-700 dark:text-gray-300">Ensure the image source URL is valid and accessible.</p>
                    <p className="text-gray-700 dark:text-gray-300">Provide meaningful alternative text for accessibility.</p>
                </div>
            </section>
        </Layout>
    );
};

AvatarPageClient.displayName = "AvatarPageClient";
export default AvatarPageClient;
