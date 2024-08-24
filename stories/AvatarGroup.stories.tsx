import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import AvatarGroup, { AvatarGroupProps } from '@/components/AvatarGroup/AvatarGroup';
import Avatar from '@/components/Avatar/Avatar';

export default {
    title: 'Components/Avatar Group',
    component: AvatarGroup,
    argTypes: {
        avatars: {
            control: 'object',
            description: 'Array of avatar props to render.',
            table: {
                type: { summary: 'AvatarProps[]' },
            },
        },
        max: {
            control: { type: 'number', min: 1 },
            description: 'Maximum number of avatars to display.',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '3' },
            },
        },
        size: {
            control: { type: 'select', options: ['sm', 'md', 'lg', 30, 36, 42, 100] },
            description: 'Size of the avatars.',
            table: {
                type: { summary: 'AvatarProps["size"]' },
                defaultValue: { summary: 'md' },
            },
        },
        shape: {
            control: { type: 'select', options: ['circle', 'square'] },
            description: 'Shape of the avatars.',
            table: {
                type: { summary: 'AvatarProps["shape"]' },
                defaultValue: { summary: 'circle' },
            },
        },
        overlap: {
            control: { type: 'select', options: ['sm', 'md', 'lg'] },
            description: 'Overlap size for the avatars.',
            table: {
                type: { summary: "'sm' | 'md' | 'lg'" },
                defaultValue: { summary: 'md' },
            },
        },
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
                component: 'The AvatarGroup component is used to display a group of avatars with overlap and an optional count of additional avatars.',
            },
        },
    },
} as Meta;

const Template: StoryFn<AvatarGroupProps> = (args) => <AvatarGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
    avatars: [
        { src: 'https://via.placeholder.com/40' },
        { src: 'https://via.placeholder.com/40' },
        { src: 'https://via.placeholder.com/40' },
        { src: 'https://via.placeholder.com/40' },
    ],
    max: 3,
    size: 'md',
    shape: 'circle',
    overlap: 'md',
};

export const LargeAvatars = Template.bind({});
LargeAvatars.args = {
    avatars: [
        { src: 'https://via.placeholder.com/100' },
        { src: 'https://via.placeholder.com/100' },
        { src: 'https://via.placeholder.com/100' },
        { src: 'https://via.placeholder.com/100' },
    ],
    max: 4,
    size: 100,
    shape: 'circle',
    overlap: 'lg',
};

export const SquareAvatars = Template.bind({});
SquareAvatars.args = {
    avatars: [
        { src: 'https://via.placeholder.com/40' },
        { src: 'https://via.placeholder.com/40' },
        { src: 'https://via.placeholder.com/40' },
        { src: 'https://via.placeholder.com/40' },
    ],
    max: 3,
    size: 'md',
    shape: 'square',
    overlap: 'md',
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
    avatars: [
        { src: 'https://via.placeholder.com/40' },
        { src: 'https://via.placeholder.com/40' },
        { src: 'https://via.placeholder.com/40' },
        { src: 'https://via.placeholder.com/40' },
    ],
    max: 2,
    size: 'md',
    shape: 'circle',
    overlap: 'sm',
    className: 'bg-gray-100 p-2',
};
