import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import NavigationMenu, { NavigationMenuProps } from '@/components/NavigationMenu/NavigationMenu';

export default {
    title: 'Components/NavigationMenu',
    component: NavigationMenu,
} as Meta;

const Template: StoryFn<NavigationMenuProps> = (args) => <NavigationMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
    hero: 'My Website',
    links: [
        { href: '/', label: 'Home' },
        { href: '/documentation', label: 'Documentation' },
        { href: '/contact', label: 'Contact' },
    ],
};
