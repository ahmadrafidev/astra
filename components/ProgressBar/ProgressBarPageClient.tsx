'use client';

import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import ProgressBar from './ProgressBar';
import ProgressBarDocumentation from './ProgressBarDocumentation';

const ProgressBarPageClient: React.FC = () => {
    const [progress, setProgress] = useState(50);

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">ProgressBar</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A visual indicator showing the completion status of a task or process.
                </p>
            </div>
            <section className="my-5">
                <h2 className="text-lg md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Variants</h2>
                <div className="flex flex-col space-y-4">
                    <div>
                        <h3 className="text-lg md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Default</h3>
                        <ProgressBar showLabel size="md" progress={progress} className="my-4" />
                    </div>
                    <div>   
                        <h3 className="text-lg md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">With Stripes</h3>
                        <ProgressBar size="md" hasStripe progress={progress} className="my-4" />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-lg md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50">Custom Progress Bar</h3>
                        <ProgressBar 
                            progress={progress} 
                            size="md" 
                            progressVariant="success" 
                            showLabel 
                            labelPosition="outside"
                            progressClassName="font-bold" 
                        />
                        <ProgressBar 
                            progress={progress} 
                            size="sm" 
                            progressVariant="warning" 
                            showLabel 
                            labelPosition="inside"
                            progressClassName="font-bold" 
                        />
                        <ProgressBar 
                            progress={progress} 
                            size="lg" 
                            progressVariant="danger" 
                            showLabel 
                            labelPosition="inside"
                            progressClassName="font-bold" 
                        />
                    </div>
                </div>
            </section>
            <div className="flex space-x-2 mt-4">
                <button
                    onClick={() => setProgress((prev) => Math.max(prev - 10, 0))}
                    className="px-4 py-2 bg-gray-300 rounded"
                >
                    Decrease
                </button>
                <button
                    onClick={() => setProgress((prev) => Math.min(prev + 10, 100))}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Increase
                </button>
            </div>
            <ProgressBarDocumentation />
        </Layout>
    );
};

ProgressBarPageClient.displayName = "ProgressBarPageClient";
export default ProgressBarPageClient;
