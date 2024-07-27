// app/components/icon-button/page.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "IconButton",
    description: "Icon buttons are used to represent actions with icons, providing a compact and visually appealing interface.",
};

const IconButtonPageClient = dynamic(() => import('../../../components/IconButton/IconButtonPageClient'), { ssr: false });

const IconButtonPage: React.FC = () => {
    return <IconButtonPageClient />;
};

IconButtonPage.displayName = "IconButtonPage";
export default IconButtonPage;
