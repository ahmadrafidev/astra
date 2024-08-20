import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import TextArea, { TextAreaProps } from '@/components/TextArea/TextArea';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the textarea',
      table: {
        type: { summary: 'string' },
      },
    },
    error: {
      control: 'text',
      description: 'Error message to display',
      table: {
        type: { summary: 'string' },
      },
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display',
      table: {
        type: { summary: 'string' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional class names for styling',
      table: {
        type: { summary: 'string' },
      },
    },
    id: {
      control: 'text',
      description: 'ID for the textarea',
      table: {
        type: { summary: 'string' },
      },
    },
    rows: {
      control: { type: 'number' },
      description: 'Number of rows for the textarea',
      table: {
        type: { summary: 'number' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the textarea',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }, // Change to string 'false'
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the textarea',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<TextAreaProps>;

const Template: StoryFn<TextAreaProps> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Description',
  placeholder: 'Enter your description here...',
  rows: 4,
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Description',
  placeholder: 'Enter your description here...',
  error: 'This field is required',
  rows: 4,
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: 'Description',
  placeholder: 'Enter your description here...',
  helperText: 'Please provide a detailed description',
  rows: 4,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Description',
  placeholder: 'This field is disabled',
  disabled: true,
  rows: 4,
};
