// pages/documentation/components/checkbox.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Checkbox",
    description: "A component for selecting multiple options.",
};

const CheckboxPageClient = dynamic(() => import(
    '@/components/Checkbox/CheckboxPageClient'), 
    { ssr: false }
);

const CheckboxPage: React.FC = () => {
    return <CheckboxPageClient />;
};

CheckboxPage.displayName="CheckboxPage"
export default CheckboxPage;
