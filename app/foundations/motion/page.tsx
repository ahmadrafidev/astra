// app/foundations/content/page.tsx
import React from 'react';
import { Metadata } from 'next';

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Motion',
        description: 'Discover the motion guidelines and principles in AstraUI to create fluid and responsive animations.',
    };
}

const AstraMotionPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Foundations" />
            <main>
                <section className="mb-3 md:mb-4">
                    <h1 className="text-2xl md:text-4xl font-medium mb-4 text-gray-900 dark:text-gray-50">Motion</h1>
                    <p className="mb-4 text-gray-900 dark:text-gray-50 text-justify font-normal">
                        Motion little overview
                    </p>
                </section>
                <section className="mb-3 md:mb-4"> 
                    <h2 className="text-xl md:text-2xl mb-2 md:mb-3 font-medium text-gray-900 dark:text-gray-50">Motion principles</h2>
                    <ul className="text-gray-900 dark:text-gray-50 space-y-3 md:space-y-4">
                        <li>
                            <h3 className="text-lg font-medium">Experience principles</h3>
                            <p className="text-base font-sans font-normal">Description 1</p>
                        </li>
                        <li>
                            <h3 className="text-lg font-medium">Visual principles</h3>
                            <p className="text-base font-sans font-normal">Description 2</p>
                        </li>
                    </ul>
                </section>
                <section className="mb-3 md:mb-4"> 
                    <h2 className="text-xl md:text-2xl mb-2 md:mb-3 font-medium text-gray-900 dark:text-gray-50">Motion guidelines</h2>
                    <ul className="text-gray-900 dark:text-gray-50 space-y-3 md:space-y-4">
                        <li>
                            <h3 className="text-lg font-medium">Simple guidelines 1</h3>
                            <p className="text-base font-sans font-normal">Description 1</p>
                        </li>
                        <li>
                            <h3 className="text-lg font-medium">Simple guidelines 2</h3>
                            <p className="text-base font-sans font-normal">Description 1</p>
                        </li>
                    </ul>
                </section>
            </main>   
        </Layout>
    );
};

export default AstraMotionPage;
