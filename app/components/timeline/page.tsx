import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Timeline",
    description: "A component to display events or milestones in chronological order with various layouts.",
};

const TimelineClient = dynamic(() => import('@/components/Timeline/TimelineClient'), { ssr: false });

const TimelinePage: React.FC = () => {
    return <TimelineClient />;
};

TimelinePage.displayName = "TimelinePage";
export default TimelinePage;
