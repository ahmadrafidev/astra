import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Dock",
    description: "A component for displaying modal dialogs.",
};

const DockPageClient = dynamic(() => import('@/components/Dock/DockClient'), { ssr: false });

const DockPage: React.FC = () => {
    return <DockPageClient />;
};

DockPage.displayName="DockPage"
export default DockPage;
