import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";

import Layout from '../../components/Layout/Layout';
import Badge from '../../components/Badge/Badge';

import { foundationList } from '../../utils/constants/route';

export const metadata: Metadata = {
    title: "Foundation",
    description: "The building blocks of modern UI",
};

const AstraFoundationPage: React.FC = () => {

    const sortedFoundationList = [...foundationList].sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    return (
        <Layout>
            <Badge ariaLabel="Foundations Title Badge" text="Foundations"/>
            <h1 className="text-2xl md:text-4xl font-medium mb-3 text-gray-900 dark:text-gray-50">Foundations</h1>
            <div className="mb-8">
                <p className="mb-4 text-md text-gray-800 dark:text-white leading-loose text-justify">
                    The Foundation section defines the essential principles and philosophy of the AstraUI design system. 
                    It offers a comprehensive understanding of the core values, objectives, and guidelines that 
                    inform and inspire every component, ensuring consistency, usability, and aesthetic coherence across all user interfaces.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {sortedFoundationList.map((item) => (
                        <Link key={item.name} href={item.path} className="block border p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700">
                            <div>
                                <h2 className="text-gray-900 dark:text-gray-50 text-lg md:text-xl">
                                    {item.name}
                                </h2>
                                <p className="text-sm font-normal text-gray-900 dark:text-gray-100 mt-2 leading-loose">
                                    {item.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

AstraFoundationPage.displayName="AstraFoundationPage";
export default AstraFoundationPage;
