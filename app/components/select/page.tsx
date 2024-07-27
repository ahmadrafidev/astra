// app/components/select/page.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Select",
    description: "Select components allow users to choose from a list of options.",
};

const SelectPageClient = dynamic(() => import('../../../components/Select/SelectPageClient'), { ssr: false });

const SelectPage: React.FC = () => {
    return <SelectPageClient />;
};

SelectPage.displayName="SelectPage"
export default SelectPage;
