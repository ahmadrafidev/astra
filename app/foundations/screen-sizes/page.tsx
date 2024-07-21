// pages/foundations/screen-sizes.tsx
import React from 'react';
import { Metadata } from 'next';

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Screen Sizes',
        description: 'Learn about the responsive design principles and screen size guidelines in AstraUI for Web, Android, and iOS.',
    };
}

const AstraScreenSizesPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Foundations" />
            <h1 className="text-2xl md:text-4xl font-medium mb-4 text-gray-900 dark:text-gray-50">Screen sizes</h1>
            <div className="mb-8">
                <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Web</h2>
                <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Android</h2>
                <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">iOS</h2>
            </div>
        </Layout>
    );
};

export default AstraScreenSizesPage;
