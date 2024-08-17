'use client';

import React, { useState } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import TOC from '@/components/TOC/TOC';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

import Layout from '@/components/Layout/Layout';
import Badge from '@/components/Badge/Badge';

const TabsPage: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState('Tab 1');

    const tocItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'usage', label: 'Usage' },
        { id: 'properties', label: 'Properties' },
        { id: 'best-practices', label: 'Best Practices' },
    ];

    const codeExample = `
    <Tabs className="w-full">
        <Tab label="Tab 1">
            <div>Content for Tab 1</div>
        </Tab>
        <Tab label="Tab 2">
            <div>Content for Tab 2</div>
        </Tab>
        <Tab label="Tab 3">
            <div>Content for Tab 3</div>
        </Tab>
    </Tabs>
    `;

    return (
        <Layout>
            <div className="flex">
                <div className="w-4/5 pr-2">
                    <Badge text="Components" />
                    <div id="overview" className="flex flex-col mb-5 scroll-mt-16">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Tabs</h1>
                        <p className="mb-4 text-gray-900 dark:text-gray-50 text-justify font-normal">
                            A set of selectable items for navigating between related content sections.
                        </p>
                    </div>

                    {/* Usage Section */}
                    <section id="usage" className="scroll-mt-20">
                        <Tabs>
                            <Tab label="Preview">
                                <div className="relative w-full h-64 overflow-hidden mt-4 rounded-lg flex justify-center items-center bg-zinc-100 dark:bg-zinc-950 shadow border border-slate-300 dark:border-slate-800">
                                    <Tabs className="w-full">
                                        <Tab label="Tab 1">
                                            <div className="flex justify-center items-center mt-4">Content for Tab 1</div>
                                        </Tab>
                                        <Tab label="Tab 2">
                                            <div className="flex justify-center items-center mt-4">Content for Tab 2</div>
                                        </Tab>
                                        <Tab label="Tab 3">
                                            <div className="flex justify-center items-center mt-4">Content for Tab 3</div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </Tab>
                            <Tab label="Code">
                                <div
                                    className="relative rounded-lg bg-gray-900 dark:bg-gray-800/90 mt-4"
                                    role="region"
                                    aria-label="Code Snippet in tsx"
                                >
                                    <div className="flex justify-between items-center px-4 py-2 border-b border-gray-800">
                                        <span className="text-sm font-medium text-gray-100">
                                            tsx
                                        </span>
                                    </div>
                                    <div className="overflow-auto rounded-lg border border-gray-800">
                                        <SyntaxHighlighter
                                            language="tsx"
                                            style={materialLight}
                                            showLineNumbers={false}
                                            wrapLongLines={true}
                                            customStyle={{
                                                margin: 1.5,
                                                borderRadius: '0.5rem 0.5rem 0.5rem 0.5rem',
                                                fontSize: '14px',
                                                lineHeight: '1.25',
                                                padding: '10px',
                                            }}
                                        >
                                            {codeExample}
                                        </SyntaxHighlighter>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </section>

                    {/* Properties Section */}
                    <section id="properties" className="my-5 scroll-mt-20">
                        <h2 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-50 mb-5">Props</h2>
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
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">label</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The label of the tab.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">icon</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The icon to display in the tab.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">children</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">React.ReactNode</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The content of the tab.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Additional classes for styling.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Best Practices Section */}
                    <section id="best-practices" className="scroll-mt-20">
                        <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                        <div className="space-y-4">
                            <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3">
                                <li>Use descriptive labels for tabs to clearly convey their content.</li>
                                <li>Consider using icons alongside labels for better visual representation.</li>
                                <li>Make sure the tab content is organized and easy to navigate.</li>
                            </ul>
                        </div>
                    </section>
                </div>
                <TOC items={tocItems} />
            </div>
        </Layout>
    );
};

TabsPage.displayName = "TabsPage";
export default TabsPage;
