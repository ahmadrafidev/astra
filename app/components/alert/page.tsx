import React from 'react';
import type { Metadata } from "next";

import Layout from '@/components/Layout/Layout';
import Badge from '@/components/Badge/Badge';

import { Alert, AlertTitle, AlertContent} from '@/components/Alert/Alert';
import AlertDocumentation from '@/components/Alert/AlertDocumentation';

export const metadata: Metadata = {
    title: "Alert",
    description: "A prominent message that informs users about important events or status changes.",
};

const AlertPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Components" />
            {/* Header Content */}
            <section className="mb-5">
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-3 md:mb-4">Alert</h1>
                    <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                        A prominent message that informs users about important events or status changes.
                    </p>
                </div>
            </section>
            {/* Alert Variants Section */}
            <section className="mb-5">
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Variants</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">Info Alert</h3>
                        <Alert type="info" title="This is an information alert" isDismissible>
                        </Alert>
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">Success Alert</h3>
                        <Alert type="success" isDismissible>
                            <AlertTitle>This is a success alert</AlertTitle>
                            <AlertContent>A little bit of a content here</AlertContent>
                        </Alert>
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">Warning Alert</h3>
                        <Alert type="warning" isDismissible>
                            <AlertTitle>This is a warning alert</AlertTitle>
                        </Alert>
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">Error Alert</h3>
                        <Alert type="error" isDismissible>
                            <AlertTitle>This is an error alert</AlertTitle>
                        </Alert>
                    </div>
                </div>
            </section>
            <AlertDocumentation/>
        </Layout>
    );
};

AlertPage.displayName = "AlertPage";
export default AlertPage;
