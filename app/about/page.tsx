import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";

import { Tabs, Tab } from '../../components/Tabs/Tabs';
import Layout from '../../components/Layout/Layout';
import Badge from '../../components/Badge/Badge';

import { foundationList, componentsList } from '../../utils/constants/route';

export const metadata: Metadata = {
    title: "Overview",
    description: "The building blocks of modern UI",
};

const AboutAstraPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="About" />
            <h1 className="text-2xl md:text-4xl font-medium mb-4 text-gray-900 dark:text-white">Overview</h1>
            <div className="mb-8 text-justify">
                <section className="mb-4">
                    <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Purposes</h2>
                    <p className="text-base md:text-lg text-gray-900 dark:text-gray-50 font-sans leading-4">
                        AstraUI is designed to provide a platform for developers to explore and perfect the creation of high-quality React components. 
                        It serves as both a showcase of work and a resource for developers looking to implement similar components, fostering learning and innovation in UI development.
                    </p>
                </section>
                <section className="mb-4 text-gray-900 dark:text-gray-50 font-sans">
                    <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Design Principles</h2>
                    <h3 className="text-base md:text-lg mb-2">
                        <span className="font-semibold">Consistent</span>
                        <p>Ensure that all components adhere to a unified design language, providing a cohesive and professional look and feel across applications.</p>
                    </h3>
                    <h3 className="text-base md:text-lg mb-2">
                        <span className="font-semibold">Reusable</span>
                        <p>Components are designed for easy reuse across projects, promoting efficiency and reducing redundant code.</p>
                    </h3>
                    <h3 className="text-base md:text-lg mb-2">
                        <span className="font-semibold">Accessible</span>
                        <p>Built on top of <a href="https://react-spectrum.adobe.com/react-aria/" className="text-blue-500">React Aria</a>, AstraUI prioritizes accessibility, ensuring all users can interact seamlessly.</p>
                    </h3>
                    <h3 className="text-base md:text-lg mb-2">
                        <span className="font-semibold">Customizable</span>
                        <p>Components are easily adaptable to specific needs and branding guidelines.</p>
                    </h3>
                </section>
                <section className="flex flex-col">
                    <h2 className="text-xl md:text-2xl font-medium mb-2 text-gray-900 dark:text-gray-50">Why AstraUI?</h2>
                    <p className="text-base md:text-lg mb-4 text-gray-900 dark:text-gray-50 font-sans leading-4">
                        AstraUI is a versatile toolkit that empowers developers to create beautiful, functional, and inclusive web applications effortlessly.
                        Whether you are building a simple website or a complex web application, AstraUI provides the foundational components you need to get started quickly and efficiently, 
                        with advanced accessibility features from React Aria ensuring inclusivity for all users.
                    </p>
                </section>
            </div>
        </Layout>
    );
};

export default AboutAstraPage;
