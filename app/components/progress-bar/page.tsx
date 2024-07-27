// pages/documentation/components/progressbar.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "ProgressBar",
    description: "A component for displaying progress.",
};

const ProgressBarPageClient = dynamic(() => import('../../../components/ProgressBar/ProgressBarPageClient'), { ssr: false });

const ProgressBarPage: React.FC = () => {
    return <ProgressBarPageClient />;
};

ProgressBarPage.displayName="ProgressBarPage"
export default ProgressBarPage;
