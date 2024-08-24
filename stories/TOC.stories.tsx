import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TOC, { TOCProps } from '@/components/TOC/TOC';

export default {
  title: 'Components/Table of Content',
  component: TOC,
  argTypes: {
    items: {
      control: { type: 'object' },
      description: 'The list of items to display in the Table of Contents.',
      table: {
        type: { summary: 'TOCItem[]' },
      },
    },
    title: {
      control: 'text',
      description: 'The title of the TOC section.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'On This Page' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional class names for the TOC container.',
      table: {
        type: { summary: 'string' },
      },
    },
    itemClassName: {
      control: 'text',
      description: 'Class names for each TOC item.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text-sm text-gray-700 dark:text-gray-100 hover:text-gray-800 dark:hover:text-gray-200' },
      },
    },
    titleClassName: {
      control: 'text',
      description: 'Class names for the TOC title.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text-lg font-medium text-gray-900 dark:text-gray-50 mb-2 tracking-tight' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'The TOC (Table of Contents) component is used to render a navigable table of contents for a page, linking to various sections of the content.',
      },
    },
  },
} as Meta<TOCProps>;

const Template: StoryFn<TOCProps> = (args) => <TOC {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 'section1', label: 'Introduction' },
    { id: 'section2', label: 'Getting Started' },
    { id: 'section3', label: 'Advanced Features' },
    { id: 'section4', label: 'Conclusion' },
  ],
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  ...Default.args,
  title: 'Contents',
  className: 'bg-gray-100 p-4 rounded-lg shadow-md',
  itemClassName: 'text-blue-600 hover:text-blue-800',
  titleClassName: 'text-xl font-bold text-gray-800 mb-4',
};
