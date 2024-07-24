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
                    <p className="mb-4 text-gray-900 dark:text-gray-50 text-justify font-normal">
                        AstraUI is committed to creating an inclusive experience for all users, including people with disabilities. 
                        Therefore, AstraUI definitely follows accessibility standards in all its components and interfaces so that they can be used by everyone, 
                        thereby improving the overall user experience.
                    </p>
                </section>
                <section>
                    <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Principles</h2>
                </section>
                <section>
                    <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Approach</h2>
                </section>
                <section>
                    <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Engineering  considerations</h2>
                    <ul className="text-gray-900 dark:text-gray-50 space-y-3 md:space-y-4">
                        <li>
                            <h3 className="text-xl font-medium">
                                Aria attributes
                            </h3>
                            
                        </li>
                        <li>
                            <h3 className="text-xl font-medium">
                                Label
                            </h3>   
                        </li>
                        <li>
                            <h3 className="text-xl font-medium">
                                Keyboard navigation
                            </h3>  
                        </li>
                        <li>
                            <h3 className="text-xl font-medium">
                                Responsive design
                            </h3> 
                        </li>
                        <li>
                            <h3 className="text-xl font-medium">
                                Inclusive design
                            </h3>
                        </li>
                    </ul>
                </section>
            </main>
        </Layout>
    );
};

export default AstraA11yPage;
