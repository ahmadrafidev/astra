'use client';

import React from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Carousel from './Carousel';
import CarouselDocumentation from './CarouselDocumentation';

const images = [
    '/icons/apple-light.webp',
    '/icons/android-light.webp',
    '/icons/twitter.webp',
];

const CarouselPageClient: React.FC = () => {
    return (
        <Layout>
            <Badge text="Components" />
            {/* Header Content */}
            <section className="mb-5">
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-3 md:mb-4">Carousel</h1>
                    <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                        A slideshow-like component for cycling through a series of content items.
                    </p>
                </div>
            </section>
            {/* Carousel Section */}
            <section className="mb-5">
                <Carousel
                    className="max-w-md md:max-w-lg mx-auto"
                    images={images}
                    width={300}
                    height={300}
                    autoPlay={true}
                    autoPlayInterval={5000}
                    showDots={true}
                    showArrows={true}
                />
            </section>
            <CarouselDocumentation />
        </Layout>
    );
};

CarouselPageClient.displayName = "CarouselPageClient";
export default CarouselPageClient;
