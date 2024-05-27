// stories/ProgressBar.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProgressBar, { ProgressBarProps } from '../components/ProgressBar/ProgressBar';

export default {
    title: 'Components/ProgressBar',
    component: ProgressBar,
} as Meta;

const Template: StoryFn<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    progress: 50,
};
