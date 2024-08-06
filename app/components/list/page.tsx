import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "List",
    description: "A component for displaying multiple items with customizable styling and optional item icons.",
};

const ListPageClient = dynamic(() => import('@/components/List/ListPageClient'), { ssr: false });

const ListPage: React.FC = () => {
    return <ListPageClient />;
};

ListPage.displayName="ListPage"
export default ListPage;
