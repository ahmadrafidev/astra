// app/components/progress-tracker/page.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "ProgressTracker",
    description: "A component for tracking progress through a series of steps.",
};

const ProgressTrackerPageClient = dynamic(() => import('../../../components/ProgressTracker/ProgressTrackerPageClient'), { ssr: false });

const ProgressTrackerPage: React.FC = () => {
    return <ProgressTrackerPageClient />;
};

ProgressTrackerPage.displayName="ProgressTrackerPage"
export default ProgressTrackerPage;
