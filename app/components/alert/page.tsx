import React from 'react';
import type { Metadata } from "next";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import Layout from '@/components/Layout/Layout';
import Badge from '@/components/Badge/Badge';
import { Alert, AlertTitle, AlertContent} from '@/components/Alert/Alert';
import AlertDocumentation from '@/components/Alert/AlertDocumentation';
import TOC from '@/components/TOC/TOC';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

export const metadata: Metadata = {
    title: "Alert",
    description: "A prominent message that informs users about important events or status changes.",
};

const AlertPage: React.FC = () => {

    const codeExample = `

        {/* Basic Alert */}
        <Alert className="p-4" type="info" title="This is an information alert" isDismissible>
        </Alert>

        {/* Alert with Title and Content */}
        <Alert className="p-4" type="success" isDismissible>
            <AlertTitle>This is a success alert</AlertTitle>
            <AlertContent>A little bit of a content here</AlertContent>
        </Alert>


        
    `;

    const tocItems = [
        { id: 'variants', label: 'Variants' },
        { id: 'info-alert', label: 'Info Alert' },
        { id: 'success-alert', label: 'Success Alert' },
        { id: 'warning-alert', label: 'Warning Alert' },
        { id: 'error-alert', label: 'Error Alert' },
        { id: 'properties', label: 'Properties' },
        { id: 'best-practices', label: 'Best Practices' },
    ];

    return (
        <Layout>
            <div className="flex">
                <div className="w-4/5 pr-2">
                    <Badge text="Components" />
                    {/* Header Content */}
                    <section className="mb-5">
                        <div className="flex flex-col">
                            <h1 className="text-2xl md:text-3xl font-semibold font-sans text-gray-900 dark:text-gray-50 mb-3 md:mb-4">Alert</h1>
                            <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                                A prominent message that informs users about important events or status changes.
                            </p>
                        </div>
                    </section>

                    {/* Alert Variants Section */}
                    <section id="variants" className="mb-5 scroll-mt-20">
                        <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Variants</h2>
                        <Tabs>
                            <Tab label="Preview">
                                <div className="relative w-full overflow-hidden rounded-lg mt-4 bg-gradient-to-r from-zinc-700/90 to-gray-800 dark:from-zinc-400/90 dark:to-gray-600">
                                    <div className="space-y-4 justify-around p-6">
                                        <div id="info-alert" className="scroll-mt-20">
                                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-50 dark:text-gray-900 mb-2 md:mb-3">
                                                Info Alert
                                            </h3>
                                            <Alert className="p-4" type="info" title="This is an information alert" isDismissible>
                                            </Alert>
                                        </div>
                                        <div id="success-alert" className="scroll-mt-20">
                                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-50 dark:text-gray-900 mb-2 md:mb-3">Success Alert</h3>
                                            <Alert className="p-4" type="success" isDismissible>
                                                <AlertTitle>This is a success alert</AlertTitle>
                                                <AlertContent>A little bit of a content here</AlertContent>
                                            </Alert>
                                        </div>
                                        <div id="warning-alert" className="scroll-mt-20">
                                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-50 dark:text-gray-900 mb-2 md:mb-3">Warning Alert</h3>
                                            <Alert className="p-4" type="warning" isDismissible>
                                                <AlertTitle>This is a warning alert</AlertTitle>
                                            </Alert>
                                        </div>
                                        <div id="error-alert" className="scroll-mt-20">
                                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-50 dark:text-gray-900 mb-2 md:mb-3">Error Alert</h3>
                                            <Alert className="p-4" type="error" isDismissible>
                                                <AlertTitle>This is an error alert</AlertTitle>
                                            </Alert>
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
                    <AlertDocumentation/>
                </div>
                {/* Table of Contents */}
                <TOC items={tocItems} />
            </div>
        </Layout>
    );
};

AlertPage.displayName = "AlertPage";
export default AlertPage;
