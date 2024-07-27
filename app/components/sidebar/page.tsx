// pages/documentation/components/select.tsx
'use client';

import React from 'react';

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';

const SidebarPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Components" />
            <h1 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Sidebar</h1>
        </Layout>
    );
};

SidebarPage.displayName="SidebarPage"
export default SidebarPage;
