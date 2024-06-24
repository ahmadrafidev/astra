'use client';

import React from 'react';
import Link from 'next/link';

import Layout from '../../components/Layout/Layout';
import Badge from '../../components/Badge/Badge';

import { foundationList } from '../../utils/constants/route';

const AstraFoundationPage: React.FC = () => {

    const sortedFoundationList = [...foundationList].sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    return (
        <Layout>
            <Badge text="Foundations"/>
            <h1 className="text-2xl md:text-4xl font-medium mb-3 text-gray-900 dark:text-gray-50">Astra UI Foundation</h1>
            <div className="mb-8">
                <p className="mb-4 text-md text-gray-800 dark:text-white leading-loose">
                    The foundation section covers the core principles and philosophy behind the Astra UI design system. 
                    It provides insight into the purpose, objectives, and guiding principles that shape every aspect of Astra UI.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {sortedFoundationList.map((item) => (
                        <div key={item.name} className="border p-4 rounded-lg hover:shadow-lg transition-shadow">
                            <Link href={item.path} className="text-gray-900 dark:text-gray-50 text-lg md:text-xl">
                                {item.name}
                            </Link>
                            <Link href={item.path}>
                                <p className="text-sm font-normal text-gray-900 dark:text-gray-100 mt-2 leading-loose">
                                    {item.name === 'A11y' && 'Explore the accessibility standards that Astra UI adheres to, ensuring inclusivity for all users.'}
                                    {item.name === 'Brand expression' && 'Learn how Astra UI maintains brand consistency across various components and designs.'}
                                    {item.name === 'Color' && 'Explore the color palette used in Astra UI, including primary, secondary, and neutral colors.'}
                                    {item.name === 'Content standards' && 'Understand the content standards that guide the creation and presentation of information within Astra UI.'}
                                    {item.name === 'Data visualization' && 'Explore the data visualization techniques and standards used in Astra UI.'}
                                    {item.name === 'Philosophy' && 'Discover the core philosophy behind Astra UI and how it aims to make development easier and more accessible.'}
                                    {item.name === 'Screen sizes' && 'Learn about the responsive design principles and screen size guidelines in Astra UI for web, Android, and iOS.'}
                                    {item.name === 'Typography' && 'Understand the typographic styles and standards used in Astra UI to ensure readability and accessibility.'}
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default AstraFoundationPage;
