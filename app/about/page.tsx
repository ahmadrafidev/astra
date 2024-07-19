import React from 'react';
import Link from 'next/link';

import { Tabs, Tab } from '../../components/Tabs/Tabs';
import Layout from '../../components/Layout/Layout';
import Badge from '../../components/Badge/Badge';

import { foundationList, componentsList } from '../../utils/constants/route';

const AboutAstraPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="About" />
            <h1 className="text-2xl md:text-4xl font-medium mb-4 text-gray-900 dark:text-white">Overview</h1>
            <div className="mb-8">
                <section>
                    <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Purposes</h2>
                    <p className="text-sm md:text-base mb-2 leading-relaxed text-gray-900 dark:text-gray-50">
                        The main purpose of Astra UI is to provide a space where I can explore and refine the process of creating high-quality React components. This project serves as both a portfolio of my work and a resource for other developers who are looking to understand and implement similar components in their own projects.
                    </p>
                </section>
                <section className="mb-4 text-gray-900 dark:text-gray-50">
                    <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Principles</h2>
                    <h3 className="text-sm md:text-base mb-2">
                        <span className="font-semibold">Consistent</span>
                        <p>Ensure that all components adhere to a unified design language, providing a cohesive and professional look and feel across applications.</p>
                    </h3>
                    <h3 className="text-sm md:text-base mb-2">
                        <span className="font-semibold">Reusable</span>
                        <p>Develop components that can be easily reused across different projects, reducing the need for redundant code and promoting efficient development practices.</p>
                    </h3>
                    <h3 className="text-sm md:text-base mb-2">
                        <span className="font-semibold">Accessible</span>
                        <p>Prioritize accessibility in all components to ensure that they can be used by a wide range of users, including those with disabilities.</p>
                    </h3>
                    <h3 className="text-sm md:text-base mb-2">
                        <span className="font-semibold">Customizable</span>
                        <p>Provide options for customization to allow developers to adapt components to their specific needs and branding guidelines.</p>
                    </h3>
                </section>
                <section className="flex flex-col">
                    <h2 className="text-xl md:text-2xl font-medium mb-2 text-gray-900 dark:text-gray-50">Why AstraUI?</h2>
                    <p className="text-sm md:text-base mb-4 leading-relaxed text-gray-900 dark:text-gray-50">
                        Astra UI aims to be a versatile toolset for developers, enabling them to create beautiful, functional, and accessible web applications with ease. 
                        Whether you are building a simple website or a complex web application, Astra UI provides the foundational components you need to get started quickly and efficiently.
                    </p>
                </section>
            </div>
        </Layout>
    );
};

export default AboutAstraPage;
