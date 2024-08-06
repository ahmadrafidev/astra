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
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">IconButton</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A clickable button represented by an icon without accompanying text.
                </p>
            </div>
            <section className="mb-5">
                <h2 className="text-lg md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Variants</h2>
                <div className="space-y-4 flex flex-col justify-around">
                    {['default', 'primary', 'secondary', 'danger'].map(variant => (
                        <div key={variant}>
                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3 capitalize">
                                {variant.charAt(0).toUpperCase() + variant.slice(1)} Icon Button
                            </h3>
                            <div className="flex space-x-4">
                                {icons.map((icon, index) => (
                                    <IconButton
                                        key={index}
                                        icon={icon.icon}
                                        onClick={() => alert(`${icon.label} button clicked`)}
                                        aria-label={icon.ariaLabel}
                                        variant={variant as 'default' | 'primary' | 'secondary' | 'danger'}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="mb-5">
                <h2 className="text-lg md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Sizes</h2>
                <div className="space-y-4 flex flex-col justify-around">
                    {['sm', 'md', 'lg'].map(size => (
                        <div key={size}>
                            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3 capitalize">
                                {size.toUpperCase()} Size
                            </h3>
                            <div className="flex space-x-4">
                                {icons.map((icon, index) => (
                                    <IconButton
                                        key={index}
                                        icon={icon.icon}
                                        onClick={() => alert(`${icon.label} button clicked`)}
                                        aria-label={icon.ariaLabel}
                                        size={size as 'sm' | 'md' | 'lg'}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <IconButtonDocumentation />
        </Layout>
    );
};

IconButtonPageClient.displayName = "IconButtonPageClient";
export default IconButtonPageClient;
