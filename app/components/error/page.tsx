// pages/documentation/components/error.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Error",
    description: "A component for displaying error messages.",
};

const ErrorPageClient = dynamic(() => import('../../../components/Error/ErrorPageClient'), { ssr: false });

const ErrorPage: React.FC = () => {
    return <ErrorPageClient />;
};

ErrorPage.displayName="ErrorPage"
export default ErrorPage;
