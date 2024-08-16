import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Collapsible",
    description: "An expandable section that can be toggled to show or hide additional content.",
};

const CollapsibleClient = dynamic(() => import('@/components/Collapse/CollapsibleClient'), { ssr: false });

const CollapsiblePage: React.FC = () => {
    return <CollapsibleClient />;
};

CollapsiblePage.displayName="CollapsiblePage"
export default CollapsiblePage;
