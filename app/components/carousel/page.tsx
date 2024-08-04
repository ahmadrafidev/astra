import React from 'react';

import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Carousel",
    description: "Carousel component for displaying a series of images or content in a slideshow format.",
};

const CarouselPageClient = dynamic(() => import('@/components/Carousel/CarouselPageClient'), { ssr: false });

const CarouselPage: React.FC = () => {
    return <CarouselPageClient />;
};

CarouselPage.displayName = "CarouselPage"
export default CarouselPage;
