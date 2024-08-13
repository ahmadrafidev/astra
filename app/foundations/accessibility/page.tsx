import React from 'react';
import { Metadata } from 'next';

import Layout from '@/components/Layout/Layout';
import Badge from '@/components/Badge/Badge';
import { Alert, AlertTitle, AlertContent } from '@/components/Alert/Alert';
import TOC from '@/components/TOC/TOC';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Accessibility',
        description: 'Explore the accessibility standards that AstraUI adheres to, ensuring inclusivity for all users.',
    };
}

const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'principles', label: 'Principles' },
    { id: 'approach', label: 'Approach' },
    { id: 'engineering-considerations', label: 'Engineering Considerations' },
];

const AstraA11yPage: React.FC = () => {
    return (
        <Layout>
            <main>
                <div className="flex">
                    <div className="w-4/5 pr-2">
                        <Badge text="Foundations" />
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
                        <section id="overview" className="mb-3 md:mb-4 scroll-mt-20">
                            <h1 className="text-2xl md:text-3xl font-semibold font-sans mb-4 text-gray-900 dark:text-gray-50">Accessibility (A11y)</h1>
                            <p className="mb-4 text-gray-900 dark:text-gray-50 text-justify font-normal">
                                AstraUI is committed to creating an inclusive experience for all users, including people with disabilities. 
                                Therefore, AstraUI follows accessibility standards in all its components and interfaces to ensure usability for everyone, 
                                thereby improving the overall user experience.
                            </p>
                        </section>
                        <section id="principles" className="scroll-mt-20">
                            <h2 className="text-lg md:text-xl font-medium mb-4 text-gray-900 dark:text-gray-50">Principles</h2>
                            <p className="mb-4 text-gray-900 dark:text-gray-50 text-justify font-normal">
                                The accessibility principles of AstraUI are based on the POUR model:
                            </p>
                            <ul className="list-disc pl-5 mb-4 text-gray-900 dark:text-gray-50 space-y-3">
                                <li>
                                    <strong>Perceivable:</strong> Information and user interface components must be presented to users in ways they can perceive.
                                </li>
                                <li>
                                    <strong>Operable:</strong> User interface components and navigation must be operable.
                                </li>
                                <li>
                                    <strong>Understandable:</strong> Information and the operation of the user interface must be understandable.
                                </li>
                                <li>
                                    <strong>Robust:</strong> Content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies.
                                </li>
                            </ul>
                        </section>
                        <section id="approach" className="scroll-mt-20">
                            <h2 className="text-lg md:text-xl font-medium mb-4 text-gray-900 dark:text-gray-50">Approach</h2>
                            <p className="mb-4 text-gray-900 dark:text-gray-50 text-justify font-normal">
                                AstraUI&apos;s approach to accessibility includes the following steps:
                            </p>
                            <ul className="list-disc pl-5 mb-4 text-gray-900 dark:text-gray-50 space-y-3 md:space-y-4">
                                <li>
                                    <strong>Research:</strong> Understanding the needs of users with disabilities through research and user feedback.
                                </li>
                                <li>
                                    <strong>Design:</strong> Integrating accessibility into the design process by using tools like color contrast checkers and screen reader compatibility.
                                </li>
                                <li>
                                    <strong>Develop:</strong> Implementing accessibility best practices during development, such as using semantic HTML and ARIA roles.
                                </li>
                                <li>
                                    <strong>Test:</strong> Regularly testing components with assistive technologies and conducting accessibility audits.
                                </li>
                                <li>
                                    <strong>Maintain:</strong> Continuously monitoring and improving accessibility as part of the development lifecycle.
                                </li>
                            </ul>
                        </section>
                        <section id="engineering-considerations" className="scroll-mt-20">
                            <h2 className="text-lg md:text-xl font-medium mb-4 text-gray-900 dark:text-gray-50">Engineering Considerations</h2>
                            <ul className="text-gray-900 dark:text-gray-50 space-y-3 md:space-y-4">
                                <li>
                                    <h3 className="text-lg font-medium">ARIA Attributes</h3>
                                    <p className="text-justify font-normal">
                                        Use ARIA attributes to enhance the accessibility of components. For example, <code>aria-label</code> can provide an accessible name for interactive elements.
                                    </p>
                                </li>
                                <li>
                                    <h3 className="text-lg font-medium">Labels</h3>
                                    <p className="text-justify font-normal">
                                        Ensure all form elements have associated labels. Use the <code>&lt;label&gt;</code> element or <code>aria-labelledby</code> attribute to associate labels with form controls.
                                    </p>
                                </li>
                                <li>
                                    <h3 className="text-lg font-medium">Keyboard Navigation</h3>
                                    <p className="text-justify font-normal">
                                        Ensure all interactive elements are focusable and operable using a keyboard. Implement logical tab order and use <code>tabindex</code> appropriately.
                                    </p>
                                </li>
                                <li>
                                    <h3 className="text-lg font-medium">Responsive Design</h3>
                                    <p className="text-justify font-normal">
                                        Ensure components are usable on all screen sizes and orientations. Use responsive design techniques to create adaptable layouts.
                                    </p>
                                </li>
                                <li>
                                    <h3 className="text-lg font-medium">Inclusive Design</h3>
                                    <p className="text-justify font-normal">
                                        Consider the diverse needs of users from the start. Design components that are flexible and can be adapted to different user preferences and needs.
                                    </p>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <TOC items={tocItems} />
                </div>
            </main>
        </Layout>
    );
};

AstraA11yPage.displayName = "AstraA11yPage"
export default AstraA11yPage;
