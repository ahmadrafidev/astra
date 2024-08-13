'use client';

import React from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Card from './Card';
import CardDocumentation from './CardDocumentation';

const CardPageClient: React.FC = () => {
    return (
        <Layout>
            <Badge text="Components" />
            {/* Header Content */}
            <section className="mb-5">
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-semibold font-sans text-gray-900 dark:text-gray-50 mb-3 md:mb-4">Card</h1>
                    <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                        A flexible container for displaying related content and actions in a single unit.
                    </p>
                </div>
            </section>
            {/* Card Variants Section */}
            <section className="mb-5">
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Examples</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card
                        title="Card Title 1"
                        description="This is a description of the card content."
                        imageSrc="/icons/twitter.webp"
                        imageWidth={300}
                        imageHeight={200}
                    />
                    <Card
                        title="Card Title 2"
                        description="This is another description of the card content."
                    />
                    <Card
                        title="Card Title 3"
                        description="This card has additional content."
                        variant="interactive"
                        titleElement="h2"
                    >
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Action</button>
                    </Card>
                    <Card
                        title="My Card"
                        description="This is a description of my card."
                        imageSrc="/icons/twitter.webp"
                        imageAlt="Descriptive alt text"
                        variant="hover"
                        titleElement="h2"
                        onClick={() => alert(`button clicked`)}
                    >
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Try Click Me</button>
                    </Card>
                </div>
            </section>
            <CardDocumentation />
        </Layout>
    );
};

CardPageClient.displayName = "CardPageClient";
export default CardPageClient;
