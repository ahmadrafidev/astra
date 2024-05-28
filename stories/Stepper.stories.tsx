// stories/Stepper.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Stepper from '../components/Stepper/Stepper';
import { StepperProps } from '../components/Stepper/Stepper';

export default {
    title: 'Components/Stepper',
    component: Stepper,
} as Meta;

const Template: StoryFn<StepperProps> = (args) => <Stepper {...args} />;

export const Default = Template.bind({});
Default.args = {
    steps: ['Step 1', 'Step 2', 'Step 3'],
    currentStep: 1,
};
