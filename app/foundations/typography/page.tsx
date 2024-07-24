// app/foundations/typography/page.tsx
import React from 'react';
import { Metadata } from 'next';

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Typography',
        description: 'Understand the typographic styles and standards used in AstraUI to ensure readability and accessibility.',
    };
}

const AstraTypographyPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Foundations" />
            <main>
                <section className="mb-3 md:mb-4">
                    <h1 className="text-2xl md:text-4xl font-medium mb-4 text-gray-900 dark:text-gray-50">Typography</h1>
                    <p className="mb-4 text-gray-700 dark:text-gray-300 text-justify font-normal">
                        AstraUI&apos;s choice of typography improves readability and reflects the brand&apos;s visual identity. 
                        By defining scale, hierarchy, and typographic style,
                        AstraUI creates a cohesive and visually appealing experience across digital materials.   
                    </p>
                </section>
            </main>   
        </Layout>
    );
};

export default AstraTypographyPage;
