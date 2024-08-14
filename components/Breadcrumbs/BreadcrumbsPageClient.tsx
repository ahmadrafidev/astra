'use client';

import React from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';
import TOC from '@/components/TOC/TOC';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

import Breadcrumbs from './Breadcrumbs';
import BreadcrumbsDocumentation from './BreadcrumbsDocumentation';

const BreadcrumbsPageClient: React.FC = () => {
    const pageItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Components', path: '/components' },
        { name: 'Breadcrumbs', path: '/components/breadcrumbs' },
    ];

    const tocItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'usage', label: 'Usage' },
        { id: 'properties', label: 'Properties' },
        { id: 'best-practices', label: 'Best Practices' },
    ];

    const codeExample = `
        <Breadcrumbs
            items={${JSON.stringify(pageItems, null, 2)}}
            className="m-4"
        />
    `;

    return (
        <Layout>
            <div className="flex">
                <div className="w-4/5 pr-2">
                    <Badge text="Components" />
                    <div id="overview" className="flex flex-col mb-5 scroll-mt-16">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Breadcrumbs</h1>
                        <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                            A navigation aid showing the user location within a website hierarchy.
                        </p>
                    </div>      
                    
                    {/* Usage Section */}
                    <section id="usage" className="scroll-mt-20 my-5">
                        <Tabs>
                            <Tab label="Preview">
                                <div className="relative w-full h-64 overflow-hidden mt-4 rounded-lg flex justify-center items-center bg-zinc-100 dark:bg-zinc-950 shadow border border-slate-300 dark:border-slate-800">
                                    <div className="w-7/12">
                                        <Breadcrumbs
                                            items={pageItems}
                                            className="m-4"
                                        />
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
                        <BreadcrumbsDocumentation />
                </div>
                <TOC items={tocItems} />
            </div>
        </Layout>
    );
};

BreadcrumbsPageClient.displayName = "BreadcrumbsPageClient";
export default BreadcrumbsPageClient;
