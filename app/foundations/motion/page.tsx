import React from 'react';
import { Metadata } from 'next';

import Layout from '@/components/Layout/Layout';
import Badge from '@/components/Badge/Badge';
import { Alert, AlertTitle, AlertContent } from '@/components/Alert/Alert';
import TOC from '@/components/TOC/TOC';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Motion',
        description: 'Discover the motion guidelines and principles in AstraUI to create fluid and responsive animations.',
    };
}

const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'motion-principles', label: 'Motion Principles' },
    { id: 'motion-guidelines', label: 'Motion Guidelines' },
];

const AstraMotionPage: React.FC = () => {
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
                            <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Motion</h1>
                            <p className="mb-4 text-gray-900 dark:text-gray-50 text-justify font-normal">
                                Motion is a critical aspect of modern UI design, bringing interfaces to life and enhancing user experience. At AstraUI, we believe that well-crafted motion can make digital experiences feel more intuitive, engaging, and delightful.
                            </p>
                        </section>
                        <section id="motion-principles" className="mb-3 md:mb-4 scroll-mt-20"> 
                            <h2 className="text-xl md:text-2xl mb-2 md:mb-3 font-medium text-gray-900 dark:text-gray-50">Motion Principles</h2>
                            <ul className="text-gray-900 dark:text-gray-50 space-y-3 md:space-y-4">
                                <li>
                                    <h3 className="text-lg font-medium">Purposeful</h3>
                                    <p className="text-base font-sans font-normal">Every animation should serve a clear purpose, whether it is guiding users, providing feedback, or enhancing the storytelling of your product.</p>
                                </li>
                                <li>
                                    <h3 className="text-lg font-medium">Natural</h3>
                                    <p className="text-base font-sans font-normal">Motion should feel natural and reflect the physics of the real world, ensuring that interactions feel familiar and intuitive.</p>
                                </li>
                                <li>
                                    <h3 className="text-lg font-medium">Responsive</h3>
                                    <p className="text-base font-sans font-normal">Animations should be responsive, adapting to different screen sizes and device capabilities while maintaining fluidity and performance.</p>
                                </li>
                                <li>
                                    <h3 className="text-lg font-medium">Consistent</h3>
                                    <p className="text-base font-sans font-normal">Consistency in motion design across the application ensures a cohesive experience, helping users predict interactions and understand the interface better.</p>
                                </li>
                            </ul>
                        </section>
                        <section id="motion-guidelines" className="mb-3 md:mb-4 scroll-mt-20"> 
                            <h2 className="text-xl md:text-2xl mb-2 md:mb-3 font-medium text-gray-900 dark:text-gray-50">Motion Guidelines</h2>
                            <ul className="text-gray-900 dark:text-gray-50 space-y-3 md:space-y-4">
                                <li>
                                    <h3 className="text-lg font-medium">Simplicity</h3>
                                    <p className="text-base font-sans font-normal">Keep animations simple and focused. Avoid overly complex sequences that can distract or confuse users.</p>
                                </li>
                                <li>
                                    <h3 className="text-lg font-medium">Timing and Easing</h3>
                                    <p className="text-base font-sans font-normal">Use appropriate timing and easing functions to create smooth and pleasing animations. Consider the speed of animations to match the user expectations and task requirements.</p>
                                </li>
                                <li>
                                    <h3 className="text-lg font-medium">Feedback</h3>
                                    <p className="text-base font-sans font-normal">Provide immediate feedback for user actions through motion. This reinforces the user sense of control and improves the overall experience.</p>
                                </li>
                                <li>
                                    <h3 className="text-lg font-medium">Hierarchy</h3>
                                    <p className="text-base font-sans font-normal">Use motion to establish visual hierarchy, guiding the user attention to the most important elements on the screen.</p>
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

AstraMotionPage.displayName = "AstraMotionPage"
export default AstraMotionPage;
