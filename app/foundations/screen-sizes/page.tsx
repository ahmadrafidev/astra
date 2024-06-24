'use client';

import React from 'react';

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';

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
