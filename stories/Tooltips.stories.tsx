import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Tooltip, { TooltipProps } from '../components/Tooltip/Tooltip'; // Adjust the import path as needed

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
    argTypes: {
        text: {
            control: 'text',
            description: 'The text to be displayed inside the tooltip.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
        },
        className: {
            control: 'text',
            description: 'Additional class names for custom styling.',
            table: {
                type: { summary: 'string' },
            },
        },
        variant: {
            control: { type: 'select', options: ['default', 'arrow'] },
            description: 'The variant style of the tooltip.',
            table: {
                type: { summary: "'default' | 'arrow'" },
                defaultValue: { summary: 'default' },
            },
        },
    },
} as Meta<TooltipProps>;

const Template: StoryFn<TooltipProps> = (args) => (
    <Tooltip {...args}>
        <button className="p-2 bg-blue-500 text-white rounded-md">
            Hover me
        </button>
    </Tooltip>
);

export const Default = Template.bind({});
Default.args = {
    text: 'This is a tooltip',
    variant: 'default',
};

export const ArrowVariant = Template.bind({});
ArrowVariant.args = {
    text: 'This tooltip has an arrow',
    variant: 'arrow',
};

export const CustomClass = Template.bind({});
CustomClass.args = {
    text: 'This tooltip is custom styled',
    className: 'text-red-500 bg-yellow-300',
    variant: 'default',
};
