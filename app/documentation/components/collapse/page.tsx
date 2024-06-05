// pages/documentation/components/collapse.tsx
'use client';

import React from 'react';
import Layout from '../../../../components/Layout/Layout';
import Badge from '../../../../components/Badge/Badge';

const CollapsePage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Component" />
            <h1 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Collapse Component</h1>
        </Layout>
    );
};

export default CollapsePage;
