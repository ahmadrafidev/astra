/* eslint-disable react/no-unescaped-entities */

'use client';

import React from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import AvatarGroup from './AvatarGroup';

const AvatarGroupPageClient: React.FC = () => {
    const avatars = [
        { src: '/icons/android-light.webp', alt: 'User Avatar 1', size: 40 },
        { src: '/icons/android-light.webp', alt: 'User Avatar 2', size: 40 },
        { src: '/icons/android-light.webp', alt: 'User Avatar 2', size: 40 },
        { src: '/icons/android-light.webp', alt: 'User Avatar 2', size: 40 },
        { src: '/icons/android-light.webp', alt: 'User Avatar 2', size: 40 },
    ];

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Avatar Group</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A collection of multiple avatars displayed together to represent a group or team.
                </p>
            </div>
            <div className="space-y-6">
                <AvatarGroup 
                    avatars={avatars} 
                    max={3} 
                    size="md" 
                    shape="circle" 
                    overlap="md"
                />
            </div>
            {/* Props Section */}
            <section className="my-5">
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Props</h2>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow overflow-x-auto">
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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">AvatarProps[]</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Array of avatar properties. Each object should contain props for the Avatar component.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">max</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">number</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">3</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Maximum number of avatars to display before showing a count.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">size</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">'sm' | 'md' | 'lg' | number</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">'md'</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Size of the avatars. Can be a preset size or a custom number.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">shape</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">'circle' | 'square'</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">'circle'</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Shape of the avatars.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">overlap</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">'sm' | 'md' | 'lg'</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">'md'</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Amount of overlap between avatars.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
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
                    <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3">
                        <li>Use avatar groups to display multiple user avatars in a compact form.</li>
                        <li>Provide meaningful alternative text for each avatar in the avatars prop for accessibility.</li>
                        <li>Choose an appropriate max value based on the available space and the typical number of avatars.</li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

AvatarGroupPageClient.displayName = "AvatarGroupPageClient";
export default AvatarGroupPageClient;
