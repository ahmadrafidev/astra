import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { Check, AlertCircle } from 'lucide-react';

import { List, ListProps, ListItem } from '@/components/List/List'; 

export default {
    title: 'Components/List',
    component: List,
    subcomponents: { ListItem },
    argTypes: {
        variant: {
            control: { type: 'select', options: ['ordered', 'unordered'] },
            description: 'Determines whether the list is ordered or unordered.',
            table: {
                type: { summary: "'ordered' | 'unordered'" },
                defaultValue: { summary: 'unordered' },
            },
        },
        className: {
            control: 'text',
            description: 'Additional CSS classes to apply to the list.',
            table: {
                type: { summary: 'string' },
            },
        },
        iconClassName: {
            control: 'text',
            description: 'Additional CSS classes to apply to the icons.',
            table: {
                type: { summary: 'string' },
            },
        },
        items: {
            control: 'object',
            description: 'Optional array of items to render, each with content and an optional icon.',
            table: {
                type: { summary: 'Array<{ content: React.ReactNode; icon?: React.ReactNode; }>' },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'The List component is used to display multiple items with optional icons. It supports both ordered and unordered lists.',
            },
        },
    },
} as Meta<ListProps>;

const Template: StoryFn<ListProps> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
    items: [
        { content: 'Item 1' },
        { content: 'Item 2' },
        { content: 'Item 3' },
    ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
    items: [
        { content: 'Success', icon: <Check className="text-green-500" /> },
        { content: 'Error', icon: <AlertCircle className="text-red-500" /> },
        { content: 'Warning', icon: <AlertCircle className="text-yellow-500" /> },
    ],
    className: 'space-y-2',
};

export const OrderedList = Template.bind({});
OrderedList.args = {
    variant: 'ordered',
    items: [
        { content: 'First Step' },
        { content: 'Second Step' },
        { content: 'Third Step' },
    ],
};
