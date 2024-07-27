// pages/documentation/components/radiobutton.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "RadioButton",
    description: "A component for selecting one option from a set of radio buttons.",
};

const RadioButtonPageClient = dynamic(() => import('../../../components/RadioButton/RadioButtonPageClient'), { ssr: false });

const RadioButtonPage: React.FC = () => {
    return <RadioButtonPageClient />;
};

RadioButtonPage.displayName="RadioButtonPage"
export default RadioButtonPage;
