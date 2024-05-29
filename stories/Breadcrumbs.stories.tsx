import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';

export default {
    title: 'Components/Breadcrumbs',
    component: Breadcrumbs,
} as Meta;

const Template: StoryFn<typeof Breadcrumbs> = (args) => (
    <div style={{ padding: '50px' }}>
        <Breadcrumbs {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    items: [
        { name: 'Home', path: '/' },
        { name: 'Documentation', path: '/documentation' },
        { name: 'Components', path: '/documentation/components' },
    ],
};
