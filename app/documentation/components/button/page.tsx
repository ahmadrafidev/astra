// pages/documentation/button.tsx
'use client';

import React from 'react';
import Layout from '../../../../components/Layout/Layout';
import Button from '../../../../components/Button/Button';

const ButtonPage: React.FC = () => {
    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-50">Button Component</h1>
                <div className="mb-4">
                    <Button onClick={() => alert('Button clicked!')} variant="default">Default Button</Button>
                </div>
                <div className="mb-4">
                    <Button onClick={() => alert('Destructive Button clicked!')} variant="destructive">Destructive Button</Button>
                </div>
                <div className="mb-4">
                    <Button onClick={() => alert('Outline Button clicked!')} variant="outline">Outline Button</Button>
                </div>
                <div className="mb-4">
                    <Button onClick={() => alert('Secondary Button clicked!')} variant="secondary">Secondary Button</Button>
                </div>
                <div className="mb-4">
                    <Button onClick={() => alert('Ghost Button clicked!')} variant="ghost">Ghost Button</Button>
                </div>
                <div className="mb-4">
                    <Button onClick={() => alert('Link Button clicked!')} variant="link">Link Button</Button>
                </div>
                <pre className="bg-gray-100 p-4 rounded">
                    {`import Button from '../../components/Button/Button';

                const ButtonPage: React.FC = () => (
                <Button onClick={() => alert('Button clicked!')} variant="default">Default Button</Button>
                );
                    export default ButtonPage;
                    `}
                </pre>
        </Layout>
    );
};

export default ButtonPage;
