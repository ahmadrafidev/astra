import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Popover",
    description: "A popover component that provides additional content or information when triggered.",
};

const PopoverClient = dynamic(() => import('@/components/Popover/PopoverClient'), { ssr: false });

const PopoverPage: React.FC = () => {
    return <PopoverClient />;
};

PopoverPage.displayName = "PopoverPage";
export default PopoverPage;
