import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Pagination",
    description: "Pagination allows users to navigate through large sets of data in a structured manner.",
};

const PaginationPageClient = dynamic(() => import('@/components/Pagination/PaginationPageClient'), { ssr: false });

const PaginationPage: React.FC = () => {
    return <PaginationPageClient />;
};

PaginationPage.displayName = "PaginationPage"
export default PaginationPage;
