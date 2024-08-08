import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Button",
    description: "An interactive element that triggers an action when clicked or tapped.",
};

const ButtonPageClient = dynamic(() => import('@/components/Button/ButtonClient'), { ssr: false });

const ButtonPage: React.FC = () => {
    return <ButtonPageClient />;
};

ButtonPage.displayName="ButtonPage"
export default ButtonPage;
