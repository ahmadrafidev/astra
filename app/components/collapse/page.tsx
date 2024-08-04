import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Collapse",
    description: "A component for displaying collapsible sections.",
};

const CollapsePageClient = dynamic(() => import('@/components/Collapse/CollapsePageClient'), { ssr: false });

const CollapsePage: React.FC = () => {
    return <CollapsePageClient />;
};

CollapsePage.displayName="CollapsePage"
export default CollapsePage;
