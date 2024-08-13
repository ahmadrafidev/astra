'use client';

import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Button from './Button';

const ButtonClient: React.FC = () => {
    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Button</h1>
                <p className="texta-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                  An interactive element that triggers an action when clicked or tapped.
                </p>
            </div>
            {/* Button Variants Section */}
            <section>
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Variants</h2>
                <div className="space-y-5">
                    <div>
                        <Button variant="default">Default Button</Button>
                    </div>
                    <div>
                        <Button variant="destructive">Destructive Button</Button>
                    </div>
                    <div>
                        <Button variant="outline">Outline Button</Button>
                    </div>
                    <div>
                        <Button variant="secondary">Secondary Button</Button>
                    </div>
                    <div>
                        <Button variant="ghost">Ghost Button</Button>
                    </div>
                    <div>
                        <Button variant="link">Link Button</Button>
                    </div>
                </div>
            </section>
            {/* Props Section */}
            <section className="my-5">
              <h2 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-50 mb-6">Props</h2>
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">children</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">ReactNode</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Content to be displayed inside the button.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">variant</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono text-wrap">{`'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'`}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{`'default'`}</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The style variant of the button.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Additional classes for custom styling.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">icon</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">ReactNode</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Icon to be displayed inside the button.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">iconPosition</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">{`'left' | 'right'`}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{`'left'`}</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Position of the icon inside the button.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">size</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">{`'xs' | 'sm' | 'md' | 'lg'`}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{`'md'`}</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Size of the button.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">disabled</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">boolean</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">false</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Whether the button is disabled.</td>
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
                  <li>Use the appropriate <code>variant</code> to convey the button‘s purpose and importance within the UI.</li>
                  <li>Provide meaningful <code>children</code> text that clearly indicates the button‘s action.</li>
                  <li>Use the <code>icon</code> prop to add relevant icons that enhance the button‘s function without overwhelming the user.</li>
                  <li>Avoid using too many button variants in a single view to maintain a clean and focused user interface.</li>
                </ul>
              </div>
            </section>
        </Layout>
    );
};

ButtonClient.displayName = "ButtonClient";
export default ButtonClient;
