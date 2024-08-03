// app/components/accordion/page.tsx

import React from 'react';
import type { Metadata } from "next";

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';
import { Accordion } from '../../../components/Accordion/Accordion';
import { AccordionItem } from '../../../components/Accordion/AccordionItem';
import AccordionDocumentation from '../../../components/Accordion/AccordionDocumentation';

export const metadata: Metadata = {
    title: "Accordion",
    description: "A vertically stacked set of interactive headings that expand to reveal associated content.",
};

const AccordionPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Components" />

            {/* Header Content */}
            <section className="mb-5">
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-3 md:mb-4">Accordion</h1>
                    <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                        A vertically stacked set of interactive headings that expand to reveal associated content.
                    </p>
                </div>
            </section>

            {/* Accordion Variants Section */}
            <section className="mb-5">
                <h2 className="text-lg md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Variants</h2>
                <div className="space-y-4 flex flex-col justify-around">
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Default Accordion
                        </h3>
                        <Accordion
                            className="overflow-hidden rounded-lg"
                            itemClassName="first:rounded-t-lg last:rounded-b-lg"
                            border="border-gray-300 dark:border-gray-700"
                            selectionMode="single"
                            variant="default"
                        >
                            <>
                                <AccordionItem title="Accordion 1">
                                    Content for accordion 1
                                </AccordionItem>
                                <AccordionItem title="Accordion 2">
                                    Content for accordion 2
                                </AccordionItem>
                            </>
                        </Accordion>
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Default Accordion with Subtitle
                        </h3>
                        <Accordion
                            className="overflow-hidden rounded-lg"
                            itemClassName="first:rounded-t-lg last:rounded-b-lg"
                            border="border-gray-300 dark:border-gray-700"
                            selectionMode="single"
                            variant="default"
                        >
                            <>
                                <AccordionItem title="Accordion 1" subtitle="Accordion 1 Subtitle">
                                    Content for accordion 1
                                </AccordionItem>
                                <AccordionItem title="Accordion 2" subtitle="Accordion 1 Subtitle">
                                    Content for accordion 2
                                </AccordionItem>
                            </>
                        </Accordion>
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Accordion with Multiple Open 
                        </h3>
                        <Accordion
                            className="overflow-hidden rounded-lg"
                            itemClassName="first:rounded-t-lg last:rounded-b-lg"
                            border="border-gray-300 dark:border-gray-700"
                            selectionMode="multiple"
                            variant="default"
                        >
                            <>
                                <AccordionItem title="Accordion 1" subtitle="Accordion 1 Subtitle">
                                    Content for accordion 1
                                </AccordionItem>
                                <AccordionItem title="Accordion 2" subtitle="Accordion 1 Subtitle">
                                    Content for accordion 2
                                </AccordionItem>
                            </>
                        </Accordion>
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Split Accordion
                        </h3>
                        <Accordion
                            className="overflow-hidden rounded-lg"
                            border="border-gray-300 dark:border-gray-700"
                            selectionMode="single"
                            variant="split"
                        >
                            <>
                                <AccordionItem title="Accordion 1">
                                    Content for accordion 1
                                </AccordionItem>
                                <AccordionItem title="Accordion 2">
                                    Content for accordion 2
                                </AccordionItem>
                            </>
                        </Accordion>
                    </div>
                </div>
            </section>
            <AccordionDocumentation/>
        </Layout>
    );
};

AccordionPage.displayName = "AccordionPage";
export default AccordionPage;

