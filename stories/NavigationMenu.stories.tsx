import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import NavigationMenu, { NavigationMenuProps } from '@/components/NavigationMenu/NavigationMenu';

export default {
    title: 'Components/NavigationMenu',
    component: NavigationMenu,
    argTypes: {
        links: {
            control: 'object',
            description: 'Array of navigation links to display.',
            table: {
                type: { summary: 'NavLink[]' },
            },
        },
        toggleSidebar: {
            action: 'toggled',
            description: 'Callback function to toggle the sidebar.',
            table: {
                type: { summary: '() => void' },
            },
        },
        isSidebarOpen: {
            control: 'boolean',
            description: 'Indicates if the sidebar is currently open.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        className: {
            control: 'text',
            description: 'Additional class names for custom styling.',
            table: {
                type: { summary: 'string' },
            },
        },
        mobileBreakpoint: {
            control: { type: 'select', options: ['sm', 'md', 'lg', 'xl'] },
            description: 'The breakpoint at which the mobile menu becomes active.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'md' },
            },
        },
        debug: {
            control: 'boolean',
            description: 'Enables debug mode, logging props to the console.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'The NavigationMenu component provides a responsive navigation bar with optional sidebar toggle and custom content.',
            },
        },
    },
} as Meta<NavigationMenuProps>;

const Template: StoryFn<NavigationMenuProps> = (args) => <NavigationMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
    links: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
    ],
    toggleSidebar: () => console.log('Sidebar toggled'),
    isSidebarOpen: false,
    hero: <div>Hero Content</div>,
    rightContent: <button className="btn">Right Button</button>,
    mobileBreakpoint: 'md',
    debug: false,
};

export const WithCustomHeroAndRightContent = Template.bind({});
WithCustomHeroAndRightContent.args = {
    links: [
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
    ],
    toggleSidebar: () => console.log('Sidebar toggled'),
    isSidebarOpen: true,
    hero: <div><h1>Custom Hero</h1></div>,
    rightContent: <button className="btn">Custom Button</button>,
    mobileBreakpoint: 'lg',
    debug: true,
};

export const WithoutSidebarToggle = Template.bind({});
WithoutSidebarToggle.args = {
    links: [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Contact', href: '/contact' },
    ],
    hero: <div>Another Hero Content</div>,
    rightContent: <div>Footer Content</div>,
    mobileBreakpoint: 'sm',
    debug: false,
};
