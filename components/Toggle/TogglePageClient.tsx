'use client';

import React from 'react';
import { Check, X, Wifi } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import TOC from '@/components/TOC/TOC';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Toggle from './Toggle';
import ToggleDocumentation from './ToggleDocumentation';

const TogglePageClient: React.FC = () => {

    const handleToggleChange = (state: boolean) => {
        console.log("Toggle is now", state ? "On" : "Off");
    };

    const tocItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'usage', label: 'Usage' },
        { id: 'properties', label: 'Properties' },
        { id: 'best-practices', label: 'Best Practices' },
    ];

    const codeExample = `
        <Toggle 
            ariaLabel="Toggle switch"
            className="max-w-md px-4 py-2 border rounded-lg"
            onIcon={<Check />}
            offIcon={<X />}
            onClassName="bg-gray-100 text-gray-900"
            offClassName="bg-gray-100 text-gray-900"
            onChange={handleToggleChange}
            defaultOn={false}
        />

        <Toggle 
            ariaLabel="Toggle switch"
            className="max-w-md px-4 py-2 border rounded-lg"
            onIcon={<Wifi />}
            offIcon={<Wifi />}
            onChange={handleToggleChange}
            defaultOn={false}
            onClassName="bg-blue-500 text-white"
            offClassName="bg-gray-100 text-gray-900"
            iconClassName="h-6 w-6"
            hideOffIcon={false}
        />
    `;

    return (
        <Layout>
            <div className="flex">
                <div className="w-4/5 pr-2">
                    <Badge text="Components" />
                    <div id="overview" className="flex flex-col mb-5 scroll-mt-16">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Toggle</h1>
                        <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                            A button that switches between two states when clicked.
                        </p>
                    </div>

                    {/* Usage Section */}
                    <section id="usage" className="scroll-mt-20">
                        <Tabs>
                            <Tab label="Preview">
                                <div className="flex relative w-full overflow-hidden mt-4 rounded-lg justify-center items-center bg-zinc-100 dark:bg-zinc-950 shadow border border-slate-300 dark:border-slate-800">
                                    <div className="space-y-8 flex flex-col justify-around p-10 text-center">
                                        <div className="items-center flex flex-col">
                                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                                                Default Toggle
                                            </h3>
                                            <Toggle 
                                                ariaLabel="Toggle switch"
                                                className="max-w-md px-4 py-2 border rounded-lg"
                                                onIcon={<Check />}
                                                offIcon={<X />}
                                                onClassName="bg-gray-100 text-gray-900"
                                                offClassName="bg-gray-100 text-gray-900"
                                                onChange={handleToggleChange}
                                                defaultOn={false}
                                            />
                                        </div>
                                        <div className="items-center flex flex-col">
                                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                                                Mode Toggle
                                            </h3>
                                            <Toggle 
                                                ariaLabel="Toggle switch"
                                                className="max-w-md px-4 py-2 border rounded-lg"
                                                onIcon={<Wifi />}
                                                offIcon={<Wifi />}
                                                onChange={handleToggleChange}
                                                defaultOn={false}
                                                onClassName="bg-blue-500 text-white"
                                                offClassName="bg-gray-100 text-gray-900"
                                                iconClassName="h-6 w-6"
                                                hideOffIcon={false}
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
                    <ToggleDocumentation />
                </div>
                <TOC items={tocItems} />
            </div>
        </Layout>
    );
};

TogglePageClient.displayName = "TogglePageClient";
export default TogglePageClient;
