'use client';

import React from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import TOC from '@/components/TOC/TOC';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Card from './Card';
import CardDocumentation from './CardDocumentation';

const CardPageClient: React.FC = () => {
    const tocItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'usage', label: 'Usage' },
        { id: 'properties', label: 'Properties' },
        { id: 'best-practices', label: 'Best Practices' },
    ];

    const codeExample = `
<Card
    title="Card Title 1"
    description="This is a description of the card content."
    imageSrc="/icons/twitter.webp"
    imageWidth={300}
    imageHeight={200}
/>
<Card
    title="Card Title 2"
    description="This is another description of the card content."
/>
<Card
    title="Card Title 3"
    description="This card has additional content."
    variant="interactive"
    titleElement="h2"
>
    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Action</button>
</Card>
<Card
    title="My Card"
    description="This is a description of my card."
    imageSrc="/icons/twitter.webp"
    imageAlt="Descriptive alt text"
    variant="hover"
    titleElement="h2"
    onClick={() => alert('button clicked')}
>
    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Try Click Me</button>
</Card>
    `;

    return (
        <Layout>
            <div className="flex">
                <div className="w-4/5 pr-2">
                    <Badge text="Components" />
                    <div id="overview" className="flex flex-col mb-5 scroll-mt-16">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Card</h1>
                        <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                            A flexible container for displaying related content and actions in a single unit.
                        </p>
                    </div>

                    {/* Usage Section */}
                    <section id="usage" className="scroll-mt-20">
                        <Tabs>
                            <Tab label="Preview">
                                <div className="relative w-full overflow-hidden mt-4 rounded-lg bg-zinc-100 dark:bg-zinc-950 shadow border border-slate-300 dark:border-slate-800">
                                    <div className="p-6 space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <Card
                                                title="White Horse"
                                                description="White house running in the farm."
                                                imageSrc="/images/horse-2.jpg"
                                                imageWidth={300}
                                                imageHeight={200}
                                            />
                                            <Card
                                                title="Card Title 2"
                                                description="This is another description of the card content."
                                            />
                                            <Card
                                                title="Card Title 3"
                                                description="This card has additional content."
                                                variant="interactive"
                                                titleElement="h2"
                                            >
                                                <button className="mt-4 px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-black rounded">Action</button>
                                            </Card>
                                            <Card
                                                title="White Horse Again"
                                                description="White horse in the backyard."
                                                imageSrc="/images/horse-3.jpg"
                                                imageAlt="Descriptive alt text"
                                                variant="hover"
                                                titleElement="h2"
                                                onClick={() => alert('neigh')}
                                            >
                                                <button className="mt-4 px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-black rounded">Try Click Me</button>
                                            </Card>
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

                    <CardDocumentation />
                </div>
                <TOC items={tocItems} />
            </div>
        </Layout>
    );
};

CardPageClient.displayName = "CardPageClient";
export default CardPageClient;
