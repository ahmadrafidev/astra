import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SearchBar, { SearchBarProps } from '../components/SearchBar/SearchBar';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  argTypes: {
    onSearch: { action: 'searched', description: 'Callback function when the search query changes.' },
    className: {
      control: 'text',
      description: 'Additional class names for custom styling.',
      table: {
        type: { summary: 'string' },
      },
    },
    icon: {
      control: 'object',
      description: 'Icon to display inside the search bar.',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: '<MagnifyingGlassIcon />' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the search input.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'Search AstraUI'" },
      },
    },
    debounceTime: {
      control: { type: 'number', min: 0 },
      description: 'Time in milliseconds to debounce the search input.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '300' }, // Convert to string
      },
    },
    inputProps: {
      control: 'object',
      description: 'Additional props for the input element.',
      table: {
        type: { summary: 'React.InputHTMLAttributes<HTMLInputElement>' },
      },
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      description: 'Size of the search bar.',
      table: {
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: "'medium'" },
      },
    },
  },
} as Meta<SearchBarProps>;

const Template: StoryFn<SearchBarProps> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search AstraUI',
  debounceTime: 300,
  size: 'medium',
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  placeholder: 'Search...',
  debounceTime: 300,
  size: 'small',
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  placeholder: 'Search AstraUI',
  debounceTime: 300,
  size: 'large',
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  placeholder: 'Search AstraUI',
  debounceTime: 300,
  size: 'medium',
  icon: <MagnifyingGlassIcon className="h-6 w-6 text-blue-500" aria-hidden="true" />,
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
  placeholder: 'Search...',
  debounceTime: 300,
  size: 'medium',
  className: 'custom-search-bar',
};
