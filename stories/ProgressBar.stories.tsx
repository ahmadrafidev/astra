// stories/ProgressBar.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProgressBar, { ProgressBarProps } from '../components/ProgressBar';

export default {
    title: 'Components/ProgressBar',
    component: ProgressBar,
} as Meta;

const Template: StoryFn<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    progress: 50,
    size: 'md',
    progressBarVariant: 'default',
    progressVariant: 'default',
    showLabel: true,
    labelPosition: 'inside',
    animate: true,
};

export const Custom = Template.bind({});
Custom.args = {
    progress: 70,
    size: 'lg',
    progressBarVariant: 'custom',
    progressVariant: 'success',
    showLabel: true,
    labelPosition: 'outside',
    animate: true,
    customLabel: <span>Custom Label</span>,
};

export const Striped = Template.bind({});
Striped.args = {
    progress: 60,
    size: 'md',
    progressBarVariant: 'default',
    progressVariant: 'default',
    showLabel: true,
    labelPosition: 'inside',
    animate: true,
    hasStripe: true,
};
