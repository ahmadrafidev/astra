import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Tooltip from '../components/Tooltip/Tooltip';

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
} as Meta;

const Template: StoryFn<typeof Tooltip> = (args) => (
    <div style={{ padding: '50px' }}>
        <Tooltip {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    text: 'This is a tooltip',
    children: <button className="p-2 bg-blue-500 text-white rounded">Hover me</button>,
};
