// pages/foundations/content.tsx
import React from 'react';
import { Metadata } from 'next';

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Content Standard',
        description: 'Understand the content standards that guide the creation and presentation of information within AstraUI.',
    };
}

const AstraContentStandardPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Foundations" />
            <h1 className="text-2xl md:text-4xl font-medium mb-4 text-gray-900 dark:text-gray-50">Content standard</h1>
        </Layout>
    );
};

export default AstraContentStandardPage;
