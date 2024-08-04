import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "TextArea",
    description: "Text areas are used for larger text inputs.",
};

const TextAreaPageClient = dynamic(() => import('@/components/TextArea/TextAreaPageClient'), { ssr: false });

const TextAreaPage: React.FC = () => {
    return <TextAreaPageClient />;
};

TextAreaPage.displayName="TextAreaPage";
export default TextAreaPage;
