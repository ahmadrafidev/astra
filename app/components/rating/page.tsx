import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Rating",
    description: "A component for users to evaluate or score an item on a predefined scale.",
};

const RatingPageClient = dynamic(() => import('@/components/Rating/RatingPageClient'), { ssr: false });

const RatingPage: React.FC = () => {
    return <RatingPageClient />;
};

RatingPage.displayName="RatingPage"
export default RatingPage;
