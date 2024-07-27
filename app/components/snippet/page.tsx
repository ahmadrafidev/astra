// app/components/snippet/page.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Snippet",
    description: "Snippets display code examples with syntax highlighting.",
};

const SnippetPageClient = dynamic(() => import('../../../components/Snippet/SnippetPageClient'), { ssr: false });

const SnippetPage: React.FC = () => {
    return <SnippetPageClient />;
};

SnippetPage.displayName="SnippetPage";
export default SnippetPage;
