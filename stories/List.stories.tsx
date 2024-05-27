// stories/List.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { List, ListItem } from '../components/List/List';

export default {
    title: 'Components/List',
    component: List,
} as Meta;

const Template: StoryFn = (args) => (
    <List {...args} items={['Item 1', 'Item 2', 'Item 3']} />
);

export const Default = Template.bind({});

Default.args = {};
