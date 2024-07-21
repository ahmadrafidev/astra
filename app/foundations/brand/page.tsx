// pages/foundations/brand.tsx
import React from 'react';
import { Metadata } from 'next';

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Brand Expression',
        description: 'Learn how AstraUI maintains brand consistency across various components and designs.',
    };
}

const AstraBrandPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Foundations" />
            <h1 className="text-2xl md:text-4xl font-medium mb-4 text-gray-900 dark:text-gray-50">Brand expression</h1>
        </Layout>
    );
};

export default AstraBrandPage;
