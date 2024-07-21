// pages/foundations/color.tsx
import React from 'react';
import { Metadata } from 'next';

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Color',
        description: 'Explore the color palette used in AstraUI, including primary, secondary, and neutral colors.',
    };
}

const AstraColorPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Foundations" />
            <h1 className="text-2xl md:text-4xl font-medium mb-4 text-gray-900 dark:text-gray-50">Color</h1>
        </Layout>
    );
};

export default AstraColorPage;
