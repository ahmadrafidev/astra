// app/components/accordion/page.tsx

import React from 'react';
import type { Metadata } from "next";

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';
import { Accordion } from '../../../components/Accordion/Accordion';
import { AccordionItem } from '../../../components/Accordion/AccordionItem';

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
                        <h3 className="text-base md:text-lg font-normal font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
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
                        <h3 className="text-base md:text-lg font-normal font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
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
                        <h3 className="text-base md:text-lg font-normal font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
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
                        <h3 className="text-base md:text-lg font-normal font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
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

            {/* Props Section */}
            <section className="my-5">
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Props</h2>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Accordion Props</h3>
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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">children</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">ReactNode</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The AccordionItem components to be rendered.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling the Accordion container.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">itemClassName</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling each AccordionItem.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">border</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Border style for the accordion items.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">selectionMode</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">single, multiple</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">single</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Determines if multiple items can be open simultaneously.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">variant</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">default, split</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">default</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Determines the layout style of the accordion.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow mt-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">AccordionItem Props</h3>
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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling individual AccordionItems.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">title</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The title of the accordion item.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">subtitle</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Optional subtitle for the accordion item.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">children</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">ReactNode</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The content of the accordion item.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">isOpen</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">boolean</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">false</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Determines if the item is expanded.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onToggle</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">function</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">void</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Function to call when toggling the item.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Best Practices Section */}
            <section>
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">1. Use accordions to organize content in a compact way, allowing users to expand sections as needed.</p>
                    <p className="text-gray-700 dark:text-gray-300">2. Ensure that the titles of accordion items are descriptive and concise.</p>
                    <p className="text-gray-700 dark:text-gray-300">3. Consider the user experience on both desktop and mobile devices, ensuring that the accordion is easy to interact with on all screen sizes.</p>
                    <p className="text-gray-700 dark:text-gray-300">4. Implement proper color contrast for both light and dark modes to ensure readability and accessibility.</p>
                    <p className="text-gray-700 dark:text-gray-300">5. Use the multiple selection mode when users might need to compare information across different sections.</p>
                    <p className="text-gray-700 dark:text-gray-300">6. Provide visual feedback for hover and focus states to improve usability, especially for keyboard navigation.</p>
                    <p className="text-gray-700 dark:text-gray-300">7. Consider using animations for expanding and collapsing to provide a smooth user experience, but ensure they are not too slow or distracting.</p>
                    <p className="text-gray-700 dark:text-gray-300">8. Use the split variant when you want to visually separate accordion items, especially for longer lists.</p>
                    <p className="text-gray-700 dark:text-gray-300">9. Consider adding icons or visual indicators alongside titles to provide additional context or categorization for each item.</p>
                </div>
            </section>
        </Layout>
    );
};

AccordionPage.displayName = "AccordionPage";
export default AccordionPage;

