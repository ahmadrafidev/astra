/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import { Metadata } from 'next';

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Content Standard',
        description: 'Understand the content standards that guide the creation and presentation of information within AstraUI.',
    };
}

const AstraContentStandardPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Foundations" />
            <main>
                <section className="mb-3 md:mb-4">
                    <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Content Standard</h1>
                    <p className="mb-4 text-gray-900 dark:text-gray-50 text-justify font-normal">
                        AstraUI emphasizes clarity, consistency, and conciseness in all written content. 
                        By following established guidelines for tone, voice, and style, 
                        AstraUI ensures that its messaging is easily understood and aligns with its communication goals.
                    </p>
                </section>
                <section>
                    <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Principles</h2>
                    <p className="mb-4 text-gray-900 dark:text-gray-50 text-justify font-normal">
                        The principles of content standards in AstraUI are designed to ensure that all written materials are effective and align with the brand's communication goals.
                    </p>
                    <ul className="list-disc pl-5 mb-4 text-gray-900 dark:text-gray-50 space-y-3 md:space-y-4">
                        <li>
                            <strong>Clarity:</strong> Ensure that all content is easy to understand and free of ambiguity.
                        </li>
                        <li>
                            <strong>Consistency:</strong> Maintain a uniform style and tone across all content to reinforce the brand's identity.
                        </li>
                        <li>
                            <strong>Conciseness:</strong> Convey messages in a succinct manner without unnecessary words or jargon.
                        </li>
                        <li>
                            <strong>Accuracy:</strong> Ensure all information is correct and up-to-date to build trust with the audience.
                        </li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Guidelines</h2>
                    <p className="mb-4 text-gray-900 dark:text-gray-50 text-justify font-normal">
                        The following guidelines provide detailed instructions on how to create and present content in AstraUI:
                    </p>
                    <ul className="list-disc pl-5 mb-4 text-gray-900 dark:text-gray-50 space-y-3 md:space-y-4">
                        <li>
                            <strong>Tone and Voice:</strong> Use a tone that is friendly yet professional, and a voice that is authoritative yet approachable.
                        </li>
                        <li>
                            <strong>Grammar and Punctuation:</strong> Follow standard grammar rules and use punctuation correctly to enhance readability.
                        </li>
                        <li>
                            <strong>Formatting:</strong> Use headings, subheadings, bullet points, and other formatting tools to organize content and make it easy to scan.
                        </li>
                        <li>
                            <strong>Inclusive Language:</strong> Avoid gendered language and other exclusionary terms to ensure inclusivity.
                        </li>
                        <li>
                            <strong>Readability:</strong> Aim for a reading level that is accessible to the broadest audience possible, typically around a 7th to 9th-grade reading level.
                        </li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Practical Examples</h2>
                    <p className="mb-4 text-gray-900 dark:text-gray-50 text-justify font-normal">
                        Here are some practical examples of how AstraUI's content standards can be applied in different contexts:
                    </p>
                    <ul className="list-disc pl-5 mb-4 text-gray-900 dark:text-gray-50 space-y-3 md:space-y-4">
                        <li>
                            <strong>Documentation:</strong> Write clear and concise documentation that guides users effectively through the product features.
                        </li>
                        <li>
                            <strong>User Interface Text:</strong> Use straightforward language for buttons, labels, and tooltips to enhance user experience.
                        </li>
                        <li>
                            <strong>Marketing Materials:</strong> Craft compelling copy that resonates with the target audience while staying true to the brand's voice.
                        </li>
                        <li>
                            <strong>Support Articles:</strong> Provide detailed yet easy-to-understand instructions and troubleshooting steps to help users solve their issues.
                        </li>
                    </ul>
                </section>
            </main>   
        </Layout>
    );
};

AstraContentStandardPage.displayName = "AstraContentStandardPage"
export default AstraContentStandardPage;
