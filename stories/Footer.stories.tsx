// stories/Footer.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Footer from '../components/Footer/Footer';

export default {
    title: 'Components/Footer',
    component: Footer,
} as Meta;

const Template: StoryFn = () => <Footer />;

export const Default = Template.bind({});
Default.args = {};
