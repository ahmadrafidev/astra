import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import Switch, { SwitchProps } from '@/components/Switch/Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional class names for custom styling.',
      table: {
        type: { summary: 'string' },
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the switch.',
      table: {
        type: { summary: 'string' },
      },
    },
    checked: {
      control: 'boolean',
      description: 'The current checked state of the switch.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onChange: {
      action: 'changed',
      description: 'Function to call when the switch state changes.',
      table: {
        type: { summary: '(e: React.ChangeEvent<HTMLInputElement>) => void' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      description: 'The size of the switch.',
      table: {
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: 'medium' },
      },
    },
  },
} as Meta<SwitchProps>;

const Template: StoryFn<SwitchProps> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  size: 'medium',
  ariaLabel: 'Toggle Switch',
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  size: 'medium',
  ariaLabel: 'Toggle Switch',
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  disabled: true,
  size: 'medium',
  ariaLabel: 'Toggle Switch',
};

export const LargeSwitch = Template.bind({});
LargeSwitch.args = {
  checked: false,
  size: 'large',
  ariaLabel: 'Large Toggle Switch',
};

export const SmallSwitch = Template.bind({});
SmallSwitch.args = {
  checked: false,
  size: 'small',
  ariaLabel: 'Small Toggle Switch',
};
