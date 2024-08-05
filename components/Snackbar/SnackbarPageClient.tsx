'use client';

import React, { useState } from 'react';
import { Check, Info, AlertTriangle, XCircle } from 'lucide-react';

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

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Snackbar</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A brief message that appears at the bottom of the screen.
                </p>
            </div>  
            <section className="mb-5">
                <h2 className="text-lg md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Variants</h2>
                <div className="space-y-4 flex flex-col justify-around">
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
                <Snackbar
                    message={message}
                    open={open}
                    showCloseButton={true}
                    onClose={handleClose}
                    variant={variant}
                    icon={icon[variant]}
                    action={<button onClick={() => console.log('Action clicked')}>Undo</button>}
                />
            </section>
            {/* Props Section */}
            <section className="my-5">
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Props</h2>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow">
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr>
                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Name</th>
                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Type</th>
                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Default</th>
                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">message</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The message to display in the snackbar.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">open</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">boolean</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">false</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">State whether the snackbar is open.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">duration</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">number</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">3s</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Duration of snackbar displayed on  screens.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onClose</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">function</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Function to call when the snackbar should be closed.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling the snackbar.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">variant</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">{`"info" | "success" | "warning" | "error"`}</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">{`"info"`}</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The variant of the snackbar to define its color scheme.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">action</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">React.ReactNode</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">An optional action element to display alongside the message.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">showCloseButton</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">boolean</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">false</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Whether to show a close button on the snackbar.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">icon</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">React.ReactNode</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">An optional icon to display on the left side of the message.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            {/* Best Practices Section */}
            <section>
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                <div className="space-y-4">
                    <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3">
                        <li>Use snackbars to provide brief messages about app processes.</li>
                        <li>Ensure the snackbar is clearly visible and distinguishable.</li>
                        <li>Provide accessible labels to describe the snackbar message.</li>
                        <li>Avoid using snackbars for critical messages that require immediate user action; use dialogs instead.</li>
                        <li>Limit the duration to a reasonable amount of time so that users have enough time to read the message.</li>
                        <li>Snackbars should not interrupt the user’s experience and main content.</li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

SnackbarPageClient.displayName = "SnackbarPageClient";
export default SnackbarPageClient;
