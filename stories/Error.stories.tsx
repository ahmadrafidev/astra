import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Error, { ErrorProps } from '../components/Error/Error';

export default {
    title: 'Components/Error',
    component: Error,
} as Meta;

const Template: StoryFn<ErrorProps> = (args) => <Error {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'network',
    title: 'Error',
    message: 'Something went wrong. Please try again.',
    primaryAction: {
        label: 'Retry',
        onClick: () => alert('Retrying...'),
    },
};

export const WithSecondaryAction = Template.bind({});
WithSecondaryAction.args = {
    type: 'upload',
    title: 'Upload Error',
    message: 'The file could not be uploaded. Please try again.',
    primaryAction: {
        label: 'Retry',
        onClick: () => alert('Retrying'),
    },
    secondaryAction: {
        label: 'Cancel',
        onClick: () => alert('Cancelling'),
    },
};
