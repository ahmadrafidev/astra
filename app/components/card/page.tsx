import React from 'react';

import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Card',
    description: 'A flexible container for displaying related content and actions in a single unit.',
};

const CardPageClient = dynamic(() => import('@/components/Card/CardPageClient'), { ssr: false });

const CardPage: React.FC = () => {
    return <CardPageClient />;
};

CardPage.displayName = "CardPage"
export default CardPage;
