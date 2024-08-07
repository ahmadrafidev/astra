import React from 'react';

import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Carousel",
    description: "A slideshow-like component for cycling through a series of content items.",
};

const CarouselPageClient = dynamic(() => import('@/components/Carousel/CarouselPageClient'), { ssr: false });

const CarouselPage: React.FC = () => {
    return <CarouselPageClient />;
};

CarouselPage.displayName = "CarouselPage"
export default CarouselPage;
