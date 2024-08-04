import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Stepper",
    description: "Steppers guide users through a series of steps in a sequential manner.",
};

const StepperPageClient = dynamic(() => import('@/components/Stepper/StepperPageClient'), { ssr: false });

const StepperPage: React.FC = () => {
    return <StepperPageClient />;
};

StepperPage.displayName="StepperPage";
export default StepperPage;
