'use client';

import React from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { AlertCircle } from 'lucide-react';

import TOC from '@/components/TOC/TOC';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Collapsible from './Collapsible';

const CollapsibleClient: React.FC = () => {
    const tocItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'usage', label: 'Usage' },
        { id: 'properties', label: 'Properties' },
        { id: 'best-practices', label: 'Best Practices' },
    ];

    const codeExample = `
    <Collapsible title="Default Collapsible">
        <p>This is the content for the default collapsible section.</p>
    </Collapsible>
    <Collapsible title="Initially Open Collapsible" defaultOpen={true}>
        <p>This collapsible section is open by default.</p>
    </Collapsible>
    <Collapsible 
        title="Customized Collapsible" 
        icon={<AlertCircle size={20} className="text-yellow-500" />}
        contentClassName="bg-yellow-50 dark:bg-yellow-900"
    >
        <p>This collapsible section has a custom icon and content background color.</p>
    </Collapsible>
    <Collapsible title="Disabled Collapsible" disabled>
        <p>This collapsible section is disabled and cannot be toggled.</p>
    </Collapsible>
    `;

    return (
        <Layout>
            <div className="flex">
                <div className="w-4/5 pr-2">
                    <Badge text="Components" />
                    <div id="overview" className="flex flex-col mb-5 scroll-mt-16">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Collapsible</h1>
                        <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">An expandable section that can be toggled to show or hide additional content.</p>
                    </div>

                    {/* Usage Section */}
                    <section id="usage" className="my-5 scroll-mt-20">
                        <Tabs>
                            <Tab label="Preview">
                                <div className="relative w-full overflow-hidden mt-4 rounded-lg bg-zinc-100 dark:bg-zinc-950 shadow border border-slate-300 dark:border-slate-800 flex justify-center items-center">
                                    <div className="flex-col space-y-10 justify-around p-6">
                                        <Collapsible title="Default Collapsible">
                                            <p className="text-gray-700 dark:text-gray-300">
                                                This is the content for the default collapsible section.
                                            </p>
                                        </Collapsible>
                                        <Collapsible title="Initially Open Collapsible" defaultOpen={true}>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                This collapsible section is open by default.
                                            </p>
                                        </Collapsible>
                                        <Collapsible 
                                            title="Customized Collapsible" 
                                            icon={<AlertCircle size={20} className="text-yellow-400" />}
                                            contentClassName="bg-yellow-50 dark:bg-yellow-900"
                                        >
                                            <p className="text-gray-700 dark:text-gray-300">
                                                This collapsible section has a custom icon and content background color.
                                            </p>
                                        </Collapsible>
                                        <Collapsible title="Disabled Collapsible" disabled>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                This collapsible section is disabled and cannot be toggled.
                                            </p>
                                        </Collapsible>
                                    </div>
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
                                                fontSize: '13px',
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
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider font-mono">Type</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Default</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Description</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">title</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">ReactNode</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The title of the collapsible section.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">children</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">ReactNode</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Content to be displayed inside the collapsible section.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Additional classes for styling the collapsible component.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">defaultOpen</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">boolean</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">false</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Whether the collapsible is open by default.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">disabled</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">boolean</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">false</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Whether the collapsible is disabled.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">onOpenChange</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono text-wrap">{`(open: boolean) => void`}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Callback function called when the collapsible state changes.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">icon</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">ReactNode</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">ArrowDown/Up</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Custom icon for the collapsible toggle button.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">contentClassName</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Additional classes for styling the content area.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Best Practices Section */}
                    <section id="best-practices" className="scroll-mt-20">
                        <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                        <div className="space-y-4 text-gray-700 dark:text-gray-300">
                            <ul className="list-decimal list-inside space-y-2">
                                <li>Use collapsible components to hide or show content sections dynamically.</li>
                                <li>Ensure the collapsible button is accessible and keyboard-navigable for all users.</li>
                                <li>Provide clear and concise titles for each collapsible section to improve usability.</li>
                                <li>Use the defaultOpen prop for important information that should be visible immediately.</li>
                                <li>Avoid overloading collapsible sections with too much content to maintain readability.</li>
                            </ul>
                        </div>
                    </section>
                </div>
                <TOC items={tocItems} />
            </div>
        </Layout>
    );
};

CollapsibleClient.displayName = "CollapsibleClient";
export default CollapsibleClient;
