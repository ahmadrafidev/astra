'use client';

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import TOC from '@/components/TOC/TOC';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import SegmentedControl from './SegmentedControl';

const SegmentedControlClient: React.FC = () => {
    const [singleChoiceSegment, setSingleChoiceSegment] = useState<string>('Weekly');
    const [multipleChoiceSegments, setMultipleChoiceSegments] = useState<string[]>(['Option 1', 'Option 3']);

    const tocItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'usage', label: 'Usage' },
        { id: 'properties', label: 'Properties' },
        { id: 'best-practices', label: 'Best Practices' },
    ];

    const codeExampleSingleChoice = `
    <SegmentedControl
        segments={['Daily', 'Weekly', 'Monthly']}
        defaultIndex={1}
        onSegmentChange={(segment) => console.log(segment)}
        className="mx-auto"
        activeClassName="bg-zinc-900 text-gray-50"
        inactiveClassName="bg-zinc-200 text-gray-700"
        multiple={false}
    />
    `;

    const codeExampleMultipleChoice = `
    <SegmentedControl
        segments={['Option 1', 'Option 2', 'Option 3']}
        defaultIndex={[0, 2]}
        onSegmentChange={(selectedSegments) => console.log(selectedSegments)}
        className="mx-auto"
        activeClassName="bg-blue-700 text-white"
        inactiveClassName="bg-gray-200 text-gray-600"
        multiple={true}
    />
    `;

    return (
        <Layout>
            <div className="flex">
                <div className="w-4/5 pr-2">
                    <Badge text="Components" />
                    <div id="overview" className="flex flex-col mb-5 scroll-mt-16">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Segmented Control</h1>
                        <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                            A segmented control component that allows users to select one or multiple options from a set of segments.
                        </p>
                    </div>

                    {/* Usage Section */}
                    <section id="usage" className="scroll-mt-20">
                        <Tabs>
                            <Tab label="Single">
                                <div className="relative w-full mt-4 rounded-lg bg-zinc-100 dark:bg-zinc-950 shadow border border-slate-300 dark:border-slate-800 p-5 flex flex-col justify-center items-center">
                                    <SegmentedControl
                                        segments={['Daily', 'Weekly', 'Monthly']}
                                        defaultIndex={1}
                                        onSegmentChange={setSingleChoiceSegment}
                                        className="mx-auto border dark:border-zinc-700"
                                        activeClassName="bg-zinc-900 text-gray-50"
                                        inactiveClassName="bg-zinc-200 text-gray-700"
                                        multiple={false}
                                    />
                                    <p className="mt-4 text-black dark:text-white font-sans font-normal text-sm md:text-lg tracking-tight">Selected: {singleChoiceSegment}</p>
                                </div>
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
                                            {codeExampleSingleChoice}
                                        </SyntaxHighlighter>
                                    </div>
                                </div>
                            </Tab>
                            <Tab label="Multiple">
                                <div className="relative w-full mt-4 rounded-lg bg-zinc-100 dark:bg-zinc-950 shadow border border-slate-300 dark:border-slate-800 p-5 flex flex-col justify-center items-center">
                                    <SegmentedControl
                                        segments={['Option 1', 'Option 2', 'Option 3']}
                                        defaultIndex={[0, 2]}
                                        onSegmentChange={setMultipleChoiceSegments}
                                        className="mx-auto"
                                        activeClassName="bg-blue-700 text-white"
                                        inactiveClassName="bg-gray-200 text-gray-600"
                                        multiple={true}
                                    />
                                    <p className="mt-4 text-black dark:text-white font-sans font-normal text-sm md:text-lg tracking-tight">Selected: {multipleChoiceSegments.join(', ')}</p>
                                </div>
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
                                            {codeExampleMultipleChoice}
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
                                        <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-gray-100">segments</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300 font-mono">string[]</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300">-</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                                            The list of segments to display.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-gray-100">onSegmentChange</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300 font-mono">{`(selectedSegment: string[] | string) => void`}</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300">-</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                                            Callback function that is triggered when the segment is changed.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-gray-100">defaultIndex</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300 font-mono">number | number[]</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300">0</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                                            The index (or indices) of the default selected segment(s).
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-gray-100">multiple</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300 font-mono">boolean</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300">false</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                                            If true, allows selecting multiple segments.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300">-</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                                            Additional class names for the control container.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-gray-100">activeClassName</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300">-</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                                            Class name for the active segment.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-gray-100">inactiveClassName</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 dark:text-gray-300">-</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                                            Class name for the inactive segments.
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
                                <li>Use Segmented Control when options are closely related and mutually exclusive.</li>
                                <li>Ensure segment labels are concise and clearly represent the options.</li>
                                <li>Consider using the multiple selection option only when necessary to avoid confusion.</li>
                            </ul>
                        </div>
                    </section>
                </div>
                <TOC items={tocItems} />
            </div>
        </Layout>
    );
};

SegmentedControlClient.displayName = "SegmentedControlClient";
export default SegmentedControlClient;
