import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Radio",
    description: "A component for selecting one option from a set of radio buttons.",
};

const RadioPageClient = dynamic(() => import('@/components/Radio/RadioPageClient'), { ssr: false });

const RadioPage: React.FC = () => {
    return <RadioPageClient />;
};

RadioPage.displayName="RadioPage"
export default RadioPage;
