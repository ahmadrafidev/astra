// pages/foundation/philosophy.tsx
'use client';

import React from 'react';
import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';

const AstraPhilosophyPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Foundations" />
            <h1 className="text-xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Philosophy</h1>
            <div className="leading-relaxed space-y-4 text-gray-900 dark:text-gray-50">
                <p className="text-sm md:text-base">
                    Astra UI is driven by a set of core principles aimed at making web development more consistent, efficient, and accessible. The philosophy of Astra UI revolves around the following key tenets:
                </p>
                <h2 className="text-lg font-semibold">1. Consistency</h2>
                <p className="text-sm md:text-base">
                    I believe in maintaining a unified design language across all components. This ensures a cohesive look and feel, enhancing the overall user experience. Consistency is key to reducing cognitive load and creating intuitive interfaces.
                </p>
                <h2 className="text-lg font-semibold">2. Reusability</h2>
                <p className="text-sm md:text-base">
                    Components should be designed to be reusable across different projects. By creating modular and flexible components, I aim to reduce redundant code and streamline the development process.
                </p>
                <h2 className="text-lg font-semibold">3. Accessibility</h2>
                <p className="text-sm md:text-base">
                    Accessibility is at the forefront of my design philosophy. I strive to create components that are usable by everyone, including individuals with disabilities. Ensuring that my components meet accessibility standards is a top priority.
                </p>
                <h2 className="text-lg font-semibold">4. Customizability</h2>
                <p className="text-sm md:text-base">
                    I understand that every project has unique needs. My components are designed to be easily customizable, allowing developers to tailor them to fit their specific requirements and branding guidelines.
                </p>
            </div>
        </Layout>
    );
};

export default AstraPhilosophyPage;
