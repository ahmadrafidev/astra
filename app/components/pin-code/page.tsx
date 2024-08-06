import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "PIN Code",
    description: "A secure input for PIN codes or short numeric sequences",
};

const PinCodePageClient = dynamic(() => import('@/components/PinCode/PinCodeClient'), { ssr: false });

const PinCodePage: React.FC = () => {
    return <PinCodePageClient />;
};

PinCodePage.displayName="PinCodePage"
export default PinCodePage;
