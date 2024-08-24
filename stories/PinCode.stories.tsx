import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import PinCode, { PinCodeProps } from '@/components/PinCode/PinCode';

export default {
  title: 'Components/PIN Code',
  component: PinCode,
  argTypes: {
    length: {
      control: { type: 'number', min: 1 },
      description: 'The length of the PIN code.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '6' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional class names for custom styling.',
      table: {
        type: { summary: 'string' },
      },
    },
    inputClassName: {
      control: 'text',
      description: 'Additional class names for the input elements.',
      table: {
        type: { summary: 'string' },
      },
    },
    isMask: {
      control: 'boolean',
      description: 'Whether to mask the input values.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    pin: {
      control: 'object',
      description: 'The current PIN code.',
      table: {
        type: { summary: 'string[]' },
        defaultValue: { summary: '[]' },
      },
    },
    onComplete: {
      action: 'completed',
      description: 'Callback when the PIN code input is complete.',
      table: {
        type: { summary: '(pin: string) => void' },
      },
    },
    onPinChange: {
      action: 'changed',
      description: 'Callback when the PIN code changes.',
      table: {
        type: { summary: '(pin: string[]) => void' },
      },
    },
  },
} as Meta<PinCodeProps>;

const Template: StoryFn<PinCodeProps> = (args) => <PinCode {...args} />;

export const Default = Template.bind({});
Default.args = {
  length: 6,
  isMask: true,
};

export const FourDigits = Template.bind({});
FourDigits.args = {
  length: 4,
  isMask: true,
};

export const NoMask = Template.bind({});
NoMask.args = {
  length: 6,
  isMask: false,
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  length: 6,
  isMask: true,
  inputClassName: 'custom-input-class',
};

export const CompleteCallback = Template.bind({});
CompleteCallback.args = {
  length: 4,
  isMask: true,
  onComplete: (pin) => alert(`Completed PIN: ${pin}`),
};
