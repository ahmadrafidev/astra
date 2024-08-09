'use client';

import React, { useState } from 'react';
import { Command } from 'lucide-react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import KeyboardShortcut from './KeyboardShortcut';

const KeyboardShortcutClient: React.FC = () => {
    const shortcuts = [
        { key: 'n', modifiers: ['ctrl'], action: () => console.log('New item'), description: 'Create new item' },
        { key: 's', modifiers: ['ctrl'], action: () => console.log('Save'), description: 'Save current item' },
        { key: 'p', modifiers: ['ctrl', 'shift'], action: () => console.log('Print'), description: 'Print document' },
    ];

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Keyboard Shortcuts</h1>
                <p className="texta-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A visual display of keyboard combinations for quick actions.
                </p>
            </div>
            <KeyboardShortcut 
                icon={<Command size={16} className="mr-2" />}
                keyLabel="K"
                shortcuts={shortcuts} 
                className="relative" 
            />
            {/* Props Section */}
            <section className="my-5">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-6">Props</h2>
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
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">shortcuts</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">ShortcutAction[]</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">[]</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">An array of shortcut actions that define the key combinations and associated actions.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Empty</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Additional CSS classes for custom styling.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">icon</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">React.ReactNode</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">None</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">A custom icon component to be displayed in the button. Defaults to `null`.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">keyLabel</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Empty</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">A label to be displayed alongside the icon, representing the key shortcut.</td>
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
                        <li>Ensure that shortcut keys are intuitive and do not conflict with standard browser or OS shortcuts.</li>
                        <li>Use the `keyLabel` prop to clearly indicate the key combination, especially if the shortcut involves multiple keys.</li>
                        <li>Keep the list of shortcuts short and focused to avoid overwhelming users with too many options.</li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

KeyboardShortcutClient.displayName = "KeyboardShortcutClient";
export default KeyboardShortcutClient;
