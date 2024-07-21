// pages/foundation/about.tsx
import React from 'react';
import { Metadata } from 'next';

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Accessibility',
        description: 'Explore the accessibility standards that AstraUI adheres to, ensuring inclusivity for all users.',
    };
}

const AstraA11yPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Foundations" />
            <h1 className="text-2xl md:text-4xl font-medium mb-4 text-gray-900 dark:text-gray-50">Accessibility (A11y)</h1>
        </Layout>
    );
};

export default AstraA11yPage;
