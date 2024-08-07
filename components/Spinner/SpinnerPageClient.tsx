'use client'

import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Spinner from './Spinner';
import SpinnerDocumentation from './SpinnerDocumentation';

const SpinnerPageClient: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleLoadingToggle = () => {
        setIsLoading(!isLoading);
        if (!isLoading) {
            setTimeout(() => setIsLoading(false), 3000); // Simulate a 3-second loading process
        }
    };

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Spinner</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    An animated indicator showing that content is loading or processing. Highly customizable and accessible.
                </p>
            </div>
            <section className="space-y-5">
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Basic Usage</h2>
                    <div className="flex space-x-4">
                        <Spinner size="sm" />
                        <Spinner size="md" />
                        <Spinner size="lg" />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Custom Colors</h2>
                    <div className="flex space-x-4">
                        <Spinner color="border-blue-500" />
                        <Spinner color="border-green-500" />
                        <Spinner color="border-red-500" />
                        <Spinner color="border-purple-500" />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Custom Thickness and Speed</h2>
                    <div className="flex space-x-4">
                        <Spinner thickness={2} speed="slow" />
                        <Spinner thickness={4} speed="normal" />
                        <Spinner thickness={6} speed="fast" />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Spinner in a Button</h2>
                    <button 
                        className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2"
                        onClick={handleLoadingToggle}
                        disabled={isLoading}
                    >
                        {isLoading && <Spinner className="z-50" size="sm" color="text-white" />}
                        <span className="font-medium font-sans">{isLoading ? 'Loading' : 'Click to load'}</span>
                    </button>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-50">With Custom Styling</h2>
                    <Spinner className="shadow-lg border-red-500 shadow-red-500" />
                </div>
            </section>
            <SpinnerDocumentation />
        </Layout>
    );
};

SpinnerPageClient.displayName = "SpinnerPageClient";

export default SpinnerPageClient;