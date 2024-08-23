import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

/**
 * Represents an event in the Timeline component.
 * 
 * @typedef {Object} TimelineEvent
 * @property {string} date - The date of the event.
 * @property {string} title - The title of the event.
 * @property {string} description - A description of the event.
 * @property {React.ReactNode} [icon] - An optional icon to display with the event.
 */
export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const timelineContainerStyles = cva('flex', {
  variants: {
    variant: {
      vertical: 'flex-col',
      horizontal: 'flex-row relative justify-evenly w-full',
    },
  },
  defaultVariants: {
    variant: 'vertical',
  },
});

const timelineEventStyles = cva('relative mb-6', {
  variants: {
    variant: {
      vertical: 'flex items-start pl-8',
      horizontal: 'flex flex-col items-center',
    },
  },
});

const timelineLineStyles = cva('absolute bg-gray-300', {
  variants: {
    variant: {
      vertical: 'left-4 w-1',
      horizontal: 'w-full h-1 top-0 left-0',
    },
  },
});

const timelineIconStyles = cva('flex items-center justify-center rounded-full', {
  variants: {
    variant: {
      vertical: 'absolute left-0 top-0 bg-blue-600 text-white p-2 w-8 h-8',
      horizontal: 'bg-blue-600 text-white p-2 w-8 h-8 mt-4',
    },
  },
});

const timelineContentStyles = cva('mx-auto', {
  variants: {
    variant: {
      vertical: 'ml-4',
      horizontal: 'text-center',
    },
  },
});

/**
 * Props for the Timeline component.
 * 
 * @typedef {Object} TimelineProps
 * @property {TimelineEvent[]} events - The list of events to display in the timeline.
 * @property {'vertical' | 'horizontal'} [variant='vertical'] - The layout orientation of the timeline.
 * @property {string} [className] - Additional classes for custom styling.
 */
export interface TimelineProps extends VariantProps<typeof timelineContainerStyles> {
  events: TimelineEvent[];
  className?: string;
}

/**
 * Timeline component for displaying a sequence of events in a vertical or horizontal layout.
 * 
 * @component
 * @param {TimelineProps} props - Props for the Timeline component.
 * @returns {JSX.Element} The rendered Timeline component.
 */
const Timeline: React.FC<TimelineProps> = ({
  events,
  variant,
  className,
}) => {
  return (
    <div className={timelineContainerStyles({ variant, className })}>
      {/* Render a single line for horizontal layout */}
      {variant === 'horizontal' && (
        <div className={timelineLineStyles({ variant })} />
      )}
      {events.map((event, index) => (
        <div key={index} className={timelineEventStyles({ variant })}>
          {/* Line for vertical layout */}
          {variant === 'vertical' && index < events.length - 0 && (
            <div
              className={timelineLineStyles({ variant })}
              style={{
                top: '50%',
                height: 'calc(100% + 1.5rem)',
                transform: 'translateY(-50%)',
              }}
            />
          )}
          {event.icon && (
            <div className={timelineIconStyles({ variant })}>{event.icon}</div>
          )}
          <div className={timelineContentStyles({ variant })}>
            <div className="font-bold font-sans text-sm md:text-base text-gray-700 dark:text-gray-200">{event.date}</div>
            <div className="text-base md:text-lg font-semibold text-gray-900 dark:text-gray-50">{event.title}</div>
            <div className="text-sm md:text-base text-gray-500 dark:text-gray-300">{event.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

Timeline.displayName = "Timeline";
export default Timeline;
