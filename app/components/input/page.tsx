// app/components/input/page.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Input",
    description: "A field for user input, such as text, numbers, or passwords.",
};

const InputPageClient = dynamic(() => import('../../../components/Input/InputPageClient'), { ssr: false });

const InputPage: React.FC = () => {
    return <InputPageClient />;
};

export default InputPage;
