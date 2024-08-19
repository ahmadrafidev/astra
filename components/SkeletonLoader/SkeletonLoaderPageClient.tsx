'use client';

import React from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import TOC from '@/components/TOC/TOC';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import SkeletonLoader from './SkeletonLoader';
import SkeletonLoaderDocumentation from './SkeletonLoaderDocumentation';

const SkeletonLoaderPageClient: React.FC = () => {
    const tocItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'usage', label: 'Usage' },
        { id: 'properties', label: 'Properties' },
        { id: 'best-practices', label: 'Best Practices' },
    ];

    const codeExample = `
<SkeletonLoader width="100%" shape="circle" height="2rem" animation="pulse" />
<SkeletonLoader width="75%" shape="rectangle" height="1.5rem" animation="wave" />
<SkeletonLoader width="50%" height="1rem" animation="pulse" />
<SkeletonLoader width={200} height={20} gap={10} animation="wave" shape="text" />
    `;

    return (
        <Layout>
            <div className="flex">
                <div className="w-4/5 pr-2">
                    <Badge text="Components" />
                    <div id="overview" className="flex flex-col mb-5 scroll-mt-16">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">SkeletonLoader</h1>
                        <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                            A placeholder animation displayed while content is loading.
                        </p>
                    </div>

                    {/* Usage Section */}
                    <section id="usage" className="scroll-mt-20">
                        <Tabs>
                            <Tab label="Preview">
                                <div className="relative w-full h-64 overflow-hidden mt-4 rounded-lg bg-zinc-100 dark:bg-zinc-950 shadow border border-slate-300 dark:border-slate-800">
                                    <div className="p-6 space-y-4 flex flex-col justify-center items-center">
                                        <SkeletonLoader width="100%" shape="circle" height="2rem" className="my-2" animation="pulse"/>
                                        <SkeletonLoader width="75%" shape="rectangle" height="1.5rem" className="my-2" animation="wave" />
                                        <SkeletonLoader width="50%" height="1rem" className="my-2" animation="pulse"/>
                                        <SkeletonLoader width={200} height={20} gap={10} animation="wave" shape="text" />
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

                    <SkeletonLoaderDocumentation />
                </div>
                <TOC items={tocItems} />
            </div>
        </Layout>
    );
};

SkeletonLoaderPageClient.displayName = 'SkeletonLoaderPageClient';
export default SkeletonLoaderPageClient;
