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
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-6">Props</h2>
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
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">avatars</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">AvatarProps[]</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Array of avatar properties. Each object should contain props for the Avatar component.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">max</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">number</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">3</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Maximum number of avatars to display before showing a count.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">size</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">'sm' | 'md' | 'lg' | number</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">'md'</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Size of the avatars. Can be a preset size or a custom number.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">shape</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">'circle' | 'square'</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">'circle'</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Shape of the avatars.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">overlap</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">'sm' | 'md' | 'lg'</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">'md'</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Amount of overlap between avatars.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">empty</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Additional classes for styling the avatar group.</td>
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
