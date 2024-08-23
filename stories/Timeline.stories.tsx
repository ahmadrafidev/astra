import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Timeline, { TimelineProps } from '@/components/Timeline/Timeline';
import { CalendarIcon } from 'lucide-react';

export default {
  title: 'Components/Timeline',
  component: Timeline,
  argTypes: {
    events: {
      control: { type: 'object' }, // Control for array of events
      description: 'The list of events to display in the timeline.',
      table: {
        type: { summary: 'TimelineEvent[]' },
      },
    },
    variant: {
      control: { type: 'select', options: ['vertical', 'horizontal'] },
      description: 'The layout orientation of the timeline.',
      table: {
        type: { summary: 'vertical | horizontal' },
        defaultValue: { summary: 'vertical' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional classes for custom styling.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The Timeline component is used to display a sequence of events in either a vertical or horizontal layout.',
      },
    },
  },
} as Meta<TimelineProps>;

const Template: StoryFn<TimelineProps> = (args) => <Timeline {...args} />;

export const Vertical = Template.bind({});
Vertical.args = {
  variant: 'vertical',
  events: [
    {
      date: 'January 1, 2024',
      title: 'New Year’s Day',
      description: 'Celebration of the first day of the year.',
      icon: <CalendarIcon />,
    },
    {
      date: 'February 14, 2024',
      title: 'Valentine’s Day',
      description: 'A day to celebrate love and affection.',
      icon: <CalendarIcon />,
    },
    {
      date: 'July 4, 2024',
      title: 'Independence Day',
      description: 'A day to celebrate independence and freedom.',
      icon: <CalendarIcon />,
    },
  ],
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  variant: 'horizontal',
  events: [
    {
      date: 'March 8, 2024',
      title: 'International Women’s Day',
      description: 'Celebrating the social, economic, cultural, and political achievements of women.',
      icon: <CalendarIcon />,
    },
    {
      date: 'April 22, 2024',
      title: 'Earth Day',
      description: 'A day to support environmental protection.',
      icon: <CalendarIcon />,
    },
    {
      date: 'December 25, 2024',
      title: 'Christmas Day',
      description: 'Celebration of the birth of Jesus Christ.',
      icon: <CalendarIcon />,
    },
  ],
};
