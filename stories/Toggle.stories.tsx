import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Sun, Moon } from 'lucide-react'; // Example icons
import Toggle, { ToggleProps } from '../components/Toggle/Toggle'; 

export default {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    onIcon: {
      control: 'object',
      description: 'The icon to be displayed when the toggle is on.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    offIcon: {
      control: 'object',
      description: 'The icon to be displayed when the toggle is off.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional class names for custom styling of the button.',
      table: {
        type: { summary: 'string' },
      },
    },
    onClassName: {
      control: 'text',
      description: 'Class names for the button when it is on.',
      table: {
        type: { summary: 'string' },
      },
    },
    offClassName: {
      control: 'text',
      description: 'Class names for the button when it is off.',
      table: {
        type: { summary: 'string' },
      },
    },
    iconClassName: {
      control: 'text',
      description: 'Class names for the icon.',
      table: {
        type: { summary: 'string' },
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the toggle button.',
      table: {
        type: { summary: 'string' },
      },
    },
    defaultOn: {
      control: 'boolean',
      description: 'The default state of the toggle button.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hideOffIcon: {
      control: 'boolean',
      description: 'Whether to hide the off icon when the toggle is off.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onChange: {
      action: 'changed',
      description: 'Function to call when the toggle state changes.',
      table: {
        type: { summary: '(state: boolean) => void' },
      },
    },
  },
} as Meta<ToggleProps>;

const Template: StoryFn<ToggleProps> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  onIcon: <Sun />,
  offIcon: <Moon />,
  ariaLabel: 'Dark mode toggle',
};

export const WithCustomClasses = Template.bind({});
WithCustomClasses.args = {
  onIcon: <Sun />,
  offIcon: <Moon />,
  onClassName: 'bg-yellow-500',
  offClassName: 'bg-blue-500',
  iconClassName: 'text-white',
  ariaLabel: 'Custom class toggle',
};
