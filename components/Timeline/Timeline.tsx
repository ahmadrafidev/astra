import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const timelineContainerStyles = cva('flex', {
  variants: {
    variant: {
      vertical: 'flex-col',
      horizontal: 'flex-row justify-between items-start',
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

const timelineLineStyles = cva('absolute', {
  variants: {
    variant: {
      vertical: 'left-4 top-0 bottom-0 w-1 bg-gray-300',
      horizontal: 'w-full h-1 bg-gray-300 top-1/2 left-0',
    },
  },
});

const timelineIconStyles = cva('flex items-center justify-center rounded-full', {
  variants: {
    variant: {
      vertical: 'absolute left-0 top-0 bg-blue-600 text-white p-2 w-8 h-8',
      horizontal: 'bg-blue-600 text-white p-2 w-8 h-8 mb-2',
    },
  },
});

const timelineContentStyles = cva('ml-4', {
  variants: {
    variant: {
      vertical: '',
      horizontal: 'text-center',
    },
  },
});

interface TimelineProps extends VariantProps<typeof timelineContainerStyles> {
  events: TimelineEvent[];
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({
  events,
  variant,
  className,
}) => {
  return (
    <div className={timelineContainerStyles({ variant, className })}>
      {events.map((event, index) => (
        <div key={index} className={timelineEventStyles({ variant })}>
          {index >= 0 && <div className={timelineLineStyles({ variant })} />}
          {event.icon && (
            <div className={timelineIconStyles({ variant })}>{event.icon}</div>
          )}
          <div className={timelineContentStyles({ variant })}>
            <div className="font-bold text-gray-700">{event.date}</div>
            <div className="text-lg font-medium">{event.title}</div>
            <div className="text-gray-500">{event.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
