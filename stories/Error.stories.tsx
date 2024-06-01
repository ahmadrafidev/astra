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
    message: 'Something went wrong. Please try again.',
};

export const WithRetry = Template.bind({});
WithRetry.args = {
    message: 'Something went wrong. Please try again.',
    onRetry: () => alert('Retrying...'),
};
