import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";

import { Tabs, Tab } from '../../components/Tabs/Tabs';
import Layout from '../../components/Layout/Layout';
import Badge from '../../components/Badge/Badge';

export const metadata: Metadata = {
    title: "Overview",
    description: "Explore the core principles and components of AstraUI, designed to facilitate the creation of accessible, consistent, and reusable user interfaces.",
};

const AboutAstraPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="About" />
            <h1 className="text-2xl md:text-4xl font-medium mb-4 text-gray-900 dark:text-white">Overview</h1>
            <div className="mb-8 text-justify">
                <section className="mb-3 md:mb-4">
                    <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Purpose</h2>
                    <p className="text-sm md:text-base text-gray-900 dark:text-gray-50 leading-5 text-justify">
                        AstraUI is designed to provide a platform for developers to explore and perfect the creation of high-quality React components. 
                        It serves as both a showcase of work and a resource for developers looking to implement similar components, fostering learning and innovation in UI development.
                    </p>
                </section>
                <section className="mb-3 md:mb-4">
                    <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Design Principles</h2>
                    <ul className="text-gray-900 dark:text-gray-50 space-y-3 md:space-y-4">
                        <li>
                            <h3 className="text-lg font-medium">Consistent</h3>
                            <p className="text-base font-sans font-normal">Ensure that all components adhere to a unified design language, providing a cohesive and professional look and feel across applications.</p>
                        </li>
                        <li>
                            <h3 className="text-lg font-medium">Reusable</h3>
                            <p className="text-base font-sans font-normal">Components are designed for easy reuse across projects, promoting efficiency and reducing redundant code.</p>
                        </li>
                        <li>
                            <h3 className="text-lg font-medium">Accessible</h3>
                            <p className="text-base font-sans font-normal">
                                Built on top of <a href="https://react-spectrum.adobe.com/react-aria/" className="text-blue-800 dark:text-blue-400 underline hover:no-underline focus:no-underline">React Aria</a>, AstraUI prioritizes accessibility, ensuring all users can interact seamlessly.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-medium">Customizable</h3>
                            <p className="text-base font-sans font-normal">Components are easily adaptable to specific needs and branding guidelines.</p>
                        </li>
                    </ul>
                </section>
                <section className="flex flex-col">
                    <h2 className="text-xl md:text-2xl font-medium mb-2 text-gray-900 dark:text-gray-50">Why AstraUI?</h2>
                    <p className="text-sm md:text-base mb-4 text-gray-900 dark:text-gray-50 font-sans leading-5 text-justify">
                        AstraUI is a versatile toolkit that empowers developers to create beautiful, functional, and inclusive web applications effortlessly.
                        Whether you are building a simple website or a complex web application, AstraUI provides the foundational components you need to get started quickly and efficiently, 
                        with advanced accessibility features from React Aria ensuring inclusivity for all users.
                    </p>
                </section>
            </div>
        </Layout>
    );
};

AboutAstraPage.displayName = "AboutAstraPage";
export default AboutAstraPage;
