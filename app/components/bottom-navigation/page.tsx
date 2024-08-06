import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Bottom Navigation",
    description: "A mobile-friendly navigation bar fixed at screen bottom.",
};

const BottomNavigationClient = dynamic(() => import("@/components/BottomNavigation/BottomNavigationClient"), { ssr: false });

const BottomNavigationPage: React.FC = () => {
    return <BottomNavigationClient />;
};

BottomNavigationPage.displayName="BottomNavigationPage"
export default BottomNavigationPage;
