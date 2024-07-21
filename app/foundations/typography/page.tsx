// pages/foundations/typography.tsx
import React from 'react';
import { Metadata } from 'next';

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Typography',
        description: 'Understand the typographic styles and standards used in AstraUI to ensure readability and accessibility.',
    };
}

const AstraTypographyPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Foundations" />
            <h1 className="text-2xl md:text-4xl font-medium mb-4 text-gray-900 dark:text-gray-50">Typography</h1>
        </Layout>
    );
};

export default AstraTypographyPage;
