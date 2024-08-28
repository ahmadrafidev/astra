import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Timeline, { TimelineProps, TimelineEvent } from '../../../components/Timeline/Timeline';

const events: TimelineEvent[] = [
  {
    date: '2024-08-27',
    title: 'Event 1',
    description: 'Description for Event 1',
    icon: <span>Icon1</span>,
  },
  {
    date: '2024-08-28',
    title: 'Event 2',
    description: 'Description for Event 2',
    icon: <span>Icon2</span>,
  },
];

describe('Timeline Component', () => {
  const setup = (props: Partial<TimelineProps> = {}) => {
    render(<Timeline events={events} {...props} />);
  };

  it('renders all events correctly', () => {
    setup();
    events.forEach((event) => {
      expect(screen.getByText(event.date)).toBeInTheDocument();
      expect(screen.getByText(event.title)).toBeInTheDocument();
      expect(screen.getByText(event.description)).toBeInTheDocument();
    });
  });

  it('renders icons for events when provided', () => {
    setup();
    expect(screen.getByText('Icon1')).toBeInTheDocument();
    expect(screen.getByText('Icon2')).toBeInTheDocument();
  });

  it('applies vertical variant correctly', () => {
    setup({ variant: 'vertical' });
    const timelineContainer = screen.getByRole('container');
    expect(timelineContainer).toHaveClass('flex-col');
  });

  it('applies horizontal variant correctly', () => {
    setup({ variant: 'horizontal' });
    const timelineContainer = screen.getByRole('container');
    expect(timelineContainer).toHaveClass('flex-row');
  });

  it('applies custom class name correctly', () => {
    setup({ className: 'custom-class' });
    const timelineContainer = screen.getByRole('container');
    expect(timelineContainer).toHaveClass('custom-class');
  });

  it('renders a single line for horizontal layout', () => {
    setup({ variant: 'horizontal' });
    const line = screen.getByRole('line');
    expect(line).toBeInTheDocument();
    expect(line).toHaveClass('w-full h-1');
  });

  it('renders lines between events in vertical layout', () => {
    setup({ variant: 'vertical' });
    const lines = screen.getAllByRole('line');
    expect(lines).toHaveLength(events.length);
  });
});
