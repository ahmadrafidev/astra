// app/components/slider/page.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Slider",
    description: "Sliders allow users to select a value from a continuous or discrete range.",
};

const SliderPageClient = dynamic(() => import('../../../components/Slider/SliderPageClient'), { ssr: false });

const SliderPage: React.FC = () => {
    return <SliderPageClient />;
};

SliderPage.displayName="SliderPage"
export default SliderPage;
