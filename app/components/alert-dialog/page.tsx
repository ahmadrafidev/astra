// app/components/alert-dialog/page.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Alert Dialog",
    description: "A pop-up window that displays important information and requires user acknowledgment or action.",
};

const AlertDialogPageClient = dynamic(() => import('../../../components/AlertDialog/AlertDialogClient'), { ssr: false });

const AlertDialogPage: React.FC = () => {
    return <AlertDialogPageClient />;
};

AlertDialogPage.displayName="AlertDialogPage";
export default AlertDialogPage;
