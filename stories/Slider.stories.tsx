// stories/Slider.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Slider, { SliderProps } from '../components/Slider/Slider';

export default {
    title: 'Components/Slider',
    component: Slider,
} as Meta;

const Template: StoryFn<SliderProps> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: 50,
    min: 0,
    max: 100,
    step: 1,
};
