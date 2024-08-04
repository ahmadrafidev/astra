import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "AvatarGroup",
    description: "Avatar groups are used to display a collection of user profile images or icons in a compact form.",
};

const AvatarGroupPageClient = dynamic(() => import('@/components/AvatarGroup/AvatarGroupPageClient'), { ssr: false });

const AvatarGroupPage: React.FC = () => {
    return <AvatarGroupPageClient />;
};

AvatarGroupPage.displayName="AvatarGroupPage";
export default AvatarGroupPage;
