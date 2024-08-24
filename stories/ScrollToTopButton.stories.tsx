import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import ScrollToTopButton, { ScrollToTopButtonProps } from '@/components/ScrollToTopButton/ScrollToTopButton';

export default {
  title: 'Components/Scroll to Top Button',
  component: ScrollToTopButton,
  argTypes: {
    showAt: {
      control: { type: 'number', min: 0 },
      description: 'Scroll position at which to show the button.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' }, 
      },
    },
    smooth: {
      control: 'boolean',
      description: 'Whether to scroll smoothly or not.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional class names for styling.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A button that appears when the user scrolls down the page, allowing them to quickly return to the top.',
      },
    },
  },
} as Meta<ScrollToTopButtonProps>;

const Template: StoryFn<ScrollToTopButtonProps> = (args) => <ScrollToTopButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  showAt: 100,
  smooth: true,
  className: 'fixed bottom-4 right-4',
};

export const ImmediateShow = Template.bind({});
ImmediateShow.args = {
  showAt: 10,
  smooth: true,
  className: 'fixed bottom-4 right-4',
};

export const NoSmoothScroll = Template.bind({});
NoSmoothScroll.args = {
  showAt: 100,
  smooth: false,
  className: 'fixed bottom-4 right-4',
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  showAt: 100,
  smooth: true,
  className: 'fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white',
};
