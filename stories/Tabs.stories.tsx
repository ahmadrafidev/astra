// stories/Tabs.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Tabs, Tab } from '../components/Tabs/Tabs';

export default {
    title: 'Components/Tabs',
    component: Tabs,
} as Meta;

const Template: StoryFn = (args) => (
    <Tabs {...args}>
        <Tab label="Tab 1">Content of Tab 1</Tab>
        <Tab label="Tab 2">Content of Tab 2</Tab>
        <Tab label="Tab 3">Content of Tab 3</Tab>
    </Tabs>
);

export const Default = Template.bind({});
Default.args = {};
