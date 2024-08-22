import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Scroll to Top Button",
    description: "A button that appears when the user scrolls down the page, allowing them to quickly return to the top.",
};

const ScrollToTopButtonClient = dynamic(() => import('@/components/ScrollToTopButton/ScrollToTopButtonClient'), { ssr: false });

const ScrollToTopButtonPage: React.FC = () => {
    return <ScrollToTopButtonClient />;
};

ScrollToTopButtonPage.displayName = "ScrollToTopButtonPage";
export default ScrollToTopButtonPage;
