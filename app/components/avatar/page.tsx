import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Avatar",
    description: "Avatars are used to display user profile images or icons.",
};

const AvatarPageClient = dynamic(() => import('@/components/Avatar/AvatarPageClient'), { ssr: false });

const AvatarPage: React.FC = () => {
    return <AvatarPageClient />;
};

AvatarPage.displayName="AvatarPage"
export default AvatarPage;

