// stories/Switch.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Switch, { SwitchProps } from '../components/Switch/Switch';

export default {
    title: 'Components/Switch',
    component: Switch,
} as Meta;

const Template: StoryFn<SwitchProps> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
    checked: true,
};
