'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Rating from './Rating';
import RatingDocumentation from './RatingDocumentation';

const RatingPageClient: React.FC = () => {
    const [currentRating, setCurrentRating] = useState< number | null>(0);

    const handleRate = (rating: number | null) => {
        setCurrentRating(rating);
    };

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Rating</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A component for users to evaluate or score an item on a predefined scale.
                </p>
            </div>
            <section className="mb-5">
                <h2 className="text-lg md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Variants</h2>
                <div className="space-y-4 flex flex-col justify-around">
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Base Model
                        </h3>
                            <Rating 
                                onRate={handleRate}
                                maxRating={5} 
                                defaultRating={3}
                                size="lg"
                                allowClear={true}
                            />
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Read Only Model
                        </h3>
                            <Rating 
                                onRate={handleRate}
                                maxRating={5} 
                                defaultRating={3}
                                size="lg"
                                activeColor="text-blue-500"
                                inactiveColor="text-gray-200"
                                allowClear={true}
                                readOnly={true}
                            />
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Custom Icon Model
                        </h3>
                            <Rating 
                                onRate={handleRate}
                                maxRating={5} 
                                defaultRating={3}
                                size="lg"
                                activeColor="text-red-500"
                                inactiveColor="text-gray-200"
                                allowClear={true}
                                icon={<X />}
                            />
                    </div>
                </div>
            </section>
            <RatingDocumentation/>
        </Layout>
    );
};

RatingPageClient.displayName = "RatingPageClient";
export default RatingPageClient;
