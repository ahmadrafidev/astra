// pages/foundations/brand.tsx
import React from 'react';
import { Metadata } from 'next';

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Brand Expression',
        description: 'Learn how AstraUI maintains brand consistency across various components and designs.',
    };
}

const AstraBrandPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Foundations" />
            <main>
                <section className="mb-3 md:mb-4">
                    <h1 className="text-2xl md:text-4xl font-medium mb-4 text-gray-900 dark:text-gray-50">Brand expression</h1>
                    <p className="mb-4 text-gray-700 dark:text-gray-300 text-justify">
                        AstraUI captures the brand&apos;s identity through consistent visuals, messaging, and tone.
                        This coherence across all touchpoints strengthens brand recognition and creates a memorable and engaging user experience.
                    </p>
                </section>
            </main>
        </Layout>
    );
};

export default AstraBrandPage;
