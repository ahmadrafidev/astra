'use client';

import React from 'react';
import { Home, User, Github, Linkedin, Twitter, Globe } from 'lucide-react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Dock from './Dock';

const items = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/about', icon: User, label: 'About' },
    { href: 'https://github.com/ahmadrafidev', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/ahmadrafiwirana/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://x.com/rafiwiranaa', icon: Twitter, label: 'Twitter' },
    { href: 'https://www.ahmadrafi.dev/', icon: Globe, label: 'Website' },
];

const DockClient: React.FC = () => {

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Dock</h1>
                <p className="texta-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A dynamic hub for effortless access and intuitive navigation.
                </p>
            </div>
            <section className="flex flex-col space-y-4">
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50">Variants</h2>
                <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-medium font-sans text-gray-900 dark:text-gray-50">Default Dock</h3>
                    <div className="relative w-full h-64 overflow-hidden rounded-lg bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600">
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                            <Dock 
                                items={items}
                                dockWidth="500px"
                                dockHeight="60px"
                                variant="default"
                            />
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-medium font-sans text-gray-900 dark:text-gray-50">Glassmorphism Dock</h3>
                    <div className="relative w-full h-64 overflow-hidden rounded-lg bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600">
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                            <Dock 
                                items={items}
                                dockWidth="500px"
                                dockHeight="60px"
                                variant="glassmorphism"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Props Section */}
            <section className="my-5">
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-6">Props</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider font-mono">Type</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Default</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Description</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Additional class names for the dock container.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">items</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">DockItemProps[]</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">[]</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The list of items to display in the dock.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">iconSize</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">number</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">24</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The size of the icons in the dock items.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">dockWidth</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string | number</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{`'auto'`}</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The width of the dock container.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">dockHeight</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string | number</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{`'auto'`}</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The height of the dock container.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">variant</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">{`'default' | 'glassmorphism'`}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{`'default'`}</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The visual variant of the dock (e.g., default or glassmorphism).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            {/* Best Practices Section */}
            <section>
                <h2 className="text-2xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                <div className="space-y-4">
                    <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3">
                        <li>Keep the Dock items consistent in terms of size and spacing to ensure a cohesive visual experience.</li>
                        <li>Use tooltips to provide additional context for each Dock item, improving usability and accessibility.</li>
                        <li>Utilize hover effects to enhance interactivity and provide visual feedback to users.</li>
                        <li>Ensure all Dock items have meaningful labels and icons to maintain clarity and prevent confusion.</li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

DockClient.displayName = "DockClient";
export default DockClient;
