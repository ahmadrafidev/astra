import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { EyeIcon } from '@heroicons/react/24/outline'; 

import Input, { InputProps } from '@/components/Input/Input';

export default {
    title: 'Components/Input',
    component: Input,
    argTypes: {
        type: {
            control: { type: 'select', options: ['text', 'password', 'email'] },
            description: 'The type of input.',
            table: {
                type: { summary: 'text | password | email' },
                defaultValue: { summary: 'text' },
            },
        },
        value: {
            control: 'text',
            description: 'The value of the input.',
            table: {
                type: { summary: 'string' },
            },
        },
        onChange: {
            action: 'changed',
            description: 'The function to call when the input value changes.',
            table: {
                type: { summary: '(e: React.ChangeEvent<HTMLInputElement>) => void' },
            },
        },
        placeholder: {
            control: 'text',
            description: 'The placeholder text for the input.',
            table: {
                type: { summary: 'string' },
            },
        },
        label: {
            control: 'text',
            description: 'The label for the input.',
            table: {
                type: { summary: 'string' },
            },
        },
        hint: {
            control: 'text',
            description: 'A hint for the input.',
            table: {
                type: { summary: 'string' },
            },
        },
        error: {
            control: 'text',
            description: 'An error message for the input.',
            table: {
                type: { summary: 'string' },
            },
        },
        className: {
            control: 'text',
            description: 'Additional class names for the wrapper div.',
            table: {
                type: { summary: 'string' },
            },
        },
        inputClassName: {
            control: 'text',
            description: 'Additional class names for the input element.',
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
        hintClassName: {
            control: 'text',
            description: 'Additional class names for the hint.',
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
        disable: {
            control: 'boolean',
            description: 'Flag to disable the input.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A customizable and accessible input component with support for labels, hints, errors, and icons.',
            },
        },
    },
} as Meta<InputProps>;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'text',
    value: '',
    placeholder: 'Enter your text...',
    label: 'Text Input',
    hint: 'This is a hint',
    error: '',
    disable: false,
};

export const WithError = Template.bind({});
WithError.args = {
    type: 'text',
    value: '',
    placeholder: 'Enter your text...',
    label: 'Text Input',
    error: 'This field is required.',
    disable: false,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    type: 'password',
    value: '',
    placeholder: 'Enter your password...',
    label: 'Password',
    icon: <EyeIcon className="h-5 w-5 text-gray-500" />,
    disable: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    type: 'text',
    value: '',
    placeholder: 'Cannot enter text...',
    label: 'Disabled Input',
    disable: true,
};
