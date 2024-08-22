import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Divider",
    description: "A simple line to separate content sections",
};

const DividerClient = dynamic(() => import('@/components/Divider/DividerClient'), { ssr: false });

const DividerPage: React.FC = () => {
    return <DividerClient />;
};

DividerPage.displayName = "DividerPage";
export default DividerPage;
