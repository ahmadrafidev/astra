import React from 'react';
import { Metadata } from 'next';

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Color',
        description: 'Explore the color palette used in AstraUI, including primary, secondary, and neutral colors.',
    };
}

const AstraColorPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Foundations" />
            <main>
                <section className="mb-3 md:mb-4">
                    <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Color</h1>
                    <p className="mb-4 text-gray-900 dark:text-gray-50 text-justify font-normal">
                        AstraUI&apos;s color palette is designed to enhance user experience and maintain visual consistency. 
                        By adhering to contrast standards, AstraUI ensures accessibility and conveys emotions effectively through color.
                    </p>
                </section>
            </main>   
        </Layout>
    );
};

export default AstraColorPage;
