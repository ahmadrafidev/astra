import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Tab, Tabs, TabProps, TabsProps } from '@/components/Tabs/Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    theme: {
      control: { type: 'select', options: ['light', 'dark'] },
      description: 'The current theme for the tabs.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'light' },
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
} as Meta<TabsProps>;

const Template: StoryFn<TabsProps> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: 'light',
  children: [
    <Tab key="tab1" label="Tab 1">
      Content for Tab 1
    </Tab>,
    <Tab key="tab2" label="Tab 2">
      Content for Tab 2
    </Tab>,
    <Tab key="tab3" label="Tab 3">
      Content for Tab 3
    </Tab>,
  ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  theme: 'light',
  children: [
    <Tab key="tab1" label="Tab 1" iconLight="/path/to/light-icon1.png" iconDark="/path/to/dark-icon1.png">
      Content for Tab 1
    </Tab>,
    <Tab key="tab2" label="Tab 2" iconLight="/path/to/light-icon2.png" iconDark="/path/to/dark-icon2.png">
      Content for Tab 2
    </Tab>,
    <Tab key="tab3" label="Tab 3" iconLight="/path/to/light-icon3.png" iconDark="/path/to/dark-icon3.png">
      Content for Tab 3
    </Tab>,
  ],
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  theme: 'dark',
  children: [
    <Tab key="tab1" label="Tab 1" iconLight="/path/to/light-icon1.png" iconDark="/path/to/dark-icon1.png">
      Content for Tab 1
    </Tab>,
    <Tab key="tab2" label="Tab 2" iconLight="/path/to/light-icon2.png" iconDark="/path/to/dark-icon2.png">
      Content for Tab 2
    </Tab>,
    <Tab key="tab3" label="Tab 3" iconLight="/path/to/light-icon3.png" iconDark="/path/to/dark-icon3.png">
      Content for Tab 3
    </Tab>,
  ],
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  theme: 'light',
  className: 'custom-tabs-class',
  children: [
    <Tab key="tab1" label="Custom Tab 1">
      Custom styled content for Tab 1
    </Tab>,
    <Tab key="tab2" label="Custom Tab 2">
      Custom styled content for Tab 2
    </Tab>,
    <Tab key="tab3" label="Custom Tab 3">
      Custom styled content for Tab 3
    </Tab>,
  ],
};
