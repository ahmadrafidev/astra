import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import ProgressTracker, { ProgressTrackerProps } from '@/components/ProgressTracker/ProgressTracker'; 

export default {
    title: 'Components/ProgressTracker',
    component: ProgressTracker,
    argTypes: {
        steps: {
            control: { type: 'object' }, 
            description: 'Array of step labels.',
            table: {
                type: { summary: 'string[]' },
            },
        },
        currentStep: {
            control: { type: 'number', min: 0 },
            description: 'The current active step index (0-based).',
            table: {
                type: { summary: 'number' },
            },
        },
        className: {
            control: 'text',
            description: 'Additional class names for custom styling.',
            table: {
                type: { summary: 'string' },
            },
        },
        activeClassName: {
            control: 'text',
            description: 'Class names for active steps.',
            table: {
                type: { summary: 'string' },
            },
        },
        inactiveClassName: {
            control: 'text',
            description: 'Class names for inactive steps.',
            table: {
                type: { summary: 'string' },
            },
        },
        stepNumberClassName: {
            control: 'text',
            description: 'Class names for step numbers.',
            table: {
                type: { summary: 'string' },
            },
        },
        stepLabelClassName: {
            control: 'text',
            description: 'Class names for step labels.',
            table: {
                type: { summary: 'string' },
            },
        },
        separatorClassName: {
            control: 'text',
            description: 'Class names for step separators.',
            table: {
                type: { summary: 'string' },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'The ProgressTracker component displays a series of steps with active and inactive states, providing a visual representation of progress through a sequence.',
            },
        },
    },
} as Meta<ProgressTrackerProps>;

const Template: StoryFn<ProgressTrackerProps> = (args) => <ProgressTracker {...args} />;

export const Default = Template.bind({});
Default.args = {
    steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
    currentStep: 1,
    className: 'space-x-4',
    activeClassName: 'text-blue-500 font-bold',
    inactiveClassName: 'text-gray-400',
    stepNumberClassName: 'mr-2',
    stepLabelClassName: 'text-sm',
    separatorClassName: 'mx-2 w-4 h-px bg-gray-300',
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
    steps: ['Start', 'In Progress', 'Review', 'Complete'],
    currentStep: 2,
    className: 'space-x-6',
    activeClassName: 'bg-green-500 text-white rounded-full p-2',
    inactiveClassName: 'bg-gray-200 text-gray-600 rounded-full p-2',
    stepNumberClassName: 'mr-3',
    stepLabelClassName: 'text-base font-semibold',
    separatorClassName: 'mx-4 w-8 h-px bg-green-500',
};
