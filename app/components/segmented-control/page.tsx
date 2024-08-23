import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Segmented Control",
    description: "A segmented control component that allows users to select one or multiple options from a set of segments.",
};

const SegmentedControlClient = dynamic(() => import('@/components/SegmentedControl/SegmentedControlClient'), { ssr: false });

const SegmentedControlPage: React.FC = () => {
    return <SegmentedControlClient />;
};

SegmentedControlPage.displayName = "SegmentedControlPage";
export default SegmentedControlPage;
