'use client';

import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import AlertDialog from './AlertDialog';
import AlertDialogDocumentation from './AlertDialogDocumentation';

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
                <button className="px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-black rounded-lg shadow-sm hover:bg-gray-800 dark:hover:bg-gray-200" onClick={handleOpen}>
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
            <AlertDialogDocumentation />
        </Layout>
    );
};

AlertDialogPageClient.displayName = "AlertDialogPageClient";
export default AlertDialogPageClient;
