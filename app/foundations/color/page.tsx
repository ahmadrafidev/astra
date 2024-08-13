import React from 'react';
import { Metadata } from 'next';

import Layout from '@/components/Layout/Layout';
import Badge from '@/components/Badge/Badge';
import { Alert, AlertTitle, AlertContent } from '@/components/Alert/Alert';
import TOC from '@/components/TOC/TOC';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Color',
        description: 'Explore the color palette used in AstraUI, including primary, secondary, and neutral colors.',
    };
}

const tocItems = [
    { id: 'overview', label: 'Overview' },
];

const AstraColorPage: React.FC = () => {
    return (
        <Layout>
            <main>
                <div className="flex">
                    <div className="w-full md:w-4/5 pr-2">
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
                            <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Color</h1>
                            <p className="mb-4 text-gray-900 dark:text-gray-50 text-justify font-normal">
                                AstraUI&apos;s color palette is designed to enhance user experience and maintain visual consistency. 
                                By adhering to contrast standards, AstraUI ensures accessibility and conveys emotions effectively through color.
                            </p>
                        </section>
                    </div>
                    <TOC className="hidden md:block" items={tocItems} />
                </div>
            </main>   
        </Layout>
    );
};

export default AstraColorPage;
