import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Collapsible from '@/components/Collapsible/Collapsible';
import { CollapsibleProps } from '@/components/Collapsible/Collapsible';

export default {
    title: 'Components/Collapsible',
    component: Collapsible,
    argTypes: {
        title: {
            control: { type: 'text' },
            description: 'The title displayed on the collapsible header.',
            table: {
                type: { summary: 'ReactNode' },
            },
        },
        children: {
            control: { type: 'text' },
            description: 'The content to display when the collapsible is open.',
            table: {
                type: { summary: 'ReactNode' },
            },
        },
        defaultOpen: {
            control: { type: 'boolean' },
            description: 'Whether the collapsible is open by default.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Whether the collapsible is disabled.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        className: {
            control: { type: 'text' },
            description: 'Additional class names for the collapsible container.',
            table: {
                type: { summary: 'string' },
            },
        },
        icon: {
            control: { type: 'object' }, // Changed to 'object' for custom elements
            description: 'Custom icon to display next to the title.',
            table: {
                type: { summary: 'ReactNode' },
            },
        },
        contentClassName: {
            control: { type: 'text' },
            description: 'Additional class names for the collapsible content.',
            table: {
                type: { summary: 'string' },
            },
        },
    },
} as Meta<CollapsibleProps>;

const Template: StoryFn<CollapsibleProps> = (args) => <Collapsible {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Click to expand',
    children: 'This is the collapsible content.',
};

export const OpenByDefault = Template.bind({});
OpenByDefault.args = {
    title: 'Click to expand',
    children: 'This is the collapsible content.',
    defaultOpen: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    title: 'Disabled Collapsible',
    children: 'You cannot toggle this collapsible.',
    disabled: true,
};

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
    title: 'Custom Icon',
    children: 'This collapsible has a custom icon.',
    icon: <span>👉</span>,
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
    title: 'Custom Styled Collapsible',
    children: 'This collapsible has custom styles.',
    className: 'bg-gray-100 border-gray-300',
    contentClassName: 'bg-gray-50 p-6',
};
