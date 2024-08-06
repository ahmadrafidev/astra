import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Payment Card",
    description: "A form component for capturing and validating payment card details.",
};

const PaymentCardPageClient = dynamic(() => import('@/components/PaymentCard/PaymentCardClient'), { ssr: false });

const PaymentCardPage: React.FC = () => {
    return <PaymentCardPageClient />;
};

PaymentCardPage.displayName="PaymentCardPage"
export default PaymentCardPage;
