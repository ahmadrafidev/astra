import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import StatusDot, { StatusDotProps } from '../components/StatusDot/StatusDot';

export default {
    title: 'Components/StatusDot',
    component: StatusDot,
} as Meta;

const Template: StoryFn<StatusDotProps> = (args) => <StatusDot {...args} />;

export const Online = Template.bind({});
Online.args = {
    status: 'online',
};

export const Offline = Template.bind({});
Offline.args = {
    status: 'offline',
};

export const Busy = Template.bind({});
Busy.args = {
    status: 'busy',
};
