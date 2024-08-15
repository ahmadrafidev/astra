'use client';

import React, { useState } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import TOC from '@/components/TOC/TOC';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Radio from './Radio';
import RadioDocumentation from './RadioDocumentation';

const RadioPageClient: React.FC = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const handleChange = (value: string | null) => {
        setSelectedValue(value);
        console.log("Selected value:", value);
    };

    const tocItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'usage', label: 'Usage' },
        { id: 'properties', label: 'Properties' },
        { id: 'best-practices', label: 'Best Practices' },
    ];

    const codeExample = `
        <Radio
            name="example"
            value="Option1"
            description="This is a description"
            checked={selectedValue === 'Option1'}
            onChange={handleChange}
            label="Option 1"
            className="my-4"
        />
    `;

    return (
        <Layout>
            <div className="flex">
                <div className="w-4/5 pr-2">
                    <Badge text="Components" />
                    <div id="overview" className="flex flex-col mb-5 scroll-mt-16">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Radio</h1>
                        <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                            A radio input allowing users to select a single option from a number of choices.
                        </p>
                    </div>

                    {/* Usage Section */}
                    <section id="usage" className="scroll-mt-20">
                        <Tabs>
                            <Tab label="Preview">
                                <div className="relative w-full overflow-hidden mt-4 rounded-lg bg-zinc-100 dark:bg-zinc-950 shadow border border-slate-300 dark:border-slate-800 flex justify-center items-center">
                                    <div className="space-y-6 flex flex-col justify-around w-full p-6">
                                        <div>
                                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                                                Base Radio
                                            </h3>
                                            <Radio
                                                name="example"
                                                value="Option1"
                                                checked={selectedValue === 'Option1'}
                                                onChange={handleChange}
                                                label="Option 1"
                                                className="my-4"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                                                Radio with Description
                                            </h3>
                                            <Radio
                                                name="example"
                                                value="Option2"
                                                checked={selectedValue === 'Option2'}
                                                onChange={handleChange}
                                                label="Option 2"
                                                description="This is a description"
                                                className="my-4"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                                                Disable Radio
                                            </h3>
                                            <Radio
                                                name="example"
                                                value="Option3"
                                                checked={selectedValue === 'Option3'}
                                                onChange={handleChange}
                                                label="Option 3 (Disabled)"
                                                description="This option is disabled"
                                                disabled
                                                className="my-4"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                                                Error Radio
                                            </h3>
                                            <Radio
                                                name="example"
                                                value="Option4"
                                                checked={selectedValue === 'Option4'}
                                                onChange={handleChange}
                                                label="Option 4 (With Error)"
                                                error="This is an error message"
                                                className="my-4"
                                            />
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
                    <RadioDocumentation />
                </div>
                <TOC items={tocItems} />
            </div>
        </Layout>
    );
};

RadioPageClient.displayName = "RadioPageClient";
export default RadioPageClient;
