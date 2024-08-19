'use client';

import React, { useState } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import TOC from '@/components/TOC/TOC';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import SearchBar from './SearchBar';
import SearchBarDocumentation from './SearchBarDocumentation';

const SearchBarPageClient: React.FC = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (query: string) => {
        setQuery(query);
        console.log('Search query:', query);
    };

    const tocItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'usage', label: 'Usage' },
        { id: 'properties', label: 'Properties' },
        { id: 'best-practices', label: 'Best Practices' },
    ];

    const codeExample = `
    <SearchBar onSearch={handleSearch} />
    <SearchBar onSearch={handleSearch} size="medium" />
    <SearchBar onSearch={handleSearch} icon={<CustomIcon />} />
    `;

    return (
        <Layout>
            <div className="flex">
                <div className="w-4/5 pr-2">
                    <Badge text="Components" />
                    <div id="overview" className="flex flex-col mb-5 scroll-mt-16">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">SearchBar</h1>
                        <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                            An input field for entering search queries to find specific content.
                        </p>
                    </div>

                    {/* Usage Section */}
                    <section id="usage" className="scroll-mt-20">
                        <Tabs>
                            <Tab label="Preview">
                                <div className="relative w-full overflow-hidden mt-4 rounded-lg bg-zinc-100 dark:bg-zinc-950 shadow border border-slate-300 dark:border-slate-800">
                                    <div className="p-6 space-y-4 flex flex-col justify-start items-start">
                                        <div>
                                            <h3 className="text-lg md:text-xl font-medium mb-4 text-gray-900 dark:text-gray-50">Default</h3>
                                            <SearchBar onSearch={handleSearch} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-medium mb-4 text-gray-900 dark:text-gray-50">With Custom Icon</h3>
                                            <SearchBar
                                                onSearch={handleSearch}
                                                placeholder="SearchBar with Icon"
                                                icon={
                                                    <svg
                                                        className="h-5 w-5 text-gray-400"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                }
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-medium mb-4 text-gray-900 dark:text-gray-50">With Debounce</h3>
                                            <SearchBar onSearch={handleSearch} debounceTime={500} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-medium mb-4 text-gray-900 dark:text-gray-50">Small</h3>
                                            <SearchBar onSearch={handleSearch} size="small" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-medium mb-4 text-gray-900 dark:text-gray-50">Medium</h3>
                                            <SearchBar onSearch={handleSearch} size="medium" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-medium mb-4 text-gray-900 dark:text-gray-50">Large</h3>
                                            <SearchBar onSearch={handleSearch} size="large" />
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

                    <SearchBarDocumentation />
                </div>
                <TOC items={tocItems} />
            </div>
        </Layout>
    );
};

SearchBarPageClient.displayName = 'SearchBarPageClient';
export default SearchBarPageClient;
