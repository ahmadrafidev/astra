'use client';

import React, { useState, lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import TOC from '@/components/TOC/TOC';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Modal from './Modal';
import ModalDocumentation from './ModalDocumentation';

const ModalPageClient: React.FC = () => {
    const [modalState, setModalState] = useState({
        isOpen: false,
        type: 'default' as 'default' | 'form' | 'custom'
    });

    const handleOpen = (type: 'default' | 'form' | 'custom') => {
        setModalState({ isOpen: true, type });
    };

    const handleClose = () => setModalState(prev => ({ ...prev, isOpen: false }));

    const renderModalContent = () => {
        switch (modalState.type) {
            case 'default':
                return (
                    <>
                        <h2 id="modal-title" className="text-xl font-semibold text-gray-900 dark:text-gray-100">Default Modal</h2>
                        <p id="modal-description" className="mt-4 text-gray-700 dark:text-gray-300">
                            This is a simple modal with a title and some content.
                        </p>
                    </>
                );
            case 'form':
                return (
                    <>
                        <h2 id="modal-title" className="text-xl font-semibold text-gray-900 dark:text-gray-100">Form Modal</h2>
                        <form className="mt-4 space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800 dark:text-gray-100" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800 dark:text-gray-100" />
                            </div>
                            <button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600">
                                Submit
                            </button>
                        </form>
                    </>
                );
            case 'custom':
                return (
                    <div className="text-center">
                        <h2 id="modal-title" className="text-xl font-semibold text-gray-900 dark:text-gray-100">Custom Modal</h2>
                        <div className="mt-4 p-4 bg-green-100 dark:bg-green-800 rounded-lg">
                            <p className="text-green-700 dark:text-green-100">This is a custom styled modal with a green background.</p>
                        </div>
                        <button onClick={handleClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:bg-red-600 dark:hover:bg-red-700">
                            Close Modal
                        </button>
                    </div>
                );
        }
    };

    const tocItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'usage', label: 'Usage' },
        { id: 'properties', label: 'Properties' },
        { id: 'best-practices', label: 'Best Practices' },
    ];

    const codeExample = `
const [modalState, setModalState] = useState({
    isOpen: false,
    type: 'default' as 'default' | 'form' | 'custom'
});

const handleOpen = (type: 'default' | 'form' | 'custom') => {
    setModalState({ isOpen: true, type });
};

const handleClose = () => setModalState(prev => ({ ...prev, isOpen: false }));

<Modal 
    isOpen={modalState.isOpen} 
    onClose={handleClose} 
    className="max-w-lg"
>
    {renderModalContent()}
</Modal>
    `;

    return (
        <Layout>
            <div className="flex">
                <div className="w-4/5 pr-2">
                    <Badge text="Components" />
                    <div id="overview" className="flex flex-col mb-5 scroll-mt-16">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Modal</h1>
                        <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                            An overlay window that appears on top of the main content.
                        </p>
                    </div>

                    {/* Usage Variants Section */}
                    <section id="usage" className="scroll-mt-20">
                        <Tabs>
                            <Tab label="Preview">
                                <div className="relative w-full overflow-hidden mt-4 rounded-lg bg-zinc-100 dark:bg-zinc-950 shadow border border-slate-300 dark:border-slate-800 flex justify-center items-center">
                                    <div className="space-y-6 flex flex-col justify-around p-6">
                                        {['default', 'form', 'custom'].map((type) => (
                                            <div key={type} className="flex flex-col text-center">
                                                <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                                                    {type.charAt(0).toUpperCase() + type.slice(1)} Modal
                                                </h3>
                                                <button 
                                                    className={`px-4 py-2 rounded-lg shadow-sm text-white dark:text-black ${
                                                        type === 'default' ? 'bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200' :
                                                        type === 'form' ? 'bg-blue-700 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-500' :
                                                        'bg-green-600 dark:bg-green-500 hover:bg-green-500 dark:hover:bg-green-400'
                                                    }`}
                                                    onClick={() => handleOpen(type as 'default' | 'form' | 'custom')}
                                                >
                                                    Open {type.charAt(0).toUpperCase() + type.slice(1)} Modal
                                                </button>
                                            </div>
                                        ))}
                                    </div>
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
                                        <Suspense fallback={<div>Loading...</div>}>
                                            <SyntaxHighlighter
                                                language="tsx"
                                                style={materialLight}
                                                showLineNumbers={false}
                                                wrapLongLines={true}
                                                customStyle={{
                                                    margin: 1.5,
                                                    borderRadius: '0.5rem 0.5rem 0.5rem 0.5rem',
                                                    fontSize: '14px',
                                                    lineHeight: '1.25',
                                                    padding: '10px',
                                                }}
                                            >
                                                {codeExample}
                                            </SyntaxHighlighter>
                                        </Suspense>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </section>

                    <Modal 
                        isOpen={modalState.isOpen} 
                        onClose={handleClose} 
                        className="max-w-lg"
                    >
                        {renderModalContent()}
                    </Modal>

                    <ModalDocumentation />
                </div>
                <TOC items={tocItems} />
            </div>
        </Layout>
    );
};

ModalPageClient.displayName = "ModalPageClient";
export default ModalPageClient;
