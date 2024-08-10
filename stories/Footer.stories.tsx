import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Footer from '../components/Footer/Footer'; 
export default {
    title: 'Components/Footer',
    component: Footer,
    parameters: {
        docs: {
            description: {
                component: 'The Footer component provides the main footer for the application, including credits and copyright information.',
            },
        },
    },
} as Meta;

const Template: StoryFn = () => <Footer />;

export const Default = Template.bind({});
Default.args = {};
