// stories/Navbar.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Navbar, { NavbarProps } from '../components/Navbar/Navbar';

export default {
    title: 'Components/Navbar',
    component: Navbar,
} as Meta;

const Template: StoryFn<NavbarProps> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'My Website',
    links: [
        { href: '/', label: 'Home' },
        { href: '/documentation', label: 'Documentation' },
        { href: '/contact', label: 'Contact' },
    ],
};
