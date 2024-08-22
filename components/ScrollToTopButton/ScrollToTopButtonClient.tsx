'use client';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import TOC from '@/components/TOC/TOC';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import ScrollToTopButton from './ScrollToTopButton';

const ScrollToTopButtonClient: React.FC = () => {

    const tocItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'usage', label: 'Usage' },
        { id: 'properties', label: 'Properties' },
        { id: 'best-practices', label: 'Best Practices' },
    ];

    const codeExample = `
    <ScrollToTopButton 
        showAt={150} 
        smooth={true} 
        className="fixed bottom-4 right-4" 
    />
    `;

    return (
        <Layout>
            <div className="flex">
                <div className="w-4/5 pr-2">
                    <Badge text="Components" />
                    <div id="overview" className="flex flex-col mb-5 scroll-mt-16">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Scroll to Top Button</h1>
                        <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                            A button that appears when the user scrolls down the page, allowing them to quickly return to the top.
                        </p>
                    </div>

                    {/* Usage Section */}
                    <section id="usage" className="scroll-mt-20">
                        <Tabs>
                            <Tab label="Preview">
                                <div className="relative w-full h-32 overflow-hidden mt-4 rounded-lg bg-zinc-100 dark:bg-zinc-950 shadow border border-slate-300 dark:border-slate-800 p-4">
                                    <div className="flex flex-col justify-center items-center">
                                        <h1 className="text-black dark:text-white text-lg md:text-2xl font-semibold">Scroll Down to See the Button </h1>
                                        <p className="text-black dark:text-white text-sm md:text-lg font-medium">Keep scrolling until the Scroll-to-Top button show up.</p>
                                    </div>
                                    <ScrollToTopButton showAt={150} smooth={true} className="fixed bottom-4 right-4" />
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

                    {/* Props Section */}
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
                                        <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-gray-100">showAt</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300 font-mono">number</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300">100</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                                            The scroll position (in pixels) at which the button will appear.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-gray-100">smooth</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300 font-mono">boolean</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300">true</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                                            Determines if the scrolling behavior should be smooth.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300">-</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                                            Additional classes for customizing the button appearance and position.
                                        </td>
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
                                <li>Use contrasting colors for the button to make it easily visible against the page background.</li>
                                <li>Place the button in a consistent position, such as the bottom-right corner, for a better user experience.</li>
                                <li>Avoid using a very low scroll threshold, as it can make the button appear too early.</li>
                            </ul>
                        </div>
                    </section>
                </div>
                <TOC items={tocItems} />
            </div>
        </Layout>
    );
};

ScrollToTopButtonClient.displayName = "ScrollToTopButtonClient";
export default ScrollToTopButtonClient;
