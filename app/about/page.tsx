import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";

import { Tabs, Tab } from '@/components/Tabs/Tabs';
import Layout from '@/components/Layout/Layout';
import Badge from '@/components/Badge/Badge';

export const metadata: Metadata = {
    title: "Overview",
    description: "The core principles of AstraUI, designed to facilitate the creation of accessible, consistent, and reusable user interfaces.",
};

const AboutAstraPage: React.FC = () => {
    return (
        <Layout>
            <Badge ariaLabel="About Title Badge" text="About" />
            <h1 className="text-2xl md:text-4xl font-medium mb-4 text-gray-900 dark:text-white">Overview</h1>
            <div className="mb-8 text-justify">
                <div className="mb-3 md:mb-4">
                    <h2 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-50 mb-1">Purpose</h2>
                    <p className="text-sm md:text-base font-sans text-gray-700 dark:text-gray-50 text-justify leading-relaxed">
                        AstraUI aims to simplifies User Interface development by providing a unified component library that works seamlessly across web, iOS, and Android platforms. 
                        This empowers developers and designers to create consistent, accessible, and reusable components, driving innovation and excellence in User Interface design.
                    </p>
                </div>
                <div className="mb-3 md:mb-4">
                    <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Design Principles</h2>
                    <ul className="space-y-3 md:space-y-5">
                        <li>
                            <h3 className="text-gray-900 dark:text-gray-50 text-lg md:text-xl font-medium">Consistent</h3>
                            <p className="text-gray-700 dark:text-gray-50 leading-relaxed text-sm md:text-base font-sans font-normal">
                                AstraUI ensures all components adhere to a unified design system, providing a cohesive look and feel across applications. 
                                Consistency is key to maintaining visual and functional harmony, governed by guidelines on color palettes, typography, motion, and component behavior. 
                                By following these standards, developers and designers create visually appealing and intuitive interfaces. 
                                This consistency builds a recognizable brand identity and enhances user experience through familiar interaction patterns.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-gray-900 dark:text-gray-50 text-lg md:text-xl font-medium">Reusable</h3>
                            <p className="text-gray-700 dark:text-gray-50 leading-relaxed text-sm md:text-base font-sans font-normal">
                                AstraUI components are designed for easy reuse across projects, increasing efficiency and reducing repetitive code. 
                                Each modular and self-contained component can be integrated into multiple projects with minimal effort, ensuring consistent look and feel while reducing development time and bugs. 
                                This reusability also facilitates collaboration, allowing teams to share and leverage the same components effortlessly.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-gray-900 dark:text-gray-50 text-lg md:text-xl font-medium">Accessible</h3>
                            <p className="text-gray-700 dark:text-gray-50 leading-relaxed text-sm md:text-base font-sans font-normal">
                                Built on top of <a href="https://react-spectrum.adobe.com/react-aria/" className="text-blue-800 dark:text-blue-400 underline hover:no-underline focus:no-underline">React Aria</a>, 
                                AstraUI prioritizes accessibility to ensure all users can interact seamlessly. 
                                Accessibility is a core principle, aiming to create inclusive interfaces for diverse needs. 
                                React Aria provides hooks and utilities for managing focus, keyboard interactions, and ARIA attributes, enabling AstraUI to build fully accessible components that adhere to WCAG guidelines. 
                                This commitment enhances usability and robustness for everyone.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-gray-900 dark:text-gray-50 text-lg md:text-xl font-medium">Customizable</h3>
                            <p className="text-gray-700 dark:text-gray-50 leading-relaxed text-sm md:text-base font-sans font-normal">
                                AstraUI components are highly customizable to meet specific needs and branding guidelines. 
                                Each component offers flexible options for themes, styles, and gestures, allowing developers to override defaults and apply custom styles. 
                                This empowers developers to create unique, branded user interfaces without compromising component integrity.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-xl md:text-2xl font-medium mb-1 text-gray-900 dark:text-gray-50">Why AstraUI?</h2>
                    <p className="text-sm md:text-base mb-4 text-gray-700 dark:text-gray-50 font-sans leading-5 text-justify">
                        AstraUI is your ultimate toolkit for creating beautiful, functional, and inclusive applications across web, iOS, and Android. 
                        Whether you&apos;re building a simple website or a complex app, AstraUI provides the foundational components you need to get started quickly and efficiently.
                        Experience seamless integration and consistent design across all platforms with AstraUI.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

AboutAstraPage.displayName = "AboutAstraPage";
export default AboutAstraPage;
