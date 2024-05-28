// stories/Navbar.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Navbar from '../components/Navbar/Navbar';

export default {
    title: 'Components/Navbar',
    component: Navbar,
} as Meta;

const Template: StoryFn = () => <Navbar />;

export const Default = Template.bind({});
Default.args = {};
