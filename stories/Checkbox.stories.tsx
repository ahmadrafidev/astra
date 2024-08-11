import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Checkbox, { CheckboxProps } from '@/components/Checkbox/Checkbox'; 

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    argTypes: {
        label: {
            control: 'text',
            description: 'The label for the checkbox.',
            table: {
                type: { summary: 'string' },
            },
        },
        labelClassName: {
            control: 'text',
            description: 'Additional class names for the label.',
            table: {
                type: { summary: 'string' },
            },
        },
        error: {
            control: 'text',
            description: 'Error message to be displayed.',
            table: {
                type: { summary: 'string' },
            },
        },
        className: {
            control: 'text',
            description: 'Additional class names for the checkbox container.',
            table: {
                type: { summary: 'string' },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the checkbox is disabled.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'The Checkbox component renders a checkbox with an optional label and error message.',
            },
        },
    },
} as Meta<CheckboxProps>;

const Template: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Default Checkbox',
};

export const WithError = Template.bind({});
WithError.args = {
    label: 'Checkbox with Error',
    error: 'This is an error message',
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Disabled Checkbox',
    disabled: true,
};

export const CustomLabelClass = Template.bind({});
CustomLabelClass.args = {
    label: 'Custom Label Class',
    labelClassName: 'text-blue-500 font-semibold',
};
