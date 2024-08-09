'use client';

import React from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import SkeletonLoader from './SkeletonLoader';
import SkeletonLoaderDocumentation from './SkeletonLoaderDocumentation';

const SkeletonLoaderPageClient: React.FC = () => {
    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">SkeletonLoader</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A placeholder animation displayed while content is loading.
                </p>
            </div>
            <div className="space-y-6">
                <SkeletonLoader width="100%" shape="circle" height="2rem" className="my-2" animation="pulse"/>
                <SkeletonLoader width="75%" shape="rectangle" height="1.5rem" className="my-2" animation="wave" />
                <SkeletonLoader width="50%" height="1rem" className="my-2" animation="pulse"/>
                <SkeletonLoader width={200} height={20} gap={10} animation="wave" shape="text" />
            </div>
            <SkeletonLoaderDocumentation />
        </Layout>
    );
};

SkeletonLoaderPageClient.displayName = "SkeletonLoaderPageClient";
export default SkeletonLoaderPageClient;
