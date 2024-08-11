import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import StatusDot, { StatusDotProps } from '../components/StatusDot/StatusDot';

export default {
  title: 'Components/StatusDot',
  component: StatusDot,
  argTypes: {
    status: {
      control: { type: 'select', options: ['online', 'offline', 'busy'] },
      description: 'The status to be represented.',
      table: {
        type: { summary: "'online' | 'offline' | 'busy'" },
      },
    },
    type: {
      control: { type: 'select', options: ['dot', 'icon'] },
      description: 'The type of status indicator, either a dot or an icon.',
      table: {
        type: { summary: "'dot' | 'icon'" },
        defaultValue: { summary: 'dot' },
      },
    },
    icon: {
      control: 'text',
      description: "The icon to be displayed if type is 'icon'.",
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    label: {
      control: 'text',
      description: 'Custom label for the status.',
      table: {
        type: { summary: 'string' },
      },
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to show the label next to the status indicator.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional class names for custom styling.',
      table: {
        type: { summary: 'string' },
      },
    },
    children: {
      control: 'text',
      description: 'Content to be displayed inside the status indicator.',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
} as Meta<StatusDotProps>;

const Template: StoryFn<StatusDotProps> = (args) => <StatusDot {...args} />;

export const OnlineDot = Template.bind({});
OnlineDot.args = {
  status: 'online',
  label: 'Online',
  type: 'dot',
};

export const OfflineDot = Template.bind({});
OfflineDot.args = {
  status: 'offline',
  label: 'Offline',
  type: 'dot',
};

export const BusyDot = Template.bind({});
BusyDot.args = {
  status: 'busy',
  label: 'Busy',
  type: 'dot',
};

export const IconStatus = Template.bind({});
IconStatus.args = {
  status: 'online',
  type: 'icon',
  icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>,
  label: 'Available',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  status: 'online',
  type: 'dot',
  showLabel: false,
};
