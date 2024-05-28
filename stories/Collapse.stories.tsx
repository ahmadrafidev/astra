// stories/Collapse.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Collapse from '../components/Collapse/Collapse';
import { CollapseProps } from '../components/Collapse/Collapse';

export default {
    title: 'Components/Collapse',
    component: Collapse,
} as Meta;

const Template: StoryFn<CollapseProps> = (args) => <Collapse {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Click to expand',
    children: 'This is the collapsible content.',
};
