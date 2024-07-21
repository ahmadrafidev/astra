// pages/foundations/data-visualization.tsx
import React from 'react';
import { Metadata } from 'next';

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Data Visualization',
        description: 'Explore the data visualization techniques and standards used in AstraUI.',
    };
}

const AstraDataVisualizationPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Foundations" />
            <h1 className="text-2xl md:text-4xl font-medium mb-4 text-gray-900 dark:text-gray-50">Data visualization</h1>
        </Layout>
    );
};

export default AstraDataVisualizationPage;
