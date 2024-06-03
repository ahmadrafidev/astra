// pages/documentation/components/accordion.tsx
'use client';

import React from 'react';
import Layout from '../../../../components/Layout/Layout';
import Accordion from '../../../../components/Accordion/Accordion';

const AccordionPage: React.FC = () => {
    return (
        <Layout>
            <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-300 mb-2">
                Components
            </div>
            <h1 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Accordion Component</h1>
        </Layout>
    );
};

export default AccordionPage;
