// stories/Badge.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Badge, { BadgeProps } from '../components/Badge/Badge';

export default {
    title: 'Components/Badge',
    component: Badge,
} as Meta;

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
    count: 5,
};

export const MaxCount = Template.bind({});
MaxCount.args = {
    count: 120,
    maxCount: 99,
};
