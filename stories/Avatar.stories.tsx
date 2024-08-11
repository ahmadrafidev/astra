import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Avatar, { AvatarProps } from '@/components/Avatar/Avatar';

export default {
    title: 'Components/Avatar',
    component: Avatar,
    argTypes: {
        src: {
            control: 'text',
            description: 'The source URL of the avatar image.',
            defaultValue: 'https://via.placeholder.com/40',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'https://via.placeholder.com/40' },
            },
        },
        alt: {
            control: 'text',
            description: 'The alt text for the avatar image.',
            defaultValue: 'Avatar',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Avatar' },
            },
        },
        size: {
            control: { type: 'select', options: ['sm', 'md', 'lg', 30, 36, 42, 100] },
            description: 'The size of the avatar. Can be a preset size or a custom number.',
            defaultValue: 'md',
            table: {
                type: { summary: "'sm' | 'md' | 'lg' | number" },
                defaultValue: { summary: 'md' },
            },
        },
        shape: {
            control: { type: 'select', options: ['circle', 'square'] },
            description: 'The shape of the avatar.',
            defaultValue: 'circle',
            table: {
                type: { summary: "'circle' | 'square'" },
                defaultValue: { summary: 'circle' },
            },
        },
        fallback: {
            control: 'text',
            description: 'Fallback content to display if the image fails to load.',
            table: {
                type: { summary: 'React.ReactNode' },
            },
        },
        className: {
            control: 'text',
            description: 'Additional class names for custom styling.',
            table: {
                type: { summary: 'string' },
            },
        },
        onClick: {
            action: 'clicked',
            description: 'Click event handler for the avatar.',
            table: {
                type: { summary: '() => void' },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'The Avatar component is used to display user profile images. It supports custom sizes, shapes, and fallback content.',
            },
        },
    },
} as Meta;

const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
    src: 'https://via.placeholder.com/40',
};

export const Large = Template.bind({});
Large.args = {
    src: 'https://via.placeholder.com/100',
    size: 100,
};

export const WithFallback = Template.bind({});
WithFallback.args = {
    src: 'invalid-url',
    fallback: 'U',
};

export const SquareShape = Template.bind({});
SquareShape.args = {
    src: 'https://via.placeholder.com/40',
    shape: 'square',
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
    src: 'https://via.placeholder.com/40',
    className: 'border-2 border-blue-500',
};
