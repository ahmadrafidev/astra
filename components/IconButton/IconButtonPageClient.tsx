'use client';

import React from 'react';
import * as RadixIcons from '@radix-ui/react-icons';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import IconButton from './IconButton';
import IconButtonDocumentation from './IconButtonDocumentation';

const icons = [
    { icon: RadixIcons.TrashIcon, label: 'Delete', ariaLabel: 'Delete' },
    { icon: RadixIcons.Pencil1Icon, label: 'Edit', ariaLabel: 'Edit' },
    { icon: RadixIcons.PlusIcon, label: 'Add', ariaLabel: 'Add' },
];

const IconButtonPageClient: React.FC = () => {
    return (
        <Layout>
            <Badge text="Components" />
            {/* Header Content */}
            <section className="mb-5">
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-3 md:mb-4">IconButton</h1>
                    <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                        A clickable button represented by an icon without accompanying text.
                    </p>
                </div>
            </section>
            {/* IconButton Section */}
            <section className="mb-5">
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Examples</h2>
                <div className="flex space-x-4">
                    {icons.map((icon, index) => (
                        <IconButton
                            key={index}
                            icon={icon.icon}
                            onClick={() => alert(`${icon.label} button clicked`)}
                            aria-label={icon.ariaLabel}
                        />
                    ))}
                </div>
            </section>
            <IconButtonDocumentation />
        </Layout>
    );
};

IconButtonPageClient.displayName = "IconButtonPageClient";
export default IconButtonPageClient;
