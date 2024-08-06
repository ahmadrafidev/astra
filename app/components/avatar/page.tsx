import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Avatar",
    description: "A visual representation of a user or entity typically displayed as a profile picture or icon.",
};

const AvatarPageClient = dynamic(() => import('@/components/Avatar/AvatarPageClient'), { ssr: false });

const AvatarPage: React.FC = () => {
    return <AvatarPageClient />;
};

AvatarPage.displayName="AvatarPage"
export default AvatarPage;

