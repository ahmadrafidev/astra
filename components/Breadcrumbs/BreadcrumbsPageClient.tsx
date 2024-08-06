'use client';

import React from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Breadcrumbs from './Breadcrumbs';
import BreadcrumbsDocumentation from './BreadcrumbsDocumentation';

const BreadcrumbsPageClient: React.FC = () => {
    const pageItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Components', path: '/components' },
        { name: 'Breadcrumbs', path: '/components/breadcrumbs' },
    ];

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Breadcrumbs</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A navigation aid showing the user location within a website hierarchy.
                </p>
            </div>      
            <Breadcrumbs
                items={pageItems}
                className="my-4"
                />
            <BreadcrumbsDocumentation />
        </Layout>
    );
};

BreadcrumbsPageClient.displayName = "BreadcrumbsPageClient";
export default BreadcrumbsPageClient;
