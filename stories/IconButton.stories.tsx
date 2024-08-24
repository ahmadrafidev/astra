import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

import IconButton, { IconButtonProps } from '@/components/IconButton/IconButton';

export default {
  title: 'Components/Icon Button',
  component: IconButton,
  argTypes: {
    icon: {
      control: 'select',
      description: 'The icon component to be rendered inside the button.',
      table: {
        type: { summary: 'ElementType' },
      },
      options: ['CheckCircleIcon', 'XIcon', 'BellIcon'], 
      mapping: {
        CheckCircleIcon: CheckCircleIcon,
        XIcon: (props: any) => <svg {...props}><path d="M..." /></svg>,
        BellIcon: (props: any) => <svg {...props}><path d="M..." /></svg>, 
      },
    },
    iconClassName: {
      control: 'text',
      description: 'Additional class names for the icon.',
      table: {
        type: { summary: 'string' },
      },
    },
    variant: {
      control: { type: 'select', options: ['contained', 'outlinedBorder', 'outlinedNoBorder'] },
      description: 'The variant of the button, determining its style.',
      table: {
        type: { summary: "'contained' | 'outlinedBorder' | 'outlinedNoBorder'" },
        defaultValue: { summary: "'contained'" },
      },
    },
    size: {
      control: { type: 'select', options: ['sm', 'md', 'lg'] },
      description: 'The size of the button.',
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: "'md'" },
      },
    },
    color: {
      control: 'text',
      description: 'Custom color for the button.',
      table: {
        type: { summary: 'string' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional class names for custom styling.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<IconButtonProps>;

const Template: StoryFn<IconButtonProps> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: CheckCircleIcon,
  variant: 'contained',
  size: 'md',
  color: 'blue',
};

export const OutlinedBorder = Template.bind({});
OutlinedBorder.args = {
  icon: CheckCircleIcon,
  variant: 'outlinedBorder',
  size: 'md',
  color: 'green',
};

export const OutlinedNoBorder = Template.bind({});
OutlinedNoBorder.args = {
  icon: CheckCircleIcon,
  variant: 'outlinedNoBorder',
  size: 'md',
  color: 'red',
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  icon: CheckCircleIcon,
  variant: 'contained',
  size: 'sm',
  color: 'yellow',
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  icon: CheckCircleIcon,
  variant: 'contained',
  size: 'lg',
  color: 'purple',
};
