import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SegmentedControl, { SegmentedControlProps } from '@/components/SegmentedControl/SegmentedControl';

export default {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  argTypes: {
    segments: {
      control: { type: 'object' },  
      description: 'The array of segment labels to display in the control.',
      table: {
        type: { summary: 'string[]' },
      },
    },
    onSegmentChange: {
      action: 'changed',
      description: 'Callback function triggered when the selected segment(s) change.',
      table: {
        type: { summary: '(selectedSegments: string[] | string) => void' },
      },
    },
    defaultIndex: {
      control: { type: 'number' },
      description: 'The default selected index or indices.',
      table: {
        type: { summary: 'number | number[]' },
        defaultValue: { summary: '0' },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'Whether multiple segments can be selected.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional class names to apply to the segmented control container.',
      table: {
        type: { summary: 'string' },
      },
    },
    activeClassName: {
      control: 'text',
      description: 'Class name for the active segment.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'bg-blue-600 text-white' },
      },
    },
    inactiveClassName: {
      control: 'text',
      description: 'Class name for the inactive segments.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'bg-gray-200 text-gray-600' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'The Segmented Control component allows users to select one or multiple options.',
      },
    },
  },
} as Meta<SegmentedControlProps>;

const Template: StoryFn<SegmentedControlProps> = (args) => <SegmentedControl {...args} />;

export const Default = Template.bind({});
Default.args = {
  segments: ['Option 1', 'Option 2', 'Option 3'],
  defaultIndex: 0,
  activeClassName: 'bg-blue-600 text-white',
  inactiveClassName: 'bg-gray-200 text-gray-600',
};

export const MultipleSelection = Template.bind({});
MultipleSelection.args = {
  segments: ['Segment 1', 'Segment 2', 'Segment 3', 'Segment 4'],
  defaultIndex: [0, 2],
  multiple: true,
  activeClassName: 'bg-green-600 text-white',
  inactiveClassName: 'bg-gray-200 text-gray-600',
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  segments: ['Left', 'Center', 'Right'],
  defaultIndex: 1,
  activeClassName: 'bg-red-600 text-white',
  inactiveClassName: 'bg-gray-300 text-gray-700',
  className: 'border border-red-600 rounded-lg',
};

export const NoDefaultSelection = Template.bind({});
NoDefaultSelection.args = {
  segments: ['One', 'Two', 'Three'],
  defaultIndex: -1,
  activeClassName: 'bg-purple-600 text-white',
  inactiveClassName: 'bg-gray-200 text-gray-600',
};
