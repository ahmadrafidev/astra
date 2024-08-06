import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "AvatarGroup",
    description: "A collection of multiple avatars displayed together to represent a group or team.",
};

const AvatarGroupPageClient = dynamic(() => import('@/components/AvatarGroup/AvatarGroupPageClient'), { ssr: false });

const AvatarGroupPage: React.FC = () => {
    return <AvatarGroupPageClient />;
};

AvatarGroupPage.displayName="AvatarGroupPage";
export default AvatarGroupPage;
