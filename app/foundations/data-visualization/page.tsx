// app/foundations/data-visualization/page.tsx
import React from 'react';
import { Metadata } from 'next';

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Data Visualization',
        description: 'Explore the data visualization techniques and standards used in AstraUI.',
    };
}

const AstraDataVisualizationPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Foundations" />
            <main>
                <section className="mb-3 md:mb-4">
                    <h1 className="text-2xl md:text-4xl font-medium mb-4 text-gray-900 dark:text-gray-50">Data Visualization</h1>
                    <p className="mb-4 text-gray-900 dark:text-gray-50 text-justify font-normal">
                        Data visualization involves the graphical representation of data to improve understanding and decision-making. 
                        Effective data visualizations are accurate, purposeful, and responsive, ensuring they convey information clearly across different devices and contexts. 
                        They are used to monitor, analyze, explore, and report data, making complex information more accessible and actionable.
                    </p>
                </section>
                <section className="mb-3 md:mb-4"> 
                    <h2 className="text-xl md:text-2xl mb-2 md:mb-3 font-medium text-gray-900 dark:text-gray-50">Principles</h2>
                    <ul className="text-gray-900 dark:text-gray-50 space-y-3 md:space-y-4">
                        <li>
                            <h3 className="text-lg font-medium">Clarity and Simplicity</h3>
                            <p className="text-base font-sans font-normal">Ensure visualizations are easy to understand and free from unnecessary complexity.</p>
                        </li>
                        <li>
                            <h3 className="text-lg font-medium">Consistency</h3>
                            <p className="text-base font-sans font-normal">Maintain uniformity in design elements such as colors, fonts, and layouts.</p>
                        </li>
                        <li>
                            <h3 className="text-lg font-medium">Accessibility</h3>
                            <p className="text-base font-sans font-normal">Design with accessibility in mind to ensure all users can understand the visualizations.</p>
                        </li>
                        <li>
                            <h3 className="text-lg font-medium">Relevance</h3>
                            <p className="text-base font-sans font-normal">Ensure that visualizations are relevant and convey the necessary information effectively.</p>
                        </li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Use Cases</h2>
                    <ul className="text-gray-900 dark:text-gray-50 space-y-3 md:space-y-4">
                        <li>
                            <h3 className="text-lg font-medium">
                                Monitoring
                            </h3>
                            
                        </li>
                        <li>
                            <h3 className="text-lg font-medium">
                                Analysis
                            </h3>   
                        </li>
                        <li>
                            <h3 className="text-lg font-medium">
                                Exploration
                            </h3>  
                        </li>
                        <li>
                            <h3 className="text-lg font-medium">
                                Optimization
                            </h3> 
                        </li>
                        <li>
                            <h3 className="text-lg font-medium">
                                Reporting
                            </h3>
                        </li>
                    </ul>
                </section>
            </main>
        </Layout>
    );
};

export default AstraDataVisualizationPage;
