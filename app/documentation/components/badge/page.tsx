// pages/documentation/components/badge.tsx
'use client';

import React from 'react';
import Layout from '../../../../components/Layout/Layout';
import Badge from '../../../../components/Badge/Badge';

const BadgePage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Component" />
            <h1 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Badge Component</h1>
        </Layout>
    );
};

export default BadgePage;
