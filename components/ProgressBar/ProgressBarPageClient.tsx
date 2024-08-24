'use client';

import React, { useState } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import TOC from '@/components/TOC/TOC';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import ProgressBar from './ProgressBar';
import ProgressBarDocumentation from './ProgressBarDocumentation';

const ProgressBarPageClient: React.FC = () => {
    const [progress, setProgress] = useState(50);

    const tocItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'usage', label: 'Usage' },
        { id: 'properties', label: 'Properties' },
        { id: 'best-practices', label: 'Best Practices' },
    ];

    const codeExample = `
    {/* Default Progress Bar */}
    <ProgressBar
        showLabel
        size="md"
        progress={progress}
        className="my-4"
    />

    {/* Progress Bar with Stripes */}
    <ProgressBar
        hasStripe
        size="md"
        progress={progress}
        className="my-4"
    />

    {/* Custom Progress Bar */}
    <ProgressBar
        progress={progress}
        size="md"
        progressVariant="success"
        showLabel
        labelPosition="outside"
        progressClassName="font-bold"
    />
    `;

    return (
        <Layout>
            <div className="flex">
                <div className="w-4/5 pr-2">
                    <Badge text="Components" />
                    <div id="overview" className="flex flex-col mb-5 scroll-mt-16">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Progress Bar</h1>
                        <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                            A visual indicator showing the completion status of a task or process.
                        </p>
                    </div>

                    {/* Usage Section */}
                    <section id="usage" className="scroll-mt-20">
                        <Tabs>
                            <Tab label="Preview">
                                <div className="relative w-full overflow-hidden mt-4 rounded-lg bg-zinc-100 dark:bg-zinc-950 shadow border border-slate-300 dark:border-slate-800 flex justify-center items-center">
                                    <div className="space-y-2 flex flex-col justify-around w-full p-4">
                                        <div>
                                            <h3 className="text-lg md:text-xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Default</h3>
                                            <ProgressBar showLabel size="md" progress={progress} className="my-4" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">With Stripes</h3>
                                            <ProgressBar size="md" hasStripe progress={progress} className="my-4" />
                                        </div>
                                        <div className="flex flex-col gap-6">
                                            <h3 className="text-lg md:text-xl font-medium font-sans text-gray-900 dark:text-gray-50">Custom Progress Bar</h3>
                                            <ProgressBar
                                                progress={progress}
                                                size="md"
                                                progressVariant="success"
                                                showLabel
                                                labelPosition="outside"
                                                progressClassName="font-bold"
                                            />
                                            <ProgressBar
                                                progress={progress}
                                                size="sm"
                                                showLabel
                                                labelPosition="inside"
                                                progressClassName="font-bold"
                                            />
                                            <ProgressBar
                                                hasStripe
                                                progress={progress}
                                                size="lg"
                                                progressVariant="custom"
                                                showLabel
                                                labelPosition="inside"
                                                progressClassName="font-bold text-white dark:text-black bg-black dark:bg-zinc-400"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex space-x-2 mt-4">
                                    <button
                                        onClick={() => setProgress((prev) => Math.max(prev - 10, 0))}
                                        className="px-4 py-2 bg-zinc-200 dark:bg-zinc-700 text-gray-900 dark:text-gray-50 rounded-lg"
                                    >
                                        Decrease
                                    </button>
                                    <button
                                        onClick={() => setProgress((prev) => Math.min(prev + 10, 100))}
                                        className="px-4 py-2 bg-gray-950 dark:bg-zinc-50 text-white dark:text-gray-900 rounded-lg"
                                    >
                                        Increase
                                    </button>
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
                    <ProgressBarDocumentation />
                </div>
                <TOC items={tocItems} />
            </div>
        </Layout>
    );
};

ProgressBarPageClient.displayName = "ProgressBarPageClient";
export default ProgressBarPageClient;
