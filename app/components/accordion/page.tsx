// app/components/accordion/page.tsx
import React from 'react';
import type { Metadata } from "next";

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';
import { Accordion, AccordionItem } from '../../../components/Accordion/Accordion';

export const metadata: Metadata = {
    title: "Accordion",
    description: "A component to display expandable and collapsible content sections.",
};

const AccordionPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Components" />
            {/* Header Content */}
            <section className="mb-5">
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-semibold font-sans text-gray-900 dark:text-gray-50 mb-3 md:mb-4">Accordion</h1>
                    <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                        Accordions are used to toggle the visibility of sections of content. Below are various accordion styles with different use cases.
                    </p>
                </div>
            </section>
            {/* Accordion Variants Section */}
            <section className="mb-5">
                <h2 className="text-2xl md:text-3xl font-semibold font-sans text-gray-900 dark:text-gray-50 mb-5">Variants</h2>
                <div className="space-y-4">
                    <Accordion className="max-w-md mx-auto">
                        <AccordionItem title="Section 1">
                            <p className="text-gray-700 dark:text-gray-300">This is the content of section 1.</p>
                        </AccordionItem>
                        <AccordionItem title="Section 2">
                            <p className="text-gray-700 dark:text-gray-300">This is the content of section 2.</p>
                        </AccordionItem>
                        <AccordionItem title="Section 3">
                            <p className="text-gray-700 dark:text-gray-300">This is the content of section 3.</p>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
            {/* Props Section */}
            <section>
                <h2 className="text-2xl md:text-3xl font-semibold font-sans text-gray-900 dark:text-gray-50 mb-5">Props</h2>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow">
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr>
                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Name</th>
                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Type</th>
                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Default</th>
                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">title</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The title of the accordion item.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">children</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">ReactNode</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The content of the accordion item.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            {/* Best Practices Section */}
            <section>
                <h2 className="text-2xl md:text-3xl font-semibold font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">Use accordions to organize content in a compact way, allowing users to expand sections as needed.</p>
                    <p className="text-gray-700 dark:text-gray-300">Ensure that the titles of accordion items are descriptive and concise.</p>
                    <p className="text-gray-700 dark:text-gray-300">Consider the user experience on both desktop and mobile devices, ensuring that the accordion is easy to interact with on all screen sizes.</p>
                </div>
            </section>
        </Layout>
    );
};

AccordionPage.displayName = "AccordionPage";
export default AccordionPage;

