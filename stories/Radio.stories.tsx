import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Radio, { RadioProps } from '@/components/Radio/Radio'; 

export default {
    title: 'Components/Radio',
    component: Radio,
    argTypes: {
        label: {
            control: 'text',
            description: 'The label for the radio button.',
            table: {
                type: { summary: 'string' },
            },
        },
        description: {
            control: 'text',
            description: 'Additional description for the radio button.',
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
        containerClassName: {
            control: 'text',
            description: 'Additional class names for the container.',
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
        descriptionClassName: {
            control: 'text',
            description: 'Additional class names for the description.',
            table: {
                type: { summary: 'string' },
            },
        },
        errorClassName: {
            control: 'text',
            description: 'Additional class names for the error message.',
            table: {
                type: { summary: 'string' },
            },
        },
        checked: {
            control: 'boolean',
            description: 'Whether the radio button is checked.',
            table: {
                type: { summary: 'boolean' },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the radio button is disabled.',
            table: {
                type: { summary: 'boolean' },
            },
        },
        value: {
            control: 'text',
            description: 'The value of the radio button.',
            table: {
                type: { summary: 'string' },
            },
        },
        onChange: {
            action: 'changed',
            description: 'Function to call when the radio button value changes.',
            table: {
                type: { summary: '(value: string | null) => void' },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'The Radio component renders a radio button with a label, description, and optional error message. It supports custom styling through various class names.',
            },
        },
    },
} as Meta<RadioProps>;

const Template: StoryFn<RadioProps> = (args) => {
    const [selectedValue, setSelectedValue] = useState<string | null>(args.checked ? String(args.value) : null);

    return (
        <Radio
            {...args}
            checked={selectedValue === args.value}
            onChange={(value) => setSelectedValue(value)}
        />
    );
};

export const Default = Template.bind({});
Default.args = {
    label: 'Option 1',
    description: 'This is a description for Option 1.',
    value: 'option1',
    disabled: false,
    checked: false,
};

export const WithError = Template.bind({});
WithError.args = {
    label: 'Option 2',
    description: 'This is a description for Option 2.',
    error: 'This option is not valid.',
    value: 'option2',
    disabled: false,
    checked: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Option 3',
    description: 'This option is disabled.',
    value: 'option3',
    disabled: true,
    checked: false,
};
