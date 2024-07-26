'use client';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export interface SnippetProps {
    language: string;
    code: string;
    className?: string;
}

const Snippet: React.FC<SnippetProps> = ({ language, code, className }) => {
    return (
        <div className="rounded-lg border bg-gray-50 p-4 dark:bg-gray-800">
            <SyntaxHighlighter language={language} style={darcula}>
            {code}
            </SyntaxHighlighter>
        </div>
    );
};

Snippet.displayName = "Snippet";
export default Snippet;
