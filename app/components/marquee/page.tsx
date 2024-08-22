import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Marquee",
    description: "A scrolling text component that can be used to display announcements, news, or any important information in a continuous loop.",
};

const MarqueeClient = dynamic(() => import('@/components/Marquee/MarqueeClient'), { ssr: false });

const MarqueePage: React.FC = () => {
    return <MarqueeClient />;
};

MarqueePage.displayName = "MarqueePage";
export default MarqueePage;
