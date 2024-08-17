'use client';

import React, { useState } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import TOC from '@/components/TOC/TOC';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Spinner from './Spinner';
import SpinnerDocumentation from './SpinnerDocumentation';

const SpinnerPageClient: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleLoadingToggle = () => {
        setIsLoading(!isLoading);
        if (!isLoading) {
            setTimeout(() => setIsLoading(false), 3000); 
        }
    };

    const tocItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'usage', label: 'Usage' },
        { id: 'properties', label: 'Properties' },
        { id: 'best-practices', label: 'Best Practices' },
    ];

    const codeExample = `
    <Spinner size="sm" />
    <Spinner size="md" />
    <Spinner size="lg" />
    <Spinner color="border-blue-500" />
    <Spinner thickness={4} speed="slow" />
    <Spinner className="shadow-lg border-red-500 shadow-red-500" />
    `;

    return (
        <Layout>
            <div className="flex">
                <div className="w-4/5 pr-2">
                    <Badge text="Components" />
                    <div id="overview" className="flex flex-col mb-5 scroll-mt-16">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Spinner</h1>
                        <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                            An animated indicator showing that content is loading or processing. Highly customizable and accessible.
                        </p>
                    </div>

                    {/* Variants Section */}
                    <section id="usage" className="scroll-mt-20">
                        <Tabs>
                            <Tab label="Preview">
                                <div className="relative w-full overflow-hidden mt-4 rounded-lg bg-zinc-100 dark:bg-zinc-950 shadow border border-slate-300 dark:border-slate-800">
                                    <div className="p-6 space-y-4 flex flex-col justify-center items-center">
                                        <div className="w-full flex flex-col items-center">
                                            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Basic Usage</h2>
                                            <div className="flex space-x-4">
                                                <Spinner size="sm" />
                                                <Spinner size="md" />
                                                <Spinner size="lg" />
                                            </div>
                                        </div>
                                        <div className="w-full flex flex-col items-center">
                                            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Custom Colors</h2>
                                            <div className="flex space-x-4">
                                                <Spinner color="border-blue-500" />
                                                <Spinner color="border-green-500" />
                                                <Spinner color="border-red-500" />
                                                <Spinner color="border-purple-500" />
                                            </div>
                                        </div>
                                        <div className="w-full flex flex-col items-center">
                                            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Custom Thickness and Speed</h2>
                                            <div className="flex space-x-4">
                                                <Spinner thickness={2} speed="slow" />
                                                <Spinner thickness={4} speed="normal" />
                                                <Spinner thickness={6} speed="fast" />
                                            </div>
                                        </div>
                                        <div className="w-full flex flex-col items-center">
                                            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Spinner in a Button</h2>
                                            <button 
                                                className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2"
                                                onClick={handleLoadingToggle}
                                                disabled={isLoading}
                                            >
                                                {isLoading && <Spinner className="z-50" size="sm" color="text-white" />}
                                                <span className="font-medium font-sans">{isLoading ? 'Loading' : 'Click to load'}</span>
                                            </button>
                                        </div>
                                        <div className="w-full flex flex-col items-center">
                                            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-50">With Custom Styling</h2>
                                            <Spinner className="shadow-lg border-red-500 shadow-red-500" />
                                        </div>
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
                    <SpinnerDocumentation />
                </div>
                <TOC items={tocItems} />
            </div>
        </Layout>
    );
};

SpinnerPageClient.displayName = "SpinnerPageClient";
export default SpinnerPageClient;
