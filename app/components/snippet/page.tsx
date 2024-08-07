import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Snippet",
    description: "A reusable block of code or text for syntax highlighting.",
};

const SnippetPageClient = dynamic(() => import('@/components/Snippet/SnippetPageClient'), { ssr: false });

const SnippetPage: React.FC = () => {
    return <SnippetPageClient />;
};

SnippetPage.displayName="SnippetPage";
export default SnippetPage;
