import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Stepper, { StepperProps } from '@/components/Stepper/Stepper';

export default {
  title: 'Components/Stepper',
  component: Stepper,
  argTypes: {
    steps: {
      control: 'object',
      description: 'The steps to display in the stepper.',
      table: {
        type: { summary: 'Array<{label: string, description?: string}>' },
      },
    },
    currentStep: {
      control: { type: 'number', min: 0 },
      description: 'The current active step.',
      table: {
        type: { summary: 'number' },
      },
    },
    onStepClick: {
      action: 'clicked',
      description: 'Callback when a step is clicked.',
      table: {
        type: { summary: '(stepIndex: number) => void' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional class names for custom styling.',
      table: {
        type: { summary: 'string' },
      },
    },
    activeColor: {
      control: 'color',
      description: 'Color for the active step.',
      table: {
        type: { summary: 'string' },
      },
    },
    inactiveColor: {
      control: 'color',
      description: 'Color for the inactive steps.',
      table: {
        type: { summary: 'string' },
      },
    },
    orientation: {
      control: { type: 'select', options: ['horizontal', 'vertical'] },
      description: 'Orientation of the stepper.',
      table: {
        type: { summary: "'horizontal' | 'vertical'" },
        defaultValue: { summary: 'horizontal' },
      },
    },
  },
} as Meta<StepperProps>;

const Template: StoryFn<StepperProps> = (args) => <Stepper {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  steps: [
    { label: 'Step 1', description: 'Description of Step 1' },
    { label: 'Step 2', description: 'Description of Step 2' },
    { label: 'Step 3', description: 'Description of Step 3' },
  ],
  currentStep: 1,
  activeColor: 'bg-blue-500',
  inactiveColor: 'bg-gray-300',
  orientation: 'horizontal',
};

export const Vertical = Template.bind({});
Vertical.args = {
  steps: [
    { label: 'Step 1', description: 'Description of Step 1' },
    { label: 'Step 2', description: 'Description of Step 2' },
    { label: 'Step 3', description: 'Description of Step 3' },
  ],
  currentStep: 1,
  activeColor: 'bg-blue-500',
  inactiveColor: 'bg-gray-300',
  orientation: 'vertical',
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  steps: [
    { label: 'Step 1', description: 'Description of Step 1' },
    { label: 'Step 2', description: 'Description of Step 2' },
    { label: 'Step 3', description: 'Description of Step 3' },
  ],
  currentStep: 2,
  activeColor: 'bg-green-500',
  inactiveColor: 'bg-red-300',
  orientation: 'horizontal',
};

export const ClickableSteps = Template.bind({});
ClickableSteps.args = {
  steps: [
    { label: 'Step 1', description: 'Description of Step 1' },
    { label: 'Step 2', description: 'Description of Step 2' },
    { label: 'Step 3', description: 'Description of Step 3' },
  ],
  currentStep: 0,
  activeColor: 'bg-blue-500',
  inactiveColor: 'bg-gray-300',
  orientation: 'horizontal',
  onStepClick: (index) => alert(`Clicked step ${index + 1}`),
};
