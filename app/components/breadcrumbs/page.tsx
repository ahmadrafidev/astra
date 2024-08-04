import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Breadcrumbs",
    description: "Breadcrumbs are used to display the current location within a hierarchical structure.",
};

const BreadcrumbsPageClient = dynamic(() => import('@/components/Breadcrumbs/BreadcrumbsPageClient'), { ssr: false });

const BreadcrumbsPage: React.FC = () => {
    return <BreadcrumbsPageClient />;
};

BreadcrumbsPage.displayName="BreadcrumbsPage";
export default BreadcrumbsPage;
