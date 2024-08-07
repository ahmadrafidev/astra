import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SkeletonLoader",
    description: "A visual indication of loading content.",
};

const SkeletonLoaderPageClient = dynamic(() => import('@/components/SkeletonLoader/SkeletonLoaderPageClient'), { ssr: false });

const SkeletonLoaderPage: React.FC = () => {
    return <SkeletonLoaderPageClient />;
};

export default SkeletonLoaderPage;
