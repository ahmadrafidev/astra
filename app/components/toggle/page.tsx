// app/components/toggle/page.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Toggle",
    description: "Toggle buttons are used to switch between two states.",
};

const TogglePageClient = dynamic(() => import('../../../components/Toggle/TogglePageClient'), { ssr: false });

const TogglePage: React.FC = () => {
    return <TogglePageClient />;
};

TogglePage.displayName="TogglePage";
export default TogglePage;
