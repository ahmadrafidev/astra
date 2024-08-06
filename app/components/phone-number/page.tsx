import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Phone Number",
    description: "A specialized input for entering and validating phone numbers.",
};

const PhoneNumberPageClient = dynamic(() => import('@/components/PhoneNumber/PhoneNumberClient'), { ssr: false });

const PhoneNumberPage: React.FC = () => {
    return <PhoneNumberPageClient />;
};

PhoneNumberPage.displayName="PhoneNumberPage"
export default PhoneNumberPage;
