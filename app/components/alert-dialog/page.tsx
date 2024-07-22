import React from 'react';
import type { Metadata } from "next";

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';

export const metadata: Metadata = {
    title: "AlertDialog",
    description: "",
};

const AlertDialogPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Components" />
            <h1 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Alert Dialog </h1>
        </Layout>
    );
};

export default AlertDialogPage;
