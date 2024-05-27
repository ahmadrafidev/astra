// stories/Spinner.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Spinner, { SpinnerProps } from '../components/Spinner/Spinner';

export default {
    title: 'Components/Spinner',
    component: Spinner,
} as Meta;

const Template: StoryFn<SpinnerProps> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 24,
};
