import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { List, ListItem, ListProps } from '../components/List/List';

export default {
    title: 'Components/List',
    component: List,
} as Meta;

const Template: StoryFn<ListProps> = (args) => (
    <List {...args} />
);

export const Default = Template.bind({});

Default.args = {
    items: [
        { content: 'Item 1' },
        { content: 'Item 2' },
        { content: 'Item 3' }
    ],
    variant: 'unordered'
};
