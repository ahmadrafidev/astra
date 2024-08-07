import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Stepper",
    description: "A progress indicator for multi-step processes or forms.",
};

const StepperPageClient = dynamic(() => import('@/components/Stepper/StepperPageClient'), { ssr: false });

const StepperPage: React.FC = () => {
    return <StepperPageClient />;
};

StepperPage.displayName="StepperPage";
export default StepperPage;
