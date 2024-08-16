'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import TOC from '@/components/TOC/TOC';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Rating from './Rating';
import RatingDocumentation from './RatingDocumentation';

const RatingPageClient: React.FC = () => {
    const [currentRating, setCurrentRating] = useState<number | null>(0);

    const handleRate = (rating: number | null) => {
        setCurrentRating(rating);
    };

    const tocItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'usage', label: 'Usage' },
        { id: 'properties', label: 'Properties' },
        { id: 'best-practices', label: 'Best Practices' },
    ];

    const codeExample = `
    {/* Base Model */}
    <Rating 
        onRate={handleRate}
        maxRating={5} 
        defaultRating={3}
        size="lg"
        allowClear={true}
    />

    {/* Custom Icon Model */}
    <Rating 
        onRate={handleRate}
        maxRating={5} 
        defaultRating={3}
        size="lg"
        activeColor="text-red-500"
        inactiveColor="text-gray-200"
        allowClear={true}
        icon={<X />}
    />
    `;

    return (
        <Layout>
            <div className="flex">
                <div className="w-4/5 pr-2">
                    <Badge text="Components" />
                    <div id="overview" className="flex flex-col mb-5 scroll-mt-16">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Rating</h1>
                        <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                            A component for users to evaluate or score an item on a predefined scale.
                        </p>
                    </div>

                    {/* Usage Section */}
                    <section id="usage" className="scroll-mt-20">
                        <Tabs>
                            <Tab label="Preview">
                                <div className="relative w-full overflow-hidden mt-4 rounded-lg bg-zinc-100 dark:bg-zinc-950 shadow border border-slate-300 dark:border-slate-800 flex justify-center items-center">
                                    <div className="space-y-8 flex flex-col justify-around p-6 text-center">
                                        <div>
                                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                                                Base Model
                                            </h3>
                                            <Rating 
                                                onRate={handleRate}
                                                maxRating={5} 
                                                defaultRating={3}
                                                size="lg"
                                                allowClear={true}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                                                Read Only Model
                                            </h3>
                                            <Rating 
                                                onRate={handleRate}
                                                maxRating={5} 
                                                defaultRating={3}
                                                size="lg"
                                                activeColor="text-blue-500"
                                                inactiveColor="text-gray-200"
                                                allowClear={true}
                                                readOnly={true}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                                                Custom Icon Model
                                            </h3>
                                            <Rating 
                                                onRate={handleRate}
                                                maxRating={5} 
                                                defaultRating={3}
                                                size="lg"
                                                activeColor="text-red-500"
                                                inactiveColor="text-gray-200"
                                                allowClear={true}
                                                icon={<X />}
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
                    <RatingDocumentation />
                </div>
                <TOC items={tocItems} />
            </div>
        </Layout>
    );
};

RatingPageClient.displayName = "RatingPageClient";
export default RatingPageClient;
