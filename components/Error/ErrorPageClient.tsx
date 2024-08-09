'use client';

import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Error from './Error';
import ErrorDocumentation from './ErrorDocumentation';

const ErrorPageClient: React.FC = () => {
    const [showError, setShowError] = useState(true);

    const handleRetry = () => {
        setShowError(false);
        setTimeout(() => setShowError(true), 800);
    };

    const handleCancel = () => {
        setShowError(false);
        setTimeout(() => setShowError(true), 2000); // should be dismissed, timeout for display purpose only
    };

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-2 text-gray-900 dark:text-gray-50">Error</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    Displays error notifications or message to users in a consistent manner.
                </p>
            </div>
            {showError && (
                <div>
                    <Error 
                        type="network"
                        title="Network error"
                        message="Please check your internet connection or try again"
                        primaryAction={{
                            label: "Retry",
                            onClick: () => handleRetry()
                        }}
                        secondaryAction={{
                            label: "Cancel",
                            onClick: () => handleCancel()
                        }}
                    />
                </div>
            )}
            <ErrorDocumentation/>
        </Layout>
    );
};

ErrorPageClient.displayName = "ErrorPageClient";
export default ErrorPageClient;
