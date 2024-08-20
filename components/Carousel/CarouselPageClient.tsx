'use client';

import React from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import TOC from '@/components/TOC/TOC';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Carousel from './Carousel';
import CarouselDocumentation from './CarouselDocumentation';

const images = [
    '/images/horse-1.jpg',
    '/images/horse-2.jpg',
    '/images/horse-3.jpg'
];

const CarouselPageClient: React.FC = () => {
    const tocItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'usage', label: 'Usage' },
        { id: 'properties', label: 'Properties' },
        { id: 'best-practices', label: 'Best Practices' },
    ];

    const codeExample = `
    <Carousel
        className="max-w-md md:max-w-lg mx-auto"
        images={images}
        width={300}
        height={300}
        autoPlay={true}
        autoPlayInterval={5000}
        showDots={true}
        showArrows={true}
    />
    `;

    return (
        <Layout>
            <div className="flex">
                <div className="w-4/5 pr-2">
                    <Badge text="Components" />
                    <div id="overview" className="flex flex-col mb-5 scroll-mt-16">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Carousel</h1>
                        <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                            A slideshow-like component for cycling through a series of content items.
                        </p>
                    </div>

                    {/* Usage Section */}
                    <section id="usage" className="scroll-mt-20">
                        <Tabs>
                            <Tab label="Preview">
                                <div className="relative w-full overflow-hidden mt-4 rounded-lg bg-zinc-100 dark:bg-zinc-950 shadow border border-slate-300 dark:border-slate-800">
                                    <div className="p-6 space-y-4 flex flex-col justify-center items-center">
                                        <Carousel
                                            className="max-w-md md:max-w-lg mx-auto"
                                            images={images}
                                            width={300}
                                            height={300}
                                            autoPlay={true}
                                            autoPlayInterval={5000}
                                            showDots={true}
                                            showArrows={true}
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

                    <CarouselDocumentation />
                </div>
                <TOC items={tocItems} />
            </div>
        </Layout>
    );
};

CarouselPageClient.displayName = "CarouselPageClient";
export default CarouselPageClient;
