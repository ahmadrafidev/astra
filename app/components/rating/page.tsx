// pages/documentation/components/rating.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Rating",
    description: "A component for rating items.",
};

const RatingPageClient = dynamic(() => import('../../../components/Rating/RatingPageClient'), { ssr: false });

const RatingPage: React.FC = () => {
    return <RatingPageClient />;
};

RatingPage.displayName="RatingPage"
export default RatingPage;
