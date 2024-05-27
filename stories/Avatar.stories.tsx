// stories/Avatar.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Avatar, { AvatarProps } from '../components/Avatar/Avatar';

export default {
    title: 'Components/Avatar',
    component: Avatar,
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
