import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Breadcrumbs, { BreadcrumbsProps } from '../components/Breadcrumbs/Breadcrumbs'; 

export default {
    title: 'Components/Breadcrumbs',
    component: Breadcrumbs,
    argTypes: {
        items: {
            control: 'object',
            description: 'Array of breadcrumb items to display.',
            table: {
                type: { summary: 'BreadcrumbItem[]' },
            },
        },
        className: {
            control: 'text',
            description: 'Additional class names for custom styling of the breadcrumb container.',
            table: {
                type: { summary: 'string' },
            },
        },
        separator: {
            control: 'text',
            description: 'Custom separator element between breadcrumb items.',
            table: {
                type: { summary: 'React.ReactNode' },
            },
        },
        maxItems: {
            control: { type: 'number', min: 0 },
            description: 'Maximum number of breadcrumb items to display.',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '0' },
            },
        },
        itemClassName: {
            control: 'text',
            description: 'Class names for the breadcrumb items.',
            table: {
                type: { summary: 'string' },
            },
        },
        activeItemClassName: {
            control: 'text',
            description: 'Class names for the active breadcrumb item.',
            table: {
                type: { summary: 'string' },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'The Breadcrumbs component displays navigation breadcrumbs with customizable styling and behavior.',
            },
        },
    },
} as Meta<BreadcrumbsProps>;

const Template: StoryFn<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
    items: [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Laptops', path: '/products/laptops' },
    ],
    className: '',
    separator: '>',
    maxItems: 0,
    itemClassName: '',
    activeItemClassName: 'font-semibold',
};

export const WithCustomSeparator = Template.bind({});
WithCustomSeparator.args = {
    items: [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Laptops', path: '/products/laptops' },
    ],
    separator: '→',
    maxItems: 0,
};

export const LimitedItems = Template.bind({});
LimitedItems.args = {
    items: [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Laptops', path: '/products/laptops' },
        { name: 'Gaming', path: '/products/laptops/gaming' },
        { name: 'High-End', path: '/products/laptops/gaming/high-end' },
    ],
    maxItems: 3,
};
