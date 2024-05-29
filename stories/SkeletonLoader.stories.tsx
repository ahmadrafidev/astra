import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SkeletonLoader from '../components/SkeletonLoader/SkeletonLoader';

export default {
    title: 'Components/SkeletonLoader',
    component: SkeletonLoader,
} as Meta;

const Template: StoryFn<typeof SkeletonLoader> = (args) => <SkeletonLoader {...args} />;

export const Default = Template.bind({});
Default.args = {
    width: '100%',
    height: '1rem',
};

export const CustomWidthHeight = Template.bind({});
CustomWidthHeight.args = {
    width: '200px',
    height: '2rem',
};

export const Circle = Template.bind({});
Circle.args = {
    width: '50px',
    height: '50px',
    className: 'rounded-full',
};
