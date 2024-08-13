import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Home, User, Settings } from 'lucide-react';

import Dock, { DockProps } from '@/components/Dock/Dock';

export default {
  title: 'Components/Dock',
  component: Dock,
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional class names for the dock container.',
      table: {
        type: { summary: 'string' },
      },
    },
    items: {
      control: 'object',
      description: 'The list of items to display in the dock.',
      table: {
        type: { summary: 'DockItemProps[]' },
      },
    },
    iconSize: {
      control: { type: 'number', min: 16, max: 64 },
      description: 'The size of the icons in the dock items.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '24' },
      },
    },
    dockWidth: {
      control: 'text',
      description: 'The width of the dock container.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'auto' },
      },
    },
    dockHeight: {
      control: 'text',
      description: 'The height of the dock container.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'auto' },
      },
    },
    variant: {
      control: { type: 'select', options: ['default', 'glassmorphism'] },
      description: 'The visual variant of the dock.',
      table: {
        type: { summary: "'default' | 'glassmorphism'" },
        defaultValue: { summary: "'default'" },
      },
    },
  },
} as Meta<DockProps>;

const Template: StoryFn<DockProps> = (args) => <Dock {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { icon: Home, label: 'Home', href: '/' },
    { icon: User, label: 'Profile', href: '/profile' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ],
  variant: 'default',
  iconSize: 24,
};

export const Glassmorphism = Template.bind({});
Glassmorphism.args = {
  items: [
    { icon: Home, label: 'Home', href: '/' },
    { icon: User, label: 'Profile', href: '/profile' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ],
  variant: 'glassmorphism',
  iconSize: 24,
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  items: [
    { icon: Home, label: 'Home', href: '/' },
    { icon: User, label: 'Profile', href: '/profile' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ],
  variant: 'default',
  iconSize: 32,
  dockWidth: '300px',
  dockHeight: '60px',
};

export const WithClickHandlers = Template.bind({});
WithClickHandlers.args = {
  items: [
    { icon: Home, label: 'Home', onClick: () => alert('Home clicked!') },
    { icon: User, label: 'Profile', onClick: () => alert('Profile clicked!') },
    { icon: Settings, label: 'Settings', onClick: () => alert('Settings clicked!') },
  ],
  variant: 'default',
  iconSize: 24,
};
