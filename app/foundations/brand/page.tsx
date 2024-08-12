import React from 'react';
import { Metadata } from 'next';

import Layout from '@/components/Layout/Layout';
import Badge from '@/components/Badge/Badge';
import { Alert, AlertTitle, AlertContent } from '@/components/Alert/Alert';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Brand Expression',
        description: 'Learn how AstraUI maintains brand consistency across various components and designs.',
    };
}

const AstraBrandPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Foundations" />
            <main>
                <Alert 
                    type="info" 
                    isDismissible={false} 
                    className="my-2 p-4"
                >
                    <AlertTitle>Under Development</AlertTitle>
                    <AlertContent>
                        This page is currently being updated. Some information may be incomplete or subject to change.
                    </AlertContent>
                </Alert>
                <section className="mb-3 md:mb-4">
                    <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Brand Expression</h1>
                    <p className="mb-4 text-gray-900 dark:text-gray-50 text-justify font-normal">
                        AstraUI captures the brand‘s identity through consistent visuals, messaging, and tone.
                        This coherence across all touchpoints strengthens brand recognition and creates a memorable and engaging user experience.
                    </p>
                </section>
                <section>
                    <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Principles</h2>
                    <p className="mb-4 text-gray-900 dark:text-gray-50 text-justify font-normal">
                        The principles of brand expression in AstraUI are designed to ensure that all components and interfaces reflect the brand‘s core values and aesthetics.
                    </p>
                    <ul className="list-disc pl-5 mb-4 text-gray-900 dark:text-gray-50 space-y-3 md:space-y-4">
                        <li>
                            <strong>Consistency:</strong> Maintaining a uniform look and feel across all platforms and components to ensure brand recognition.
                        </li>
                        <li>
                            <strong>Simplicity:</strong> Keeping designs simple and intuitive, allowing the brand‘s message to shine through without unnecessary distractions.
                        </li>
                        <li>
                            <strong>Clarity:</strong> Ensuring that all visuals and messages are clear and easy to understand, reinforcing the brand‘s identity.
                        </li>
                        <li>
                            <strong>Flexibility:</strong> Allowing for adaptability within the brand guidelines to accommodate different contexts and user needs.
                        </li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Guidelines</h2>
                    <p className="mb-4 text-gray-900 dark:text-gray-50 text-justify font-normal">
                        The following guidelines provide detailed instructions on how to implement the brand‘s visual and verbal identity in AstraUI components:
                    </p>
                    <ul className="list-disc pl-5 mb-4 text-gray-900 dark:text-gray-50 space-y-3 md:space-y-4">
                        <li>
                            <strong>Visual Identity:</strong> Use the brand‘s color palette, typography, and iconography consistently across all components.
                        </li>
                        <li>
                            <strong>Voice and Tone:</strong> Reflect the brand‘s personality through consistent messaging and tone of voice in all communications.
                        </li>
                        <li>
                            <strong>Imagery:</strong> Select images that align with the brand‘s values and aesthetic, ensuring they are of high quality and relevance.
                        </li>
                        <li>
                            <strong>Spacing and Layout:</strong> Maintain consistent spacing and layout to create a harmonious and balanced visual experience.
                        </li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Practical Examples</h2>
                    <p className="mb-4 text-gray-900 dark:text-gray-50 text-justify font-normal">
                        Here are some practical examples of how AstraUI‘s brand expression principles and guidelines can be applied in different contexts:
                    </p>
                    <ul className="list-disc pl-5 mb-4 text-gray-900 dark:text-gray-50 space-y-3 md:space-y-4">
                        <li>
                            <strong>Buttons:</strong> Ensure that buttons use the brand‘s primary colors and have consistent padding and typography.
                        </li>
                        <li>
                            <strong>Cards:</strong> Use consistent shadows, borders, and spacing to maintain a cohesive look and feel.
                        </li>
                        <li>
                            <strong>Headers and Footers:</strong> Reflect the brand‘s identity through consistent use of logos, colors, and typography.
                        </li>
                        <li>
                            <strong>Forms:</strong> Ensure form elements are styled consistently, with clear labels and accessible interactions.
                        </li>
                    </ul>
                </section>
            </main>
        </Layout>
    );
};

AstraBrandPage.displayName = "AstraBrandPage"
export default AstraBrandPage;
