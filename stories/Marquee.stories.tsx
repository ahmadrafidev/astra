import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import Marquee, { MarqueeProps } from '@/components/Marquee/Marquee';

export default {
  title: 'Components/Marquee',
  component: Marquee,
  argTypes: {
    text: {
      control: 'text',
      description: 'The text to display in the marquee.',
      table: {
        type: { summary: 'string' },
      },
    },
    speed: {
      control: { type: 'number', min: 1 },
      description: 'The speed of the scrolling text in pixels per second.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '50' },
      },
    },
    direction: {
      control: { type: 'select', options: ['left', 'right'] },
      description: "The direction of the marquee scroll ('left' or 'right').",
      table: {
        type: { summary: "'left' | 'right'" },
        defaultValue: { summary: "'left'" },
      },
    },
    className: {
      control: 'text',
      description: 'Additional class names for styling the marquee.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'The Marquee component scrolls text horizontally across the screen.',
      },
    },
  },
} as Meta<MarqueeProps>;

const Template: StoryFn<MarqueeProps> = (args) => <Marquee {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Breaking News: React is awesome!',
  speed: 50,
  direction: 'left',
};

export const FastMarquee = Template.bind({});
FastMarquee.args = {
  text: 'This is a fast-moving marquee!',
  speed: 100,
  direction: 'left',
};

export const ReverseDirection = Template.bind({});
ReverseDirection.args = {
  text: 'This marquee moves to the right!',
  speed: 50,
  direction: 'right',
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  text: 'Custom styled marquee with background and text color.',
  speed: 50,
  direction: 'left',
  className: 'bg-blue-500 text-white py-2 px-4',
};
