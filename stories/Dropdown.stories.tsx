import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Dropdown, { DropdownProps } from '@/components/Dropdown/Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    options: {
      control: { type: 'object' }, 
      description: 'The list of options to display in the dropdown.',
      table: {
        type: { summary: 'string[]' },
        defaultValue: { summary: '[]' },
      },
    },
    onSelect: {
      action: 'selected',
      description: 'Callback when an option is selected.',
      table: {
        type: { summary: '(option: string) => void' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional class names for custom styling.',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text to display when no option is selected.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'Select an option'" },
      },
    },
  },
} as Meta<DropdownProps>;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  placeholder: 'Select an option',
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  placeholder: 'Choose something...',
};

export const LongList = Template.bind({});
LongList.args = {
  options: [
    'Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5',
    'Option 6', 'Option 7', 'Option 8', 'Option 9', 'Option 10',
  ],
  placeholder: 'Select an option',
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  className: 'custom-dropdown-class',
  placeholder: 'Select an option',
};
