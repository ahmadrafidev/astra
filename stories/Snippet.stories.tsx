import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Snippet, { SnippetProps } from '../components/Snippet/Snippet';

export default {
  title: 'Components/Snippet',
  component: Snippet,
  argTypes: {
    language: {
      control: 'text',
      description: 'The programming language of the code snippet.',
      table: {
        type: { summary: 'string' },
      },
    },
    code: {
      control: 'text',
      description: 'The code to be displayed.',
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
    showLineNumbers: {
      control: 'boolean',
      description: 'Whether to show line numbers.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    wrapLongLines: {
      control: 'boolean',
      description: 'Whether to wrap long lines.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    maxHeight: {
      control: 'text',
      description: 'Maximum height of the code container.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'400px'" },
      },
    },
    copyable: {
      control: 'boolean',
      description: 'Whether the code snippet is copyable.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    theme: {
      control: { type: 'select', options: ['light', 'dark'] },
      description: 'Theme of the code snippet.',
      table: {
        type: { summary: "'light' | 'dark'" },
        defaultValue: { summary: "'light'" },
      },
    },
  },
} as Meta<SnippetProps>;

const Template: StoryFn<SnippetProps> = (args) => <Snippet {...args} />;

export const LightTheme = Template.bind({});
LightTheme.args = {
  language: 'javascript',
  code: "console.log('Hello, World!');",
  theme: 'light',
  showLineNumbers: false,
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  language: 'javascript',
  code: "console.log('Hello, World!');",
  theme: 'dark',
  showLineNumbers: false,
};

export const WithLineNumbers = Template.bind({});
WithLineNumbers.args = {
  language: 'javascript',
  code: "console.log('Hello, World!');\nconsole.log('Another line');",
  theme: 'light',
  showLineNumbers: true,
};

export const WrappedLines = Template.bind({});
WrappedLines.args = {
  language: 'javascript',
  code: "console.log('This is a very long line of code that should wrap if wrapping is enabled');",
  theme: 'light',
  wrapLongLines: true,
};

export const CopyableCode = Template.bind({});
CopyableCode.args = {
  language: 'javascript',
  code: "const sum = (a, b) => a + b;",
  theme: 'light',
  copyable: true,
};
