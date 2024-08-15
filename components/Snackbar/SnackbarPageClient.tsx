'use client';

import React, { useState } from 'react';
import { Check, Info, AlertTriangle, XCircle } from 'lucide-react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import TOC from '@/components/TOC/TOC';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Snackbar from './Snackbar';

const SnackbarPageClient: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [variant, setVariant] = useState<'info' | 'success' | 'warning' | 'error'>('info');

    const handleOpen = (variant: 'info' | 'success' | 'warning' | 'error', message: string) => {
        setVariant(variant);
        setMessage(message);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const icon = {
        info: <Info />,
        success: <Check />,
        warning: <AlertTriangle />,
        error: <XCircle />
    };

    const tocItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'variants', label: 'Variants' },
        { id: 'properties', label: 'Properties' },
        { id: 'best-practices', label: 'Best Practices' },
    ];

    const codeExample = `
        <Snackbar
            message={message}
            open={open}
            showCloseButton={true}
            onClose={handleClose}
            variant={variant}
            icon={icon[variant]}
            action={<button onClick={() => console.log('Action clicked')}>Undo</button>}
        />
    `;

    return (
        <Layout>
            <div className="flex">
                <div className="w-4/5 pr-2">
                    <Badge text="Components" />
                    <div id="overview" className="flex flex-col mb-5 scroll-mt-16">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Snackbar</h1>
                        <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                            A brief message that appears at the bottom of the screen.
                        </p>
                    </div>  

                    {/* Variants Section */}
                    <section id="variants" className="scroll-mt-20">
                        <Tabs>
                            <Tab label="Preview">
                                <div className="relative w-full overflow-hidden rounded-lg mt-4 bg-zinc-100 dark:bg-zinc-950 shadow border border-slate-300 dark:border-slate-800">
                                    <div className="flex flex-col justify-around p-6 space-y-8 text-center">
                                        <div>
                                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                                                Info Snackbar Model
                                            </h3>
                                            <button
                                                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-500"
                                                onClick={() => handleOpen('info', 'This is an info message!')}
                                            >
                                                Show Info Snackbar
                                            </button>
                                        </div>
                                        <div>
                                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                                                Success Snackbar Model
                                            </h3>
                                            <button
                                                className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-sm hover:bg-green-500"
                                                onClick={() => handleOpen('success', 'This is a success message!')}
                                            >
                                                Show Success Snackbar
                                            </button>
                                        </div>
                                        <div>
                                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                                                Warning Snackbar Model
                                            </h3>
                                            <button
                                                className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-sm hover:bg-yellow-400"
                                                onClick={() => handleOpen('warning', 'This is a warning message!')}
                                            >
                                                Show Warning Snackbar
                                            </button>
                                        </div>
                                        <div>
                                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                                                Error Snackbar Model
                                            </h3>
                                            <button
                                                className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-sm hover:bg-red-500"
                                                onClick={() => handleOpen('error', 'This is an error message!')}
                                            >
                                                Show Error Snackbar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <Snackbar
                                    message={message}
                                    open={open}
                                    showCloseButton={true}
                                    onClose={handleClose}
                                    variant={variant}
                                    icon={icon[variant]}
                                    action={<button onClick={() => console.log('Action clicked')}>Undo</button>}
                                />
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
                                                fontSize: '14px',
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

                    {/* Props Section */}
                    <section id="properties" className="my-5 scroll-mt-20">
                        <h2 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-50 mb-5">Props</h2>
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Type</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Default</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Description</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">message</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The message to display in the snackbar.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">open</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">boolean</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">false</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">State whether the snackbar is open.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">duration</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">number</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">3s</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Duration of snackbar displayed on  screens.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">onClose</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">function</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Function to call when the snackbar should be closed.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Additional classes for styling the snackbar.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">variant</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono text-wrap">{`"info" | "success" | "warning" | "error"`}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{`"info"`}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The variant of the snackbar to define its color scheme.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">action</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">React.ReactNode</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">none</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">An optional action element to display alongside the message.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">showCloseButton</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">boolean</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">false</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Whether to show a close button on the snackbar.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">icon</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">React.ReactNode</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">An optional icon to display on the left side of the message.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Best Practices Section */}
                    <section id="best-practices" className="scroll-mt-20">
                        <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                        <div className="space-y-4">
                            <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3">
                                <li>Use snackbars to provide brief messages about app processes.</li>
                                <li>Ensure the snackbar is clearly visible and distinguishable.</li>
                                <li>Avoid using snackbars for critical messages that require immediate user action; use dialogs instead.</li>
                                <li>Limit the duration to a reasonable amount of time so that users have enough time to read the message.</li>
                                <li>Snackbars should not interrupt the user’s experience and main content.</li>
                            </ul>
                        </div>
                    </section>
                </div>
                <TOC items={tocItems} />
            </div>
        </Layout>
    );
};

SnackbarPageClient.displayName = "SnackbarPageClient";
export default SnackbarPageClient;
