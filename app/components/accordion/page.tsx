// pages/documentation/components/accordion.tsx
'use client';

import React from 'react';

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';

const AccordionPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Components" />
            <h1 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Accordion</h1>
        </Layout>
    );
};

export default AccordionPage;
