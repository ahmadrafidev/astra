'use client';

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import TOC from '@/components/TOC/TOC';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Popover from './Popover';

const PopoverClient: React.FC = () => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const tocItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'usage', label: 'Usage' },
        { id: 'properties', label: 'Properties' },
        { id: 'best-practices', label: 'Best Practices' },
    ];

    const codeExample = `
  <Popover
    content={<div>Popover Content!</div>}
    placement="bottom"
    trigger="click"
    ariaLabel="Example popover"
    >
  <button>
    Show Popover
  </button>
    `;

    return (
        <Layout>
            <div className="flex">
                <div className="w-4/5 pr-2">
                    <Badge text="Components" />
                    <div id="overview" className="flex flex-col mb-5 scroll-mt-16">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Popover</h1>
                        <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                            A popover component that provides additional content or information when triggered.
                        </p>
                    </div>

                    {/* Usage Section */}
                    <section id="usage" className="scroll-mt-20">
                        <Tabs>
                            <Tab label="Preview">
                                <div className="relative w-full h-64 overflow-hidden mt-4 rounded-lg bg-zinc-100 dark:bg-zinc-950 shadow border border-slate-300 dark:border-slate-800 flex justify-center items-center">
                                  <Popover
                                      content={<div className="bg-zinc-50 dark:bg-zinc-800 text-black dark:text-white">Popover Content!</div>}
                                      placement="bottom"
                                      trigger="click"
                                      ariaLabel="Example popover"
                                  >
                                      <button className="px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-black rounded-lg shadow-sm hover:bg-gray-800 dark:hover:bg-gray-200">
                                        Show Popover
                                      </button>
                                  </Popover>
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
                                        <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-gray-100">children</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300 font-mono">ReactNode</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300">-</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The element that triggers the popover.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-gray-100">content</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300 font-mono">ReactNode</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300">-</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The content to display inside the popover.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-gray-100">placement</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300 font-mono">{`'top' | 'bottom' | 'left' | 'right'`}</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300">{`'bottom'`}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The placement of the popover relative to the trigger element.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-gray-100">trigger</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300 font-mono">{`'click' | 'hover' | 'focus'`}</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300">{`'click'`}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The event that triggers the visibility of the popover.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300">-</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Additional class names to apply to the popover container.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-gray-100">offset</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300 font-mono">number</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300">8</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The distance between the trigger and the popover in pixels.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-gray-100">closeOnClickOutside</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300 font-mono">boolean</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300">true</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Whether to close the popover when clicking outside of it.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-gray-100">closeOnEsc</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300 font-mono">boolean</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300">true</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Whether to close the popover when pressing the Escape key.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-gray-100">ariaLabel</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300">{`'Popover'`}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Accessible label for the popover, used by screen readers.</td>
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
                                <li>Ensure the popover is accessible and can be triggered by keyboard interactions.</li>
                                <li>Use clear and concise content within the popover.</li>
                                <li>Position the popover in a way that does not obscure important content.</li>
                                <li>Provide a way to close the popover, especially when using the click trigger.</li>
                            </ul>
                        </div>
                    </section>
                </div>
                <TOC items={tocItems} />
            </div>
        </Layout>
    );
};

PopoverClient.displayName = "PopoverPageClient";
export default PopoverClient;
