// pages/documentation/components/skeleton-loader.tsx
'use client';

import React from 'react';
import Layout from '../../../../components/Layout/Layout';

const SkeletonLoaderPage: React.FC = () => {
    return (
        <Layout>
            <h1 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">SkeletonLoader Component</h1>
        </Layout>
    );
};

export default SkeletonLoaderPage;
