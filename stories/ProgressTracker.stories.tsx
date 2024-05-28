// stories/ProgressTracker.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProgressTracker from '../components/ProgressTracker/ProgressTracker';
import { ProgressTrackerProps } from '../components/ProgressTracker/ProgressTracker';

export default {
    title: 'Components/ProgressTracker',
    component: ProgressTracker,
} as Meta;

const Template: StoryFn<ProgressTrackerProps> = (args) => <ProgressTracker {...args} />;

export const Default = Template.bind({});
Default.args = {
    steps: ['Step 1', 'Step 2', 'Step 3'],
    currentStep: 1,
};


