import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Modal",
    description: "A component for displaying modal dialogs.",
};

const ModalPageClient = dynamic(() => import('@/components/Modal/ModalPageClient'), { ssr: false });

const ModalPage: React.FC = () => {
    return <ModalPageClient />;
};

ModalPage.displayName="ModalPage"
export default ModalPage;
