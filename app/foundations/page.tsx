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
            <h1 className="text-2xl md:text-4xl font-medium mb-3 text-gray-900 dark:text-gray-50">Foundations</h1>
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
                                    {item.description}
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
