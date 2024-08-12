import React from 'react';
import { Metadata } from 'next';

import Layout from '@/components/Layout/Layout';
import Badge from '@/components/Badge/Badge';
import { Alert, AlertTitle, AlertContent } from '@/components/Alert/Alert';

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
                <section className="mb-3 md:mb-4">
                    <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Data Visualization</h1>
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
                <section className="mb-3 md:mb-4">
                    <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Use Cases</h2>
                    <ul className="text-gray-900 dark:text-gray-50 space-y-3 md:space-y-4">
                        <li>
                            <h3 className="text-lg font-medium">Monitoring</h3>
                            <p className="text-base font-sans font-normal">Track key metrics and performance indicators in real-time to make informed decisions and take immediate action.</p>
                        </li>
                        <li>
                            <h3 className="text-lg font-medium">Analysis</h3>
                            <p className="text-base font-sans font-normal">Examine data to identify patterns, trends, and insights that can drive strategic initiatives and improvements.</p>
                        </li>
                        <li>
                            <h3 className="text-lg font-medium">Exploration</h3>
                            <p className="text-base font-sans font-normal">Dive deep into data sets to uncover hidden relationships and generate new hypotheses for further investigation.</p>
                        </li>
                        <li>
                            <h3 className="text-lg font-medium">Optimization</h3>
                            <p className="text-base font-sans font-normal">Optimize processes and operations by visualizing data to identify inefficiencies and areas for enhancement.</p>
                        </li>
                        <li>
                            <h3 className="text-lg font-medium">Reporting</h3>
                            <p className="text-base font-sans font-normal">Communicate findings and results through clear, concise, and impactful visual reports that drive stakeholder engagement.</p>
                        </li>
                    </ul>
                </section>
            </main>
        </Layout>
    );
};

AstraDataVisualizationPage.displayName = "AstraDataVisualizationPage"
export default AstraDataVisualizationPage;
