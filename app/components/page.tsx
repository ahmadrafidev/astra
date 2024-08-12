import React from 'react';
import type { Metadata } from 'next';

import Layout from '@/components/Layout/Layout';
import Badge from '@/components/Badge/Badge';
import { Tabs, Tab } from '@/components/Tabs/Tabs';
import AlphabeticalList from '@/components/AlphabeticalList/AlphabeticalList';
import CategoricalList from '@/components/CategoricalList/CategoricalList';

export const metadata: Metadata = {
    title: 'Component Library',
    description: 'A comprehensive collection of reusable UI components for building consistent and efficient user interfaces. Includes detailed documentation, usage guidelines, and customization options for each component.',
};

const AstraComponentPage: React.FC = () => {
    return (
        <Layout>
            <Badge ariaLabel="Components Title Badge" text="Components" />
            <h1 className="text-2xl md:text-4xl font-medium mb-3 text-gray-900 dark:text-gray-50">Components</h1>
            <div className="mb-8">
                <p className="text-sm md:text-base mb-4 text-gray-700 dark:text-gray-50 leading-loose text-justify">
                    The Components section provides an in-depth look at each user interface component in AstraUI. 
                    Engieered for customization, accessibility, and seamless use, these components are designed to elevate your projects across web, Android, and iOS platforms.
                    Explore the documentation for detailed insights on features, usage, and customization options.
                </p>
                <div className="my-2 md:my-4">
                    <Tabs>
                        <Tab label="Alphabetical">
                            <AlphabeticalList />
                        </Tab>
                        <Tab label="Categorical">
                            <CategoricalList />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </Layout>
    );
};

AstraComponentPage.displayName = "AstraComponentPage"
export default AstraComponentPage;
