'use client';

import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Snackbar from './Snackbar';
import { Check } from 'lucide-react';

const SnackbarPageClient: React.FC = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Snackbar</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A brief message that appears at the bottom of the screen.
                </p>
            </div>  
            <div className="space-y-6">
                <button 
                    className="px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-black rounded-lg shadow-sm hover:bg-gray-800 dark:hover:bg-gray-200" 
                    onClick={handleOpen}>
                    Show Snackbar
                </button>
                <Snackbar
                    message="This is a success message!"
                    open={open}
                    showCloseButton={true}
                    onClose={() => setOpen(false)}
                    variant="success"
                    action={<button onClick={() => console.log('Action clicked')}>Undo</button>}
                />
            </div>
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
                    <p className="text-gray-700 dark:text-gray-300">1. Use snackbars to provide brief messages about app processes.</p>
                    <p className="text-gray-700 dark:text-gray-300">2. Ensure the snackbar is clearly visible and distinguishable.</p>
                    <p className="text-gray-700 dark:text-gray-300">3. Provide accessible labels to describe the snackbar message.</p>
                    <p className="text-gray-700 dark:text-gray-300">4. Avoid using snackbars for critical messages that require immediate user action; use dialogs instead.</p>
                    <p className="text-gray-700 dark:text-gray-300">5. Limit the duration to a reasonable amount of time so that users have enough time to read the message.</p>
                    <p className="text-gray-700 dark:text-gray-300">6. Snackbar should not interrup user`s experience and main content</p>
                </div>
            </section>
        </Layout>
    );
};

SnackbarPageClient.displayName = "SnackbarPageClient";
export default SnackbarPageClient;
