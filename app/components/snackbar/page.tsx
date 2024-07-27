// app/components/snackbar/page.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Snackbar",
    description: "Snackbars provide brief messages about app processes at the bottom of the screen.",
};

const SnackbarPageClient = dynamic(() => import('../../../components/Snackbar/SnackbarPageClient'), { ssr: false });

const SnackbarPage: React.FC = () => {
    return <SnackbarPageClient />;
};

SnackbarPage.displayName="SnackbarPage"
export default SnackbarPage;
