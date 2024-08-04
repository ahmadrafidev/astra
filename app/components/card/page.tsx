import React from 'react';

import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Card',
    description: 'The Card component is a versatile container for displaying content in a structured and visually appealing way.',
};

const CardPageClient = dynamic(() => import('@/components/Card/CardPageClient'), { ssr: false });

const CardPage: React.FC = () => {
    return <CardPageClient />;
};

CardPage.displayName = "CardPage"
export default CardPage;
