'use client';

import React, { useState } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import TOC from '@/components/TOC/TOC';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import AlertDialog from './AlertDialog';
import AlertDialogDocumentation from './AlertDialogDocumentation';

const codeExample = `
        <AlertDialog 
            open={isOpen} 
            onClose={handleClose}
            onConfirm={handleConfirm}
            confirmText="Continue"
            closeText="Cancel"
        >
            <h3>Confirm Action</h3>
            <p>This action is irreversible. Are you sure you want to proceed?</p>
        </AlertDialog>
    `;

const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'properties', label: 'Properties' },
    { id: 'best-practices', label: 'Best Practices' },
];

const AlertDialogPageClient: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const handleConfirm = () => {
        console.log('Confirmed!');
    };

    return (
        <Layout>
            <div className="flex">
                <div className="w-4/5 pr-2">
                    <Badge text="Components" />
                    <section id="overview" className="mb-5 scroll-mt-16">
                        <div className="flex flex-col">
                            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-50 mb-3 md:mb-4">Alert Dialog</h1>
                            <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                                A pop-up window that displays important information and requires user action.
                            </p>
                        </div>
                    </section>
                    <section id="usage" className="mb-5 scroll-mt-20">
                        <Tabs>
                            <Tab label="Preview">
                                <div className="relative w-full h-64 overflow-hidden mt-4 rounded-lg bg-zinc-900 dark:bg-zinc-50 flex justify-center items-center">
                                    <button className="px-4 py-2 bg-gray-100 dark:bg-gray-900 text-black dark:text-white rounded-lg shadow-sm hover:bg-gray-200 dark:hover:bg-gray-800" onClick={handleOpen}>
                                        Show Dialog
                                    </button>
                                    <AlertDialog 
                                        open={isOpen} 
                                        onClose={handleClose}
                                        onConfirm={handleConfirm}
                                        confirmText="Continue"
                                        closeText="Cancel"
                                    >
                                        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-50">Confirm Action</h3>
                                        <p className="text-gray-700 dark:text-gray-300">This action is irreversible. Are you sure you want to proceed?</p>
                                    </AlertDialog>
                                </div>
                            </Tab>
                            <Tab label="Code">
                                <div
                                    className="relative rounded-lg bg-gray-900 dark:bg-gray-800/90 mt-4"
                                    role="region"
                                    aria-label="Code Snippet in tsx"
                                >
                                    <div className="flex justify-between items-center px-4 py-2 border-b border-gray-800">
                                        <span className="text-sm font-medium text-gray-100">
                                            tsx
                                        </span>
                                    </div>
                                    <div className="overflow-auto rounded-lg border border-gray-800">
                                        <SyntaxHighlighter
                                            language="tsx"
                                            style={materialLight}
                                            showLineNumbers={false}
                                            wrapLongLines={true}
                                            customStyle={{
                                                margin: 1.5, 
                                                borderRadius: '0.5rem 0.5rem 0.5rem 0.5rem',
                                                fontSize: '13px',       
                                                lineHeight: '1.25',      
                                                padding: '10px',        
                                            }}
                                        >
                                            {codeExample}
                                        </SyntaxHighlighter>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </section>
                    <AlertDialogDocumentation />
                </div>
                <TOC items={tocItems} />
            </div>
        </Layout>
    );
};

AlertDialogPageClient.displayName = "AlertDialogPageClient";
export default AlertDialogPageClient;
