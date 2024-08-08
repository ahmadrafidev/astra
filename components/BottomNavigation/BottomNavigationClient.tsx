'use client';

import React, { useState } from 'react';
import { Home, Search, Bell, User } from 'lucide-react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import BottomNavigation from './BottomNavigation';

const BottomNavigationClient: React.FC = () => {
    const [activeItem, setActiveItem] = React.useState<string>('Home');

    const navItems: NavItem[] = [
        { icon: Home, label: 'Home' },
        { icon: Search, label: 'Search' },
        { icon: Bell, label: 'Notifications' },
        { icon: User, label: 'Profile' },
    ];

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Bottom Navigation</h1>
                <p className="texta-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A mobile-friendly navigation bar fixed at screen bottom.
                </p>
            </div>
            <div className="my-5">
                <h2 className="text-xl font-semibold mb-4">Example</h2>
                <div className="max-w-md">
                    <BottomNavigation
                        items={navItems}
                        activeItem={activeItem}
                        onItemClick={setActiveItem}
                    />
                </div>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Active item: {activeItem}</p>
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
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">items</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">NavItem[]</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Array of navigation items</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">activeItem</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Label of the currently active item</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">onItemClick</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">{`(label: string) => void`}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Callback function when an item is clicked</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </section>
            {/* Best Practices Section */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-6">Best Practices</h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <ul className="list-decimal list-inside space-y-2">
                    <li>Limit the number of navigation items to 3-5 for better usability.</li>
                    <li>Use clear and recognizable icons for each navigation item.</li>
                    <li>Ensure the active state is visually distinct from inactive items.</li>
                    <li>Consider using labels alongside icons for clarity, especially for less common actions.</li>
                    <li>Implement smooth transitions when switching between active items for a polished user experience.</li>
                </ul>
                </div>
            </section>
        </Layout>
    );
};

BottomNavigationClient.displayName = "BottomNavigationClient";
export default BottomNavigationClient;
