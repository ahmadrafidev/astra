import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Status Dot",
    description: "Status dots are used to indicate the current status of an item or user.",
};

const StatusDotPageClient = dynamic(() => import('@/components/StatusDot/StatusDotPageClient'), { ssr: false });

const StatusDotPage: React.FC = () => {
    return <StatusDotPageClient />;
};

StatusDotPage.displayName="StatusDotPage"
export default StatusDotPage;
