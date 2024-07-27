// pages/documentation/components/dialog.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Dialog",
    description: "A component for displaying modal dialogs.",
};

const DialogPageClient = dynamic(() => import('../../../components/Dialog/DialogPageClient'), { ssr: false });

const DialogPage: React.FC = () => {
    return <DialogPageClient />;
};

DialogPage.displayName="DialogPage"
export default DialogPage;
