import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import Pagination, { PaginationProps } from '@/components/Pagination/Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    totalItems: {
      control: 'number',
      description: 'Total number of items to paginate.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '50' },
      },
    },
    itemsPerPage: {
      control: 'number',
      description: 'Number of items per page.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '10' },
      },
    },
    currentPage: {
      control: 'number',
      description: 'The current active page.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    onPageChange: {
      action: 'pageChanged',
      description: 'Callback function called when the page changes.',
      table: {
        type: { summary: '(page: number) => void' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional class names for custom styling.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<PaginationProps>;

const Template: StoryFn<PaginationProps> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  totalItems: 50,
  itemsPerPage: 10,
  currentPage: 1,
};

export const CustomItemsPerPage = Template.bind({});
CustomItemsPerPage.args = {
  totalItems: 100,
  itemsPerPage: 20,
  currentPage: 1,
};

export const ManyPages = Template.bind({});
ManyPages.args = {
  totalItems: 200,
  itemsPerPage: 10,
  currentPage: 5,
};

export const FewItems = Template.bind({});
FewItems.args = {
  totalItems: 5,
  itemsPerPage: 5,
  currentPage: 1,
};
