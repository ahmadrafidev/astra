import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Navbar, { NavigationBarProps } from '../components/Navbar/Navbar';

export default {
    title: 'Components/Navbar',
    component: Navbar,
} as Meta;

const Template: StoryFn<NavigationBarProps> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
    hero: 'My Website',
    links: [
        { href: '/', label: 'Home' },
        { href: '/documentation', label: 'Documentation' },
        { href: '/contact', label: 'Contact' },
    ],
};
