'use client';

import React from 'react';
import { UserIcon } from '@heroicons/react/24/outline';

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
            <Avatar 
                src="/icons/twitter.webp" 
                alt="User Avatar" 
                size="md" 
                shape="square" 
                fallback={<UserIcon />} 
                onClick={() => console.log('Avatar clicked')} 
            />
            {/* Props Section */}
            <section className="my-5">
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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The source URL of the avatar image.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">alt</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">{`'Avatar'`}</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Alternative text for the avatar image.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">size</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">{`'sm' | 'md' | 'lg' | number`}</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">{`'md'`}</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The size of the avatar. Can be a predefined size or a custom number.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">shape</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">{`'circle' | 'square'`}</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">{`'circle'`}</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The shape of the avatar.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">fallback</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">React.ReactNode</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Content to display when the image fails to load.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling the avatar.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onClick</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">{`() => void`}</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Function to call when the avatar is clicked.</td>
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
                        <li>Use avatars to visually represent users or objects.</li>
                        <li>Provide meaningful alternative text for accessibility.</li>
                        <li>Use the fallback prop to handle cases where the image fails to load.</li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

AvatarPageClient.displayName = "AvatarPageClient";
export default AvatarPageClient;
