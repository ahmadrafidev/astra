// pages/documentation/button.tsx
import React from 'react';
import type { Metadata } from "next";

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';
import Button from '../../../components/Button/Button';

export const metadata: Metadata = {
    title: "Button",
    description: "Buttons are interactive elements that trigger actions or events when clicked.",
};

const ButtonPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Components" />
            {/* Header Content */}
            <section className="mb-5">
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-semibold font-sans text-gray-900 dark:text-gray-50 mb-3 md:mb-4">Button</h1>
                    <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                        Buttons are interactive elements that trigger actions or events when clicked. Below are various button styles with different use cases.
                    </p>
                </div>
            </section>
            {/* Button Variants Section */}
            <section className="mb-5">
                <h2 className="text-2xl md:text-3xl font-semibold font-sans text-gray-900 dark:text-gray-50 mb-5">Variants</h2>
                <div className="space-y-4">
                    <div>
                        <Button variant="default">Default Button</Button>
                    </div>
                    <div>
                        <Button variant="destructive">Destructive Button</Button>
                    </div>
                    <div>
                        <Button variant="outline">Outline Button</Button>
                    </div>
                    <div>
                        <Button variant="secondary">Secondary Button</Button>
                    </div>
                    <div>
                        <Button variant="ghost">Ghost Button</Button>
                    </div>
                    <div>
                        <Button variant="link">Link Button</Button>
                    </div>
                </div>
            </section>
            {/* Props Section */}
            <section>
                <h2 className="text-2xl md:text-3xl font-semibold font-sans text-gray-900 dark:text-gray-50 mb-5">Props</h2>
            </section>
            {/* Best Practices Section */}
            <section>
                <h2 className="text-2xl md:text-3xl font-semibold font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
            </section>
        </Layout>
    );
};

ButtonPage.displayName="ButtonPage"
export default ButtonPage;
