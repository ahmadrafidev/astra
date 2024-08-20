import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import SkeletonLoader, { SkeletonLoaderProps } from '@/components/SkeletonLoader/SkeletonLoader';

export default {
  title: 'Components/SkeletonLoader',
  component: SkeletonLoader,
  argTypes: {
    width: {
      control: 'text',
      description: 'The width of the skeleton loader.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: "'100%'" }, 
      },
    },
    height: {
      control: 'text',
      description: 'The height of the skeleton loader.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: "'1rem'" }, 
      },
    },
    className: {
      control: 'text',
      description: 'Additional class names for custom styling.',
      table: {
        type: { summary: 'string' },
      },
    },
    shape: {
      control: { type: 'select', options: ['rectangle', 'circle', 'text'] },
      description: 'The shape of the skeleton loader.',
      table: {
        type: { summary: "'rectangle' | 'circle' | 'text'" },
        defaultValue: { summary: "'rectangle'" },
      },
    },
    animation: {
      control: { type: 'select', options: ['pulse', 'wave', 'none'] },
      description: 'The animation style of the skeleton loader.',
      table: {
        type: { summary: "'pulse' | 'wave' | 'none'" },
        defaultValue: { summary: "'pulse'" }, 
      },
    },
    count: {
      control: { type: 'number', min: 1 },
      description: 'The number of skeleton loaders to display.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' }, 
      },
    },
    gap: {
      control: 'text',
      description: 'The gap between multiple skeleton loaders.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: "'0.5rem'" },
      },
    },
    variant: {
      control: { type: 'select', options: ['light', 'dark'] },
      description: 'The color variant of the skeleton loader.',
      table: {
        type: { summary: "'light' | 'dark'" },
        defaultValue: { summary: "'light'" }, 
      },
    },
  },
} as Meta<SkeletonLoaderProps>;

const Template: StoryFn<SkeletonLoaderProps> = (args) => <SkeletonLoader {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '100%',
  height: '1rem',
  shape: 'rectangle',
  animation: 'pulse',
  count: 1,
  gap: '0.5rem',
  variant: 'light',
};

export const CircleShape = Template.bind({});
CircleShape.args = {
  width: '2rem',
  height: '2rem',
  shape: 'circle',
  animation: 'pulse',
  count: 1,
  variant: 'light',
};

export const MultipleLoaders = Template.bind({});
MultipleLoaders.args = {
  width: '100%',
  height: '1rem',
  shape: 'rectangle',
  animation: 'pulse',
  count: 3,
  gap: '1rem',
  variant: 'light',
};

export const WaveAnimation = Template.bind({});
WaveAnimation.args = {
  width: '100%',
  height: '1rem',
  shape: 'rectangle',
  animation: 'wave',
  count: 1,
  variant: 'light',
};

export const DarkVariant = Template.bind({});
DarkVariant.args = {
  width: '100%',
  height: '1rem',
  shape: 'rectangle',
  animation: 'pulse',
  count: 1,
  variant: 'dark',
};
