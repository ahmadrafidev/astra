import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SearchBar",
    description: "An input field for entering search queries to find specific content.",
};

const SearchBarPageClient = dynamic(() => import('@/components/SearchBar/SearchBarPageClient'), { ssr: false });

const SearchBarPage: React.FC = () => {
    return <SearchBarPageClient />;
};

SearchBarPage.displayName="SearchBarPage"
export default SearchBarPage;
