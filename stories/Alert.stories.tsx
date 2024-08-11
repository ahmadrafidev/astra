import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Alert, AlertProps, AlertTitle, AlertContent } from '@/components/Alert/Alert';

export default {
    title: 'Components/Alert',
    component: Alert,
    argTypes: {
        type: {
            control: { type: 'radio' },
            options: ['info', 'success', 'warning', 'error'],
            description: 'The type of the alert, determines the styling.',
            table: {
                type: { summary: 'info | success | warning | error' },
                defaultValue: { summary: 'info' },
            },
        },
        title: {
            control: { type: 'text' },
            description: 'Optional title for the alert.',
            table: {
                type: { summary: 'string' },
            },
        },
        children: {
            control: 'text',
            description: 'The content of the alert.',
            table: {
                type: { summary: 'ReactNode' },
            },
        },
        isDismissible: {
            control: { type: 'boolean' },
            description: 'Whether the alert is dismissible.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },  // Set default value as a string
            },
        },
        className: {
            control: { type: 'text' },
            description: 'Additional class names for custom styling.',
            table: {
                type: { summary: 'string' },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'The Alert component is used to display contextual messages with different types like info, success, warning, and error. It supports optional titles, dismissibility, and custom content.',
            },
        },
    },
} as Meta<AlertProps>;

const Template: StoryFn<AlertProps> = (args) => (
    <Alert {...args}>
        <AlertContent>
            This is an alert message. You can include <strong>formatted text</strong> and other elements here.
        </AlertContent>
    </Alert>
);

export const Default = Template.bind({});
Default.args = {
    type: 'info',
    title: 'Info Alert',
    isDismissible: false,
};

export const Success = Template.bind({});
Success.args = {
    type: 'success',
    title: 'Success Alert',
    isDismissible: false,
};

export const Warning = Template.bind({});
Warning.args = {
    type: 'warning',
    title: 'Warning Alert',
    isDismissible: true,
};

export const Error = Template.bind({});
Error.args = {
    type: 'error',
    title: 'Error Alert',
    isDismissible: true,
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
    type: 'info',
    isDismissible: false,
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
    type: 'success',
    title: 'Custom Styled Alert',
    isDismissible: true,
    className: 'border-dashed border-2 border-green-600',
};
