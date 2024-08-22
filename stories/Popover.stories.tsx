import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import Popover, { PopoverProps } from '@/components/Popover/Popover';
import Button from '@/components/Button/Button'; 

export default {
  title: 'Components/Popover',
  component: Popover,
  argTypes: {
    placement: {
      control: { type: 'select', options: ['top', 'bottom', 'left', 'right'] },
      description: 'The placement of the popover relative to the trigger.',
      table: {
        type: { summary: "'top' | 'bottom' | 'left' | 'right'" },
        defaultValue: { summary: "'bottom'" },
      },
    },
    trigger: {
      control: { type: 'select', options: ['click', 'hover', 'focus'] },
      description: 'The event that triggers the visibility of the popover.',
      table: {
        type: { summary: "'click' | 'hover' | 'focus'" },
        defaultValue: { summary: "'click'" },
      },
    },
    className: {
      control: 'text',
      description: 'Additional class names to apply to the popover container.',
      table: {
        type: { summary: 'string' },
      },
    },
    offset: {
      control: { type: 'number', min: 0 },
      description: 'The distance between the trigger and the popover in pixels.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '8' }, // Changed to string
      },
    },
    closeOnClickOutside: {
      control: 'boolean',
      description: 'Whether to close the popover when clicking outside.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    closeOnEsc: {
      control: 'boolean',
      description: 'Whether to close the popover when pressing the Escape key.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the popover.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'Popover'" },
      },
    },
  },
} as Meta<PopoverProps>;

const Template: StoryFn<PopoverProps> = (args) => (
  <Popover {...args}>
    <Button>Toggle Popover</Button>
  </Popover>
);

export const Default = Template.bind({});
Default.args = {
  content: <div>Default Popover Content</div>,
  placement: 'bottom',
  trigger: 'click',
  offset: 8,
  closeOnClickOutside: true,
  closeOnEsc: true,
  ariaLabel: 'Default Popover',
};

export const TopPlacement = Template.bind({});
TopPlacement.args = {
  content: <div>Popover on Top</div>,
  placement: 'top',
  trigger: 'click',
  offset: 8,
};

export const HoverTrigger = Template.bind({});
HoverTrigger.args = {
  content: <div>Popover on Hover</div>,
  placement: 'right',
  trigger: 'hover',
  offset: 8,
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  content: <div>Custom Class Popover</div>,
  placement: 'bottom',
  trigger: 'click',
  className: 'bg-blue-500 text-white',
  offset: 8,
};
