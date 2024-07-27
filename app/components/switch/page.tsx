// app/components/switch/page.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Switch",
    description: "Switch components are used to toggle between two states.",
};

const SwitchPageClient = dynamic(() => import('../../../components/Switch/SwitchPageClient'), { ssr: false });

const SwitchPage: React.FC = () => {
    return <SwitchPageClient />;
};

SwitchPage.displayName="SwitchPage";
export default SwitchPage;
