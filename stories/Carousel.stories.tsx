import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import Carousel from '@/components/Carousel/Carousel';

export default {
    title: 'Components/Carousel',
    component: Carousel,
} as Meta;

const Template: StoryFn<typeof Carousel> = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {
    images: [
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
    ],
};
