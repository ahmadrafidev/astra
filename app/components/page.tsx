import React from 'react';
import type { Metadata } from 'next';

import Layout from '@/components/Layout/Layout';
import Badge from '@/components/Badge/Badge';
import { Tabs, Tab } from '@/components/Tabs/Tabs';
import AlphabeticalList from '@/components/AlphabeticalList/AlphabeticalList';
import CategoricalList from '@/components/CategoricalList/CategoricalList';
import AstraComponent from '@/components/AstraComponent/AstraComponent';

export const metadata: Metadata = {
    title: 'Component',
    description: 'A comprehensive collection of reusable UI components for building consistent and efficient user interfaces. Includes detailed documentation, usage guidelines, and customization options for each component.',
};

const AstraComponentPage: React.FC = async () => {
    const initialActiveTab = 'Alphabetical';

    return (
        <Layout>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50">Web Components</h1>
            <div className="my-12">
                <AstraComponent initialActiveTab={initialActiveTab} />
            </div>
        </Layout>
    );
};

AstraComponentPage.displayName = "AstraComponentPage"
export default AstraComponentPage;
