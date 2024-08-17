'use client';

import React from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { ShoppingCart, Star, Heart } from 'lucide-react';

import TOC from '@/components/TOC/TOC';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import { List, ListItem } from './List';
import ListDocumentation from './ListDocumentation';

const ListPageClient: React.FC = () => {
    const tocItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'variants', label: 'Variants' },
        { id: 'properties', label: 'Properties' },
        { id: 'best-practices', label: 'Best Practices' },
    ];

    const codeExample = `
    <List 
        items={[ 
            { content: 'Apple' }, 
            { content: 'Banana' }, 
            { content: 'Cherry' }
        ]} 
        variant="unordered" 
        className="text-gray-900 dark:text-gray-50"
    />
    `;

    return (
        <Layout>
            <div className="flex">
                <div className="w-4/5 pr-2">
                    <Badge text="Components" />
                    <div id="overview" className="flex flex-col mb-5 scroll-mt-16">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">List</h1>
                        <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                            A component for displaying multiple items with customizable styling and optional item icons.
                        </p>
                    </div>

                    {/* Variants Section */}
                    <section id="variants" className="scroll-mt-20">
                        <Tabs>
                            <Tab label="Preview">
                                <div className="relative w-full overflow-hidden mt-4 rounded-lg justify-center items-center bg-zinc-100 dark:bg-zinc-950 shadow border border-slate-300 dark:border-slate-800">
                                    <div className="space-y-4 flex flex-col justify-around p-5">
                                        <div>
                                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                                                Unordered List
                                            </h3>
                                            <List 
                                                items={[ 
                                                    { content: 'Apple' }, 
                                                    { content: 'Banana' }, 
                                                    { content: 'Cherry' }
                                                ]} 
                                                variant="unordered" 
                                                className="text-gray-900 dark:text-gray-50"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                                                Unordered List with Icons
                                            </h3>
                                            <List
                                                items={[
                                                { content: 'Shopping List', icon: <ShoppingCart /> },
                                                { content: 'Favorites', icon: <Star /> },
                                                { content: 'Wishlist', icon: <Heart /> },
                                                ]}
                                                variant="unordered" 
                                                iconClassName="text-blue-600 dark:text-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                                                Ordered List
                                            </h3>  
                                            <List variant="ordered" className="text-gray-900 dark:text-gray-50">
                                                <ListItem>First item</ListItem>
                                                <ListItem>Second item</ListItem>
                                                <ListItem>Third item</ListItem>
                                            </List>
                                        </div>
                                        <div>
                                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                                                Ordered List with Icons
                                            </h3>  
                                            <List variant="ordered" className="text-blue-600 dark:text-blue-500">
                                                <ListItem icon={<ShoppingCart />}>Shopping List</ListItem>
                                                <ListItem icon={<Star />}>Favorites</ListItem>
                                                <ListItem icon={<Heart />}>Wishlist</ListItem>
                                            </List>
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
                    <ListDocumentation />
                </div>
                <TOC items={tocItems} />
            </div>
        </Layout>
    );
};

ListPageClient.displayName = "ListPageClient";
export default ListPageClient;
