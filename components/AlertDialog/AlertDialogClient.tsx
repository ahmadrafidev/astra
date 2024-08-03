// components/AlertDialog/AlertDialogPageClient.tsx
'use client';

import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import AlertDialog from './AlertDialog';

const AlertDialogPageClient: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const handleConfirm = () => {
        console.log('Confirmed!');
    };

    return (
        <Layout>
            <Badge text="Components" />
            <section className="mb-5">
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-50 mb-3 md:mb-4">Alert Dialog</h1>
                    <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                        A pop-up window that displays important information and requires user acknowledgment or action.
                    </p>
                </div>
            </section>
            <div className="space-y-6">
                <button className="px-4 py-2 bg-black dark:bg-gray-100 text-white dark:text-black rounded-lg shadow-sm hover:bg-gray-700 dark:hover:bg-gray-200" onClick={handleOpen}>
                    Show Dialog
                </button>
                <AlertDialog 
                    open={isOpen} 
                    onClose={handleClose}
                    onConfirm={handleConfirm}
                    confirmText="Continue"
                    closeText="Cancel"
                >
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Confirm Action</h3>
                    <p className="text-gray-700 dark:text-gray-300">This action is irreversible. Are you sure you want to proceed?</p>
                </AlertDialog>
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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">open</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">boolean</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Whether the alert dialog is open or closed.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onClose</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">function</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Function to call when the dialog should be closed.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">children</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">ReactNode</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Content to display inside the alert dialog.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            {/* Best Practices Section */}
            <section className="my-5">
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">Use alert dialogs to prompt users for important decisions or actions.</p>
                    <p className="text-gray-700 dark:text-gray-300">Ensure that the alert dialog is clearly distinguishable from the rest of the interface.</p>
                    <p className="text-gray-700 dark:text-gray-300">Provide a clear and concise message within the alert dialog.</p>
                    <p className="text-gray-700 dark:text-gray-300">Make sure to provide a way for users to close the dialog easily.</p>
                </div>
            </section>
        </Layout>
    );
};

AlertDialogPageClient.displayName = "AlertDialogPageClient";
export default AlertDialogPageClient;
