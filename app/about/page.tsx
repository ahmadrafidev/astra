import React from 'react';
import Link from 'next/link';

import { Tabs, Tab } from '../../components/Tabs/Tabs';
import Layout from '../../components/Layout/Layout';

import { foundationList, componentsList } from '../../utils/constants/route';


const AboutAstraPage: React.FC = () => {
    return (
        <Layout>
            <h1 className="text-2xl md:text-4xl font-medium mb-4 text-gray-900 dark:text-white">Overview</h1>
            <div className="mb-8">
                <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Purposes</h2>
                <p className="text-sm md:text-base mb-4 leading-relaxed text-gray-900 dark:text-gray-50">
                    The main purpose of Astra UI is to provide a space where I can explore and refine the process of creating high-quality React components. This project serves as both a portfolio of my work and a resource for other developers who are looking to understand and implement similar components in their own projects.
                </p>
                <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Principles</h2>
                <ul className="list-disc pl-6 mb-4 text-gray-900 dark:text-gray-50">
                    <li className="text-sm md:text-base mb-2">
                        <strong>Consistent:</strong> Ensure that all components adhere to a unified design language, providing a cohesive and professional look and feel across applications.
                    </li>
                    <li className="text-sm md:text-base mb-2">
                        <strong>Reusable:</strong> Develop components that can be easily reused across different projects, reducing the need for redundant code and promoting efficient development practices.
                    </li>
                    <li className="text-sm md:text-base mb-2">
                        <strong>Accessible:</strong> Prioritize accessibility in all components to ensure that they can be used by a wide range of users, including those with disabilities.
                    </li>
                    <li className="text-sm md:text-base mb-2">
                        <strong>Customizable:</strong> Provide options for customization to allow developers to adapt components to their specific needs and branding guidelines.
                    </li>
                </ul>
                <div className="flex flex-col ">
                    <p className="text-sm md:text-base mb-4 leading-relaxed text-gray-900 dark:text-gray-50">
                        Astra UI aims to be a versatile toolset for developers, enabling them to create beautiful, functional, and accessible web applications with ease. 
                        Whether you are building a simple website or a complex web application, Astra UI provides the foundational components you need to get started quickly and efficiently.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default AboutAstraPage;
