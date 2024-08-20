import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PhoneNumber from '../components/PhoneNumber/PhoneNumber';

export default {
    title: 'Components/PhoneNumber',
    component: PhoneNumber,
    argTypes: {
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
                component: 'The PhoneNumber component allows users to select a country code and enter a phone number.',
            },
        },
    },
} as Meta;

const Template: StoryFn = (args) => <PhoneNumber {...args} />;

export const Default = Template.bind({});
Default.args = {
    className: '',
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
    className: 'bg-gray-100 dark:bg-gray-700 p-4 border border-gray-300 dark:border-gray-600',
};
