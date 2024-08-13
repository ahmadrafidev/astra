import React from 'react';
import { Metadata } from 'next';

import Layout from '@/components/Layout/Layout';
import Badge from '@/components/Badge/Badge';
import { Alert, AlertTitle, AlertContent } from '@/components/Alert/Alert';
import TOC from '@/components/TOC/TOC';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Typography',
        description: 'Understand the typographic styles and standards used in AstraUI to ensure readability and accessibility.',
    };
}

const tocItems = [
    { id: 'overview', label: 'Overview' },
];

const AstraTypographyPage: React.FC = () => {
    return (
        <Layout>
            <main>
                <div className="flex">
                    <div className="w-4/5 pr-2">
                        <Badge text="Foundations" />
                        <Alert 
                            type="info" 
                            isDismissible={false} 
                            className="my-2 p-4"
                        >
                            <AlertTitle>Under Development</AlertTitle>
                            <AlertContent>
                                This page is currently being updated. Some information may be incomplete or subject to change.
                            </AlertContent>
                        </Alert>
                        <section id="overview" className="mb-3 md:mb-4 scroll-mt-20">
                            <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Typography</h1>
                            <p className="mb-4 text-gray-700 dark:text-gray-300 text-justify font-normal">
                                AstraUI&apos;s choice of typography improves readability and reflects the brand&apos;s visual identity. 
                                By defining scale, hierarchy, and typographic style,
                                AstraUI creates a cohesive and visually appealing experience across digital materials.   
                            </p>
                        </section>
                    </div>
                    <TOC items={tocItems} />
                </div>
            </main>   
        </Layout>
    );
};

export default AstraTypographyPage;
