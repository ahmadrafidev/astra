import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Spinner, { SpinnerProps } from '@/components/Spinner/Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: { type: 'select', options: ['sm', 'md', 'lg', 16, 24, 32] },
      description: 'The size of the spinner.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: "'md'" }, 
      },
    },
    color: {
      control: 'color',
      description: 'The color of the spinner.',
      table: {
        type: { summary: 'string' },
      },
    },
    thickness: {
      control: { type: 'number', min: 1 },
      description: 'The thickness of the spinner border.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '4' }, 
      },
    },
    speed: {
      control: { type: 'select', options: ['slow', 'normal', 'fast'] },
      description: 'The speed of the spinner animation.',
      table: {
        type: { summary: "'slow' | 'normal' | 'fast'" },
        defaultValue: { summary: "'normal'" },
      },
    },
    className: {
      control: 'text',
      description: 'Additional class names for custom styling.',
      table: {
        type: { summary: 'string' },
      },
    },
    'aria-label': {
      control: 'text',
      description: 'ARIA label for accessibility.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'Spinner'" },
      },
    },
  },
} as Meta<SpinnerProps>;

const Template: StoryFn<SpinnerProps> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  color: 'text-blue-500',
  thickness: 4,
  speed: 'normal',
  'aria-label': 'Spinner',
};

export const LargeSpinner = Template.bind({});
LargeSpinner.args = {
  size: 'lg',
  color: 'text-red-500',
  thickness: 4,
  speed: 'normal',
  'aria-label': 'Large Spinner',
};

export const SmallSpinner = Template.bind({});
SmallSpinner.args = {
  size: 'sm',
  color: 'text-green-500',
  thickness: 2,
  speed: 'fast',
  'aria-label': 'Small Spinner',
};

export const CustomThickness = Template.bind({});
CustomThickness.args = {
  size: 'md',
  color: 'text-purple-500',
  thickness: 6,
  speed: 'slow',
  'aria-label': 'Spinner with Custom Thickness',
};

export const CustomSpeed = Template.bind({});
CustomSpeed.args = {
  size: 'md',
  color: 'text-yellow-500',
  thickness: 4,
  speed: 'fast',
  'aria-label': 'Fast Spinner',
};
