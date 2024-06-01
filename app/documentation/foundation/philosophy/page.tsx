// pages/foundation/philosophy.tsx
'use client';

import React from 'react';
import Layout from '../../../../components/Layout/Layout';

const PhilosophyPage: React.FC = () => {
    return (
        <Layout>
            <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-300 mb-2">
                Foundation
            </div>
            <h1 className="text-lg md:text-2xl font-medium mb-4">Astra UI Philosophy</h1>
            <div className="leading-relaxed space-y-4">
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

export default PhilosophyPage;
