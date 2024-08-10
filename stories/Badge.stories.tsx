import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Badge, { BadgeProps } from '../components/Badge/Badge';

export default {
    title: 'Components/Badge',
    component: Badge,
    argTypes: {
        text: {
            control: 'text',
            description: 'The text to display inside the badge.',
            table: {
                type: { summary: 'string' },
            },
        },
        count: {
            control: 'number',
            description: 'The count to display inside the badge.',
            table: {
                type: { summary: 'number' },
            },
        },
        maxCount: {
            control: { type: 'number', min: 1 },
            description: 'The maximum count to display before showing "maxCount+".',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '99' },
            },
        },
        className: {
            control: 'text',
            description: 'Additional class names for custom styling.',
            table: {
                type: { summary: 'string' },
            },
        },
        color: {
            control: 'color',
            description: 'Background color for the badge.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'bg-gray-200' },
            },
        },
        darkColor: {
            control: 'color',
            description: 'Background color for the badge in dark mode.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'bg-gray-700' },
            },
        },
        textColor: {
            control: 'color',
            description: 'Text color for the badge.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'text-gray-900' },
            },
        },
        darkTextColor: {
            control: 'color',
            description: 'Text color for the badge in dark mode.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'text-gray-100' },
            },
        },
        size: {
            control: { type: 'select', options: ['small', 'medium', 'large'] },
            description: 'Size of the badge.',
            table: {
                type: { summary: "'small' | 'medium' | 'large'" },
                defaultValue: { summary: 'medium' },
            },
        },
        ariaLabel: {
            control: 'text',
            description: 'Aria label for accessibility.',
            table: {
                type: { summary: 'string' },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'The Badge component is used to display a small piece of information such as text or a count. It supports various sizes, colors, and dark mode styling.',
            },
        },
    },
} as Meta;

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'New',
    size: 'medium',
    color: 'bg-gray-200',
    textColor: 'text-gray-900',
    darkColor: 'bg-gray-700',
    darkTextColor: 'text-gray-100',
};

export const WithCount = Template.bind({});
WithCount.args = {
    count: 120,
    maxCount: 99,
    size: 'medium',
    color: 'bg-red-500',
    textColor: 'text-white',
    darkColor: 'bg-red-700',
    darkTextColor: 'text-white',
};

export const SmallBadge = Template.bind({});
SmallBadge.args = {
    text: 'Small',
    size: 'small',
    color: 'bg-blue-200',
    textColor: 'text-blue-900',
    darkColor: 'bg-blue-700',
    darkTextColor: 'text-blue-100',
};

export const LargeBadge = Template.bind({});
LargeBadge.args = {
    text: 'Large',
    size: 'large',
    color: 'bg-green-200',
    textColor: 'text-green-900',
    darkColor: 'bg-green-700',
    darkTextColor: 'text-green-100',
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
    text: 'Custom Badge',
    size: 'medium',
    className: 'border border-blue-500',
    color: 'bg-white',
    textColor: 'text-blue-500',
    darkColor: 'bg-gray-800',
    darkTextColor: 'text-blue-300',
};
