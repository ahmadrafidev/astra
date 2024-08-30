import React from 'react';
import type { Metadata } from "next";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import Layout from '@/components/Layout/Layout';
import Badge from '@/components/Badge/Badge';
import { Accordion } from '@/components/Accordion/Accordion';
import { AccordionItem } from '@/components/Accordion/AccordionItem';
import AccordionDocumentation from '@/components/Accordion/AccordionDocumentation';
import { Tabs, Tab } from '@/components/Tabs/Tabs';
import TOC from '@/components/TOC/TOC';

export const metadata: Metadata = {
    title: "Accordion",
    description: "A vertically stacked set of interactive headings that expand to reveal associated content.",
};

const AccordionPage: React.FC = () => {
    const codeExample = `
    {/* Default Accordion */}
    <Accordion
        className="overflow-hidden rounded-lg"
        itemClassName="first:rounded-t-lg last:rounded-b-lg"
        border="border-gray-300 dark:border-gray-700"
        selectionMode="single"
        variant="default"
    >
        <>
            <AccordionItem title="Accordion 1">
                Content for accordion 1
            </AccordionItem>
            <AccordionItem title="Accordion 2">
                Content for accordion 2
            </AccordionItem>
        </>
    </Accordion>

    {/* Multiple Default Accordion */}
    <Accordion
        className="overflow-hidden rounded-lg"
        itemClassName="first:rounded-t-lg last:rounded-b-lg"
        border="border-gray-300 dark:border-gray-700"
        selectionMode="multiple"
        variant="default"
    >
        <>
            <AccordionItem title="Accordion 1">
                Content for accordion 1
            </AccordionItem>
            <AccordionItem title="Accordion 2">
                Content for accordion 2
            </AccordionItem>
        </>
    </Accordion>
    `;

    const tocItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'usage', label: 'Usage' },
        { id: 'default-accordion', label: 'Default Accordion' },
        { id: 'default-accordion-subtitle', label: 'Default Accordion with Subtitle' },
        { id: 'accordion-multiple', label: 'Accordion with Multiple Open' },
        { id: 'split-accordion', label: 'Split Accordion' },
        { id: 'properties', label: 'Properties' },
        { id: 'best-practices', label: 'Best Practices' },
    ];

    return (
        <Layout>
            <div className="flex">
                {/* Main Content */}
                <div className="w-4/5 pr-2">
                    <Badge text="Components" />

                    {/* Header Content */}
                    <section id="overview" className="mb-5 scroll-mt-16">
                        <div className="flex flex-col">
                            <h1 className="text-2xl md:text-3xl font-semibold font-sans text-gray-900 dark:text-gray-50 mb-3 md:mb-4">Accordion</h1>
                            <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                                A vertically stacked set of interactive headings that expand to reveal associated content.
                            </p>
                        </div>
                    </section>

                    {/* Accordion Usage Section */}
                    <section id="usage" className="my-5 scroll-mt-20">
                        <Tabs>
                            <Tab label="Preview">
                                <div className="relative w-full overflow-hidden rounded-lg mt-4 bg-zinc-100 dark:bg-zinc-950 shadow border border-slate-300 dark:border-slate-800">
                                    <div className="space-y-4 justify-around p-6">
                                        <div id="default-accordion" className="scroll-mt-20">
                                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                                                Default Accordion
                                            </h3>
                                            <Accordion
                                                className="overflow-hidden max-w-lg rounded-lg"
                                                itemClassName="first:rounded-t-lg last:rounded-b-lg"
                                                border="border-gray-300 dark:border-gray-700"
                                                selectionMode="single"
                                                variant="default"
                                            >
                                                <>
                                                    <AccordionItem title="Accordion 1">
                                                        Content for accordion 1
                                                    </AccordionItem>
                                                    <AccordionItem title="Accordion 2">
                                                        Content for accordion 2
                                                    </AccordionItem>
                                                </>
                                            </Accordion>
                                        </div>
                                        <div id="default-accordion-subtitle" className="scroll-mt-20">
                                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                                                Default Accordion with Subtitle
                                            </h3>
                                            <Accordion
                                                className="overflow-hidden max-w-lg rounded-lg"
                                                itemClassName="first:rounded-t-lg last:rounded-b-lg"
                                                border="border-gray-300 dark:border-gray-700"
                                                selectionMode="single"
                                                variant="default"
                                            >
                                                <>
                                                    <AccordionItem title="Accordion 1" subtitle="Accordion 1 Subtitle">
                                                        Content for accordion 1
                                                    </AccordionItem>
                                                    <AccordionItem title="Accordion 2" subtitle="Accordion 1 Subtitle">
                                                        Content for accordion 2
                                                    </AccordionItem>
                                                </>
                                            </Accordion>
                                        </div>
                                        <div id="accordion-multiple" className="scroll-mt-20">
                                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                                                Accordion with Multiple Open 
                                            </h3>
                                            <Accordion
                                                className="overflow-hidden max-w-lg rounded-lg"
                                                itemClassName="first:rounded-t-lg last:rounded-b-lg"
                                                border="border-gray-300 dark:border-gray-700"
                                                selectionMode="multiple"
                                                variant="default"
                                            >
                                                <>
                                                    <AccordionItem title="Accordion 1" subtitle="Accordion 1 Subtitle">
                                                        Content for accordion 1
                                                    </AccordionItem>
                                                    <AccordionItem title="Accordion 2" subtitle="Accordion 1 Subtitle">
                                                        Content for accordion 2
                                                    </AccordionItem>
                                                </>
                                            </Accordion>
                                        </div>
                                        <div id="split-accordion" className="scroll-mt-20">
                                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                                                Split Accordion
                                            </h3>
                                            <Accordion
                                                className="overflow-hidden max-w-lg rounded-lg"
                                                border="border-gray-300 dark:border-gray-700"
                                                selectionMode="single"
                                                variant="split"
                                            >
                                                <>
                                                    <AccordionItem title="Accordion 1">
                                                        Content for accordion 1
                                                    </AccordionItem>
                                                    <AccordionItem title="Accordion 2">
                                                        Content for accordion 2
                                                    </AccordionItem>
                                                </>
                                            </Accordion>
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
                    <AccordionDocumentation/>
                </div>

                {/* Table of Contents */}
                <TOC items={tocItems} />
            </div>
        </Layout>
    );
};

AccordionPage.displayName = "AccordionPage";
export default AccordionPage;
