import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Snackbar, { SnackbarProps } from '../components/Snackbar/Snackbar';
import { XIcon } from 'lucide-react';

export default {
  title: 'Components/Snackbar',
  component: Snackbar,
  argTypes: {
    message: {
      control: 'text',
      description: 'The message to be displayed in the snackbar.',
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
    open: {
      control: 'boolean',
      description: 'Whether the snackbar is open.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    duration: {
      control: { type: 'number', min: 0 },
      description: 'Duration for which the snackbar is visible (in milliseconds).',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '3000' }, 
      },
    },
    onClose: {
      action: 'closed',
      description: 'Function to call when the snackbar closes.',
      table: {
        type: { summary: '() => void' },
      },
    },
    variant: {
      control: { type: 'select', options: ['info', 'success', 'warning', 'error'] },
      description: 'The variant of the snackbar, determining its style.',
      table: {
        type: { summary: "'info' | 'success' | 'warning' | 'error'" },
        defaultValue: { summary: "'info'" },
      },
    },
    action: {
      control: 'text',
      description: 'Action button or element to be displayed in the snackbar.',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to show a close button in the snackbar.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    icon: {
      control: 'text',
      description: 'Icon to be displayed in the snackbar.',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
} as Meta<SnackbarProps>;

const Template: StoryFn<SnackbarProps> = (args) => <Snackbar {...args} />;

export const InfoSnackbar = Template.bind({});
InfoSnackbar.args = {
  message: 'This is an info message',
  open: true,
  variant: 'info',
  duration: 3000,
  showCloseButton: true,
};

export const SuccessSnackbar = Template.bind({});
SuccessSnackbar.args = {
  message: 'This is a success message',
  open: true,
  variant: 'success',
  duration: 3000,
  showCloseButton: true,
};

export const WarningSnackbar = Template.bind({});
WarningSnackbar.args = {
  message: 'This is a warning message',
  open: true,
  variant: 'warning',
  duration: 3000,
  showCloseButton: true,
};

export const ErrorSnackbar = Template.bind({});
ErrorSnackbar.args = {
  message: 'This is an error message',
  open: true,
  variant: 'error',
  duration: 3000,
  showCloseButton: true,
};

export const SnackbarWithAction = Template.bind({});
SnackbarWithAction.args = {
  message: 'This is a message with an action',
  open: true,
  variant: 'info',
  duration: 5000,
  action: <button className="text-white underline">Undo</button>,
  showCloseButton: true,
};

export const SnackbarWithIcon = Template.bind({});
SnackbarWithIcon.args = {
  message: 'This is a message with an icon',
  open: true,
  variant: 'info',
  duration: 3000,
  icon: <XIcon size={18} />,
  showCloseButton: true,
};
