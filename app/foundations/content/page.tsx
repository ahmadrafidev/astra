// pages/foundations/content.tsx
import React from 'react';
import { Metadata } from 'next';

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Content Standard',
        description: 'Understand the content standards that guide the creation and presentation of information within AstraUI.',
    };
}

const AstraContentStandardPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Foundations" />
            <main>
                <section className="mb-3 md:mb-4">
                    <h1 className="text-2xl md:text-4xl font-medium mb-4 text-gray-900 dark:text-gray-50">Content standard</h1>
                    <p className="mb-4 text-gray-900 dark:text-gray-50 text-justify font-normal">
                        AstraUI emphasizes clarity, consistency, and conciseness in all written content. 
                        By following established guidelines for tone, voice, and style, 
                        AstraUI ensures that its messaging is easily understood and aligns with its communication goals.
                    </p>
                </section>
            </main>   
        </Layout>
    );
};

export default AstraContentStandardPage;
