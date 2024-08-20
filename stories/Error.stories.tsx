import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import Error, { ErrorProps, ErrorType } from '@/components/Error/Error'; 

export default {
    title: 'Components/Error',
    component: Error,
    argTypes: {
        type: {
            control: { type: 'select', options: ['upload', 'network', 'filesize', 'authentication', 'limiter', 'timeout', 'server', 'payment'] },
            description: 'The type of error to display.',
            table: {
                type: { summary: 'ErrorType' },
                defaultValue: { summary: 'network' },
            },
        },
        title: {
            control: 'text',
            description: 'The title of the error message.',
            table: {
                type: { summary: 'string' },
            },
        },
        message: {
            control: 'text',
            description: 'The detailed error message.',
            table: {
                type: { summary: 'string' },
            },
        },
        className: {
            control: 'text',
            description: 'Additional class names for custom styling.',
            table: {
                type: { summary: 'string' },
            },
        },
        primaryAction: {
            control: 'object',
            description: 'Primary action for the error.',
            table: {
                type: { summary: '{ label: string; onClick: () => void }' },
            },
        },
        secondaryAction: {
            control: 'object',
            description: 'Secondary action for the error.',
            table: {
                type: { summary: '{ label: string; onClick: () => void }' },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'The Error component displays an error message with associated actions, such as retrying or canceling.',
            },
        },
    },
} as Meta<ErrorProps>;

const Template: StoryFn<ErrorProps> = (args) => <Error {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'network',
    title: 'Network Error',
    message: 'There was a problem connecting to the network. Please check your internet connection and try again.',
    primaryAction: {
        label: 'Retry',
        onClick: () => alert('Retry clicked'),
    },
    secondaryAction: {
        label: 'Cancel',
        onClick: () => alert('Cancel clicked'),
    },
};

export const UploadError = Template.bind({});
UploadError.args = {
    type: 'upload',
    title: 'Upload Failed',
    message: 'The file could not be uploaded. Please try again.',
    primaryAction: {
        label: 'Retry',
        onClick: () => alert('Retry clicked'),
    },
    secondaryAction: {
        label: 'Cancel',
        onClick: () => alert('Cancel clicked'),
    },
};

export const FilesizeError = Template.bind({});
FilesizeError.args = {
    type: 'filesize',
    title: 'File Too Large',
    message: 'The file size exceeds the maximum allowed size.',
    primaryAction: {
        label: 'Select Another File',
        onClick: () => alert('Select Another File clicked'),
    },
};

export const AuthenticationError = Template.bind({});
AuthenticationError.args = {
    type: 'authentication',
    title: 'Authentication Error',
    message: 'Your session has expired. Please log in again.',
    primaryAction: {
        label: 'Log In',
        onClick: () => alert('Log In clicked'),
    },
};
