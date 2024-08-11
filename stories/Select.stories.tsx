import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Select, { SelectProps, SelectOption } from '../components/Select/Select';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    options: {
      control: 'object',
      description: 'The options to be displayed in the select.',
      table: {
        type: { summary: 'SelectOption[]' },
      },
    },
    label: {
      control: 'text',
      description: 'The label for the select component.',
      table: {
        type: { summary: 'string' },
      },
    },
    error: {
      control: 'text',
      description: 'Error message to be displayed.',
      table: {
        type: { summary: 'string' },
      },
    },
    helpText: {
      control: 'text',
      description: 'Help text to be displayed.',
      table: {
        type: { summary: 'string' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the select should take the full width of its container.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }, // Convert to string
      },
    },
    variant: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      description: 'The size variant of the select.',
      table: {
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: "'medium'" },
      },
    },
    isClearable: {
      control: 'boolean',
      description: 'Whether the select is clearable.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }, // Convert to string
      },
    },
    onClear: {
      action: 'cleared',
      description: 'Function to call when the clear button is clicked.',
      table: {
        type: { summary: '() => void' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the select.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<SelectProps>;

const Template: StoryFn<SelectProps> = (args) => <Select {...args} />;

const options: SelectOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3', disabled: true },
  { value: 'option4', label: 'Option 4' },
];

export const Default = Template.bind({});
Default.args = {
  options,
  label: 'Choose an option',
  placeholder: 'Select an option',
  fullWidth: false,
  variant: 'medium',
};

export const WithError = Template.bind({});
WithError.args = {
  options,
  label: 'Choose an option',
  placeholder: 'Select an option',
  error: 'This field is required',
  fullWidth: false,
  variant: 'medium',
};

export const WithHelpText = Template.bind({});
WithHelpText.args = {
  options,
  label: 'Choose an option',
  placeholder: 'Select an option',
  helpText: 'Please select one of the options above',
  fullWidth: false,
  variant: 'medium',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  options,
  label: 'Choose an option',
  placeholder: 'Select an option',
  fullWidth: true,
  variant: 'medium',
};

export const Clearable = Template.bind({});
Clearable.args = {
  options,
  label: 'Choose an option',
  placeholder: 'Select an option',
  isClearable: true,
  fullWidth: false,
  variant: 'medium',
};
