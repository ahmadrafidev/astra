// app/foundations/accessibility/page.tsx
import React from 'react';
import { Metadata } from 'next';

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Accessibility',
        description: 'Explore the accessibility standards that AstraUI adheres to, ensuring inclusivity for all users.',
    };
}

const AstraA11yPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Foundations" />
            <main>
                <section className="mb-3 md:mb-4">
                    <h1 className="text-2xl md:text-4xl font-medium mb-4 text-gray-900 dark:text-gray-50">Accessibility (A11y)</h1>
                    <p className="mb-4 text-gray-700 dark:text-gray-300 text-justify">
                        AstraUI is committed to creating an inclusive experience for all users, including people with disabilities. 
                        Therefore, AstraUI definitely follows accessibility standards in all its components and interfaces so that they can be used by everyone, 
                        thereby improving the overall user experience.
                    </p>
                </section>
            </main>
        </Layout>
    );
};

export default AstraA11yPage;
