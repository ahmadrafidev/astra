// app/components/page.tsx
import React from 'react';
import type { Metadata } from 'next';

import Layout from '../../components/Layout/Layout';
import Badge from '../../components/Badge/Badge';
import { Tabs, Tab } from '../../components/Tabs/Tabs';
import AlphabeticalList from '../../components/AlphabeticalList/AlphabeticalList';
import CategoricalList from '../../components/CategoricalList/CategoricalList';

export const metadata: Metadata = {
    title: 'Component',
    description: 'The building blocks of modern UI',
};

const AstraComponentPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Components" />
            <h1 className="text-2xl md:text-4xl font-medium mb-3 text-gray-900 dark:text-gray-50">Components</h1>
            <div className="mb-8">
                <p className="mb-4 text-md text-gray-800 dark:text-white leading-loose text-justify">
                    The components section offers a comprehensive overview of every UI component in AstraUI.
                    Each component is designed to be customizable, accessible, and easy to integrate into projects across web, Android, and iOS ecosystems.
                    Explore the documentation for detailed information on features, usage, and customization options.
                </p>
                <div className="my-8">
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
