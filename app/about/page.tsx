import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";

import Layout from '@/components/Layout/Layout';
import Badge from '@/components/Badge/Badge';
import TOC from '@/components/TOC/TOC';

export const metadata: Metadata = {
    title: "About",
    description: "The core principles of AstraUI, designed to facilitate the creation of accessible, consistent, and reusable user interfaces.",
};

const AboutAstraPage: React.FC = () => {
    const tocItems = [
        { id: 'vision', label: 'Vision: The Master Plan' },
        { id: 'principles', label: 'Design Principles' },
        { id: 'philosophy', label: 'Why AstraUI?' },
    ];

    return (
        <Layout>
            <div className="flex">
                <div className="w-4/5 pr-2">
                    <div id="about" className="flex flex-col mb-5 scroll-mt-16">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">About</h1>
                    </div>

                    <section id="vision" className="mb-8 text-justify scroll-mt-20">
                        <div className="mb-3 md:mb-4">
                            <h2 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-50 mb-1">Vision: The Master Plan</h2>
                            <p className="text-sm md:text-base font-sans text-gray-700 dark:text-gray-50 text-justify leading-relaxed">
                                AstraUI aims to simplify user interface development by providing a unified component library that works seamlessly across web, iOS, and Android platforms. 
                                This empowers developers and designers to create consistent, accessible, and reusable components, driving faster innovation and interface development that can lead to excellence in user interface design
                                for building a great product efficiently.
                            </p>
                        </div>
                    </section>

                    <section id="principles" className="mb-8 text-justify  scroll-mt-20">
                        <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Design Principles</h2>
                        <ul className="space-y-3 md:space-y-5">
                            <li>
                                <h3 className="text-gray-900 dark:text-gray-50 text-lg md:text-xl font-medium">Consistent</h3>
                                <p className="text-gray-700 dark:text-gray-50 leading-relaxed text-sm md:text-base font-sans font-normal">
                                    AstraUI ensures all components adhere to a unified design system, providing a cohesive look and feel across applications. 
                                    Consistency is key to maintaining visual and functional harmony, governed by guidelines on color palettes, typography, motion, and component behavior. 
                                    By following these standards, developers and designers can create visually appealing and intuitive interfaces. 
                                    This consistency builds a recognizable brand identity and enhances user experience through familiar interaction patterns.
                                </p>
                            </li>
                            <li>
                                <h3 className="text-gray-900 dark:text-gray-50 text-lg md:text-xl font-medium">Reusable</h3>
                                <p className="text-gray-700 dark:text-gray-50 leading-relaxed text-sm md:text-base font-sans font-normal">
                                    AstraUI components are designed for easy reuse across projects, increasing efficiency and reducing redundant code. 
                                    Each standalone, modular component can be integrated into multiple projects with minimal effort, ensuring a consistent look and feel while reducing development time. 
                                    This reuse also facilitates collaboration, allowing teams to easily share and leverage the same components. 
                                    Additionally, AstraUI components are built with scalability in mind, ensuring they work seamlessly across screen sizes and devices.
                                </p>
                            </li>
                            <li>
                                <h3 className="text-gray-900 dark:text-gray-50 text-lg md:text-xl font-medium">Accessible</h3>
                                <p className="text-gray-700 dark:text-gray-50 leading-relaxed text-sm md:text-base font-sans font-normal">
                                    Built on top of <a href="https://www.w3.org/TR/wai-aria/" className="text-blue-800 dark:text-blue-400 underline hover:no-underline focus:no-underline">WAI-ARIA</a>, 
                                    AstraUI is built with accessibility at its core, ensuring seamless interaction for all users. 
                                    By prioritizing inclusive design, AstraUI creates interfaces that meet a variety of needs.
                                    Leveraging the WAI-ARIA specification, AstraUI ensures that its components are fully accessible, such as complying to WCAG guidelines by properly managing focus, keyboard interactions, and ARIA attributes. 
                                    This commitment enhances both usability and robustness, making AstraUI a reliable choice for everyone.
                                </p>
                            </li>
                            <li>
                                <h3 className="text-gray-900 dark:text-gray-50 text-lg md:text-xl font-medium">Customizable</h3>
                                <p className="text-gray-700 dark:text-gray-50 leading-relaxed text-sm md:text-base font-sans font-normal">
                                    AstraUI components are highly customizable to meet specific needs and branding guidelines.
                                    At the core of this customizability, each component offers flexible yet robust system that allows for extensive customization across various aspects such as themes, styles, typography, gestures, and other visual attributes, allowing developers and designers to override defaults and apply custom styles for their product.
                                    This empowers developers and designers to create unique, branded user interfaces without compromising component integrity.
                                </p>
                            </li>
                        </ul>
                    </section>

                    <section id="philosophy" className="flex flex-col text-justify  scroll-mt-20">
                        <h2 className="text-xl md:text-2xl font-medium mb-1 text-gray-900 dark:text-gray-50">Why AstraUI: The Philosophy Behind Astra</h2>
                        <p className="text-sm md:text-base mb-4 text-gray-700 dark:text-gray-50 font-sans leading-5">
                            AstraUI derives its name and philosophy from “astra,” a term rich in cross-cultural meaning, embodying divine power and heavenly guidance. 
                            This concept is reflected in the AstraUI design system’s ability to empower developers and designers with powerful and precise tools to create impactful user interfaces across the web, iOS, and Android. 
                            Built on four core principles—consistency, reuse, accessibility, and customization—AstraUI serves as a beacon for developers navigating the complexities of multi-platform UI design. 
                            The goal of AstraUI is to provide a comprehensive and flexible system that streamlines the development process, ensures a cohesive user experience, and adapts to a variety of project needs across the digital landscape.
                        </p>
                    </section>
                </div>
                <TOC items={tocItems} />
            </div>
        </Layout>
    );
};

AboutAstraPage.displayName = "AboutAstraPage";
export default AboutAstraPage;
