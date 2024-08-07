import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Stepper, { StepperProps } from '../components/Stepper/Stepper';

export default {
    title: 'Components/Stepper',
    component: Stepper,
} as Meta;

const Template: StoryFn<StepperProps> = (args) => <Stepper {...args} />;

export const Default = Template.bind({});
Default.args = {
    steps: [
        { label: 'Step 1' },
        { label: 'Step 2' },
        { label: 'Step 3' }
    ],
    currentStep: 1,
    activeColor: 'bg-blue-500',
    inactiveColor: 'bg-gray-300',
    orientation: 'horizontal'
};

export const Vertical = Template.bind({});
Vertical.args = {
    ...Default.args,
    orientation: 'vertical'
};
