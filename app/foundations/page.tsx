import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";

import Layout from '@/components/Layout/Layout';
import Badge from '@/components/Badge/Badge';

import { foundationList } from '@/utils/constants/route';

export const metadata: Metadata = {
    title: "Foundation",
    description: "The fundamental principles and philosophy of the AstraUI design system.",
};

const AstraFoundationPage: React.FC = () => {

    const sortedFoundationList = [...foundationList].sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    return (
        <Layout>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50">Foundations</h1>
            <div className="my-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {sortedFoundationList.map((item) => (
                        <Link key={item.name} href={item.path} className="block border p-4 rounded-lg transition-all duration-300 bg-zinc-50 dark:bg-zinc-950 hover:shadow-lg hover:bg-zinc-100 dark:hover:bg-zinc-800/90 dark:border-gray-700">
                            <div>
                                <h2 className="text-gray-900 dark:text-white text-lg md:text-xl font-normal">
                                    {item.name}
                                </h2>
                                <p className="text-sm text-gray-700 dark:text-gray-100 mt-2 leading-loose font-normal">
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
