// stories/Rating.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Rating from '../components/Rating/Rating';
import { RatingProps } from '../components/Rating/Rating';

export default {
    title: 'Components/Rating',
    component: Rating,
} as Meta;

const Template: StoryFn<RatingProps>= (args) => <Rating {...args} />;

export const Default = Template.bind({});
Default.args = {
    maxRating: 5,
    onRate: (rating) => alert(`Rated: ${rating}`),
};
