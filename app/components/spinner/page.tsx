// app/components/spinner/page.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Spinner",
    description: "Spinners indicate loading or ongoing processes.",
};

const SpinnerPageClient = dynamic(() => import('../../../components/Spinner/SpinnerPageClient'), { ssr: false });

const SpinnerPage: React.FC = () => {
    return <SpinnerPageClient />;
};

SpinnerPage.displayName="SpinnerPage";
export default SpinnerPage;
