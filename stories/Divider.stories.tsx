import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import Divider, { DividerProps } from '@/components/Divider/Divider';

export default {
    title: 'Components/Divider',
    component: Divider,
    argTypes: {
        orientation: {
            control: { type: 'select', options: ['horizontal', 'vertical'] },
            description: 'The orientation of the divider.',
            table: {
                type: { summary: 'horizontal | vertical' },
                defaultValue: { summary: 'horizontal' },
            },
        },
        size: {
            control: { type: 'select', options: ['sm', 'md', 'lg'] },
            description: 'The size of the divider.',
            table: {
                type: { summary: 'sm | md | lg' },
                defaultValue: { summary: 'md' },
            },
        },
        color: {
            control: 'text',
            description: 'Custom color for the divider.',
            table: {
                type: { summary: 'string' },
            },
        },
        label: {
            control: 'text',
            description: 'Optional label to display on the divider.',
            table: {
                type: { summary: 'string' },
            },
        },
        labelPosition: {
            control: { type: 'select', options: ['start', 'center', 'end'] },
            description: 'Position of the label along the divider.',
            table: {
                type: { summary: 'start | center | end' },
                defaultValue: { summary: 'center' },
            },
        },
        className: {
            control: 'text',
            description: 'Additional class names for custom styling.',
            table: {
                type: { summary: 'string' },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A flexible Divider component that supports different orientations, sizes, and optional labels.',
            },
        },
    },
} as Meta<DividerProps>;

const Template: StoryFn<DividerProps> = (args) => <Divider {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
    orientation: 'horizontal',
    size: 'md',
    label: 'Horizontal Divider',
    labelPosition: 'center',
};

export const Vertical = Template.bind({});
Vertical.args = {
    orientation: 'vertical',
    size: 'md',
    label: 'Vertical Divider',
    labelPosition: 'center',
};

export const WithCustomColor = Template.bind({});
WithCustomColor.args = {
    orientation: 'horizontal',
    size: 'md',
    color: 'bg-blue-500',
    label: 'Custom Color Divider',
    labelPosition: 'center',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
    orientation: 'horizontal',
    size: 'md',
};

export const LargeDivider = Template.bind({});
LargeDivider.args = {
    orientation: 'horizontal',
    size: 'lg',
    label: 'Large Divider',
    labelPosition: 'center',
};
