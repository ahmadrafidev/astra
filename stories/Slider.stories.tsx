import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import Slider, { SliderProps } from '@/components/Slider/Slider';

export default {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {
    value: {
      control: { type: 'number', min: 0 },
      description: 'The current value of the slider.',
      table: {
        type: { summary: 'number' },
      },
    },
    min: {
      control: { type: 'number', min: 0 },
      description: 'The minimum value of the slider.',
      table: {
        type: { summary: 'number' },
      },
    },
    max: {
      control: { type: 'number', min: 0 },
      description: 'The maximum value of the slider.',
      table: {
        type: { summary: 'number' },
      },
    },
    step: {
      control: { type: 'number', min: 1 },
      description: 'The step value for the slider.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' }, 
      },
    },
    onChange: {
      action: 'changed',
      description: 'Callback when the slider value changes.',
      table: {
        type: { summary: '(e: React.ChangeEvent<HTMLInputElement>) => void' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional class names for custom styling.',
      table: {
        type: { summary: 'string' },
      },
    },
    id: {
      control: 'text',
      description: 'The id for the slider input.',
      table: {
        type: { summary: 'string' },
      },
    },
    'aria-label': {
      control: 'text',
      description: 'The aria-label for accessibility.',
      table: {
        type: { summary: 'string' },
      },
    },
    'aria-labelledby': {
      control: 'text',
      description: 'The aria-labelledby for accessibility.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<SliderProps>;

const Template: StoryFn<SliderProps> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 50,
  min: 0,
  max: 100,
  step: 1,
  id: 'default-slider',
  'aria-label': 'Slider',
};

export const CustomRange = Template.bind({});
CustomRange.args = {
  value: 25,
  min: 10,
  max: 50,
  step: 5,
  id: 'custom-range-slider',
  'aria-label': 'Custom Range Slider',
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  value: 75,
  min: 0,
  max: 100,
  step: 1,
  className: 'custom-slider',
  id: 'custom-class-slider',
  'aria-label': 'Custom Class Slider',
};

export const SmallSteps = Template.bind({});
SmallSteps.args = {
  value: 10,
  min: 0,
  max: 100,
  step: 0.1,
  id: 'small-steps-slider',
  'aria-label': 'Small Steps Slider',
};
