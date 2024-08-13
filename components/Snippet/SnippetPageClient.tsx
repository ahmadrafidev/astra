'use client';

import React from 'react';
import SnippetDocumentation from './SnippetDocumentation';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Snippet from './Snippet';

const SnippetPageClient: React.FC = () => {
    const codeString = `import React from 'react';\n\nconst App = () => <h1>Hello, world!</h1>;\n\nexport default App;`;

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Snippet</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A reusable block of code or text for syntax highlighting.
                </p>
            </div>
            <section className="space-y-4 flex flex-col gap-4">
                <div>
                    <h2 className="text-lg md:text-xl font-medium mb-4 text-gray-900 dark:text-gray-50">Light Mode</h2>
                    <Snippet 
                        maxHeight="400px" 
                        language="javascript" 
                        code={codeString} 
                        theme="light"
                    />
                </div>  
                <div>
                    <h2 className="text-lg md:text-xl font-medium mb-4 text-gray-900 dark:text-gray-50">Dark Mode</h2>
                    <Snippet
                        language="javascript"
                        code={codeString}
                        showLineNumbers
                        wrapLongLines
                        maxHeight="200px"
                        theme="dark"
                    />
                </div>        
            </section>
            <SnippetDocumentation />
        </Layout>
    );
};

SnippetPageClient.displayName = "SnippetPageClient";
export default SnippetPageClient;
