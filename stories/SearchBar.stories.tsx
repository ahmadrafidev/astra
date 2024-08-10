import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SearchBar from '../components/SearchBar/SearchBar';
import { SearchBarProps } from '../components/SearchBar/SearchBar';

export default {
    title: 'Components/SearchBar',
    component: SearchBar,
} as Meta;

const Template: StoryFn<SearchBarProps> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    onSearch: (query) => alert(`Searching for: ${query}`),
};
