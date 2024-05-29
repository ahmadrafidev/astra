// pages/documentation/index.tsx
import React from 'react';
import Layout from '../../components/Layout/Layout';

const Page: React.FC = () => {
    return (
        <Layout>
            <h1 className="text-3xl font-bold mb-4">Astra UI Documentation</h1>
            <p className="text-lg font-normal">Select a component from the sidebar to see its documentation and usage examples.</p>
        </Layout>
    );
};

export default Page;
