import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Modal",
    description: "An overlay window that appears on top of the main content.",
};

const ModalPageClient = dynamic(() => import('@/components/Modal/ModalPageClient'), { ssr: false });

const ModalPage: React.FC = () => {
    return <ModalPageClient />;
};

ModalPage.displayName="ModalPage"
export default ModalPage;
