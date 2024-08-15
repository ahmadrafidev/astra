'use client';

import React, { useState } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import TOC from '@/components/TOC/TOC';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Error from './Error';
import ErrorDocumentation from './ErrorDocumentation';

const ErrorPageClient: React.FC = () => {
    const [showError, setShowError] = useState(true);

    const handleRetry = () => {
        setShowError(false);
        setTimeout(() => setShowError(true), 800);
    };

    const handleCancel = () => {
        setShowError(false);
        setTimeout(() => setShowError(true), 2000); // should be dismissed, timeout for display purpose only
    };

    const tocItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'usage', label: 'Usage' },
        { id: 'properties', label: 'Properties' },
        { id: 'best-practices', label: 'Best Practices' },
    ];

    const codeExample = `
        <Error 
            type="network"
            title="Network error"
            message="Please check your internet connection or try again"
            primaryAction={{
                label: "Retry",
                onClick: () => handleRetry()
            }}
            secondaryAction={{
                label: "Cancel",
                onClick: () => handleCancel()
            }}
        />
        <Error 
            type="payment"
            title="Payment error"
            message="Please check your payment information or try again"
            primaryAction={{
                label: "Retry",
                onClick: () => handleRetry()
            }}
            secondaryAction={{
                label: "Cancel",
                onClick: () => handleCancel()
            }}
        />
    `;

    return (
        <Layout>
            <div className="flex">
                <div className="w-4/5 pr-2">
                    <Badge text="Components" />
                    <div id="overview" className="flex flex-col mb-5 scroll-mt-16">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-900 dark:text-gray-50">Error</h1>
                        <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                            Displays error notifications or messages to users in a consistent manner.
                        </p>
                    </div>

                    {/* Usage Section */}
                    <section id="usage" className="scroll-mt-20">
                        <Tabs>
                            <Tab label="Preview">
                                <div className="flex relative w-full overflow-hidden mt-4 rounded-lg justify-center items-center bg-zinc-100 dark:bg-zinc-950 shadow border border-slate-300 dark:border-slate-800">
                                    {showError && (
                                        <div className="flex flex-col space-y-10 justify-around p-6">
                                            <Error 
                                                type="network"
                                                title="Network error"
                                                message="Please check your internet connection or try again"
                                                className="bg-red-50"
                                                primaryAction={{
                                                    label: "Retry",
                                                    onClick: () => handleRetry()
                                                }}
                                                secondaryAction={{
                                                    label: "Cancel",
                                                    onClick: () => handleCancel()
                                                }}
                                            />
                                            <Error 
                                                type="payment"
                                                title="Your card was declined!"
                                                message="Please check your payment information or try again"
                                                className="bg-sky-50"
                                                primaryAction={{
                                                    label: "Retry",
                                                    onClick: () => handleRetry()
                                                }}
                                                secondaryAction={{
                                                    label: "Cancel",
                                                    onClick: () => handleCancel()
                                                }}
                                            />
                                            <Error 
                                                type="authentication"
                                                title="Wrong credentials"
                                                message="Please check your email and password or try again"
                                                className="bg-gray-50"
                                                primaryAction={{
                                                    label: "Retry",
                                                    onClick: () => handleRetry()
                                                }}
                                                secondaryAction={{
                                                    label: "Cancel",
                                                    onClick: () => handleCancel()
                                                }}
                                            />
                                        </div>
                                    )}
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
                    <ErrorDocumentation/>
                </div>
                <TOC items={tocItems} />
            </div>
        </Layout>
    );
};

ErrorPageClient.displayName = "ErrorPageClient";
export default ErrorPageClient;
