import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Dropdown",
    description: "A component for selecting an option from a list.",
};

const DropdownPageClient = dynamic(() => import('@/components/Dropdown/DropdownPageClient'), { ssr: false });

const DropdownPage: React.FC = () => {
    return <DropdownPageClient />;
};

DropdownPage.displayName="DropdownPage"
export default DropdownPage;
