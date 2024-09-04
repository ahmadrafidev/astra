import React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const dividerVariants = cva(
  'flex shrink-0',
  {
    variants: {
      orientation: {
        horizontal: 'w-full',
        vertical: 'h-full',
      },
      size: {
        sm: '',
        md: '',
        lg: '',
      },
    },
    compoundVariants: [
      {
        orientation: 'horizontal',
        size: 'sm',
        class: 'h-px',
      },
      {
        orientation: 'horizontal',
        size: 'md',
        class: 'h-0.5',
      },
      {
        orientation: 'horizontal',
        size: 'lg',
        class: 'h-1',
      },
      {
        orientation: 'vertical',
        size: 'sm',
        class: 'w-px',
      },
      {
        orientation: 'vertical',
        size: 'md',
        class: 'w-0.5',
      },
      {
        orientation: 'vertical',
        size: 'lg',
        class: 'w-1',
      },
    ],
    defaultVariants: {
      orientation: 'horizontal',
      size: 'md',
    },
  }
);

/**
 * Props for the Divider component.
 * @typedef {Object} DividerProps
 * @property {string} [color] - Custom color for the divider.
 * @property {string} [label] - Optional label to display on the divider.
 * @property {'start' | 'center' | 'end'} [labelPosition='center'] - Position of the label along the divider.
 * @property {'horizontal' | 'vertical'} [orientation='horizontal'] - The orientation of the divider.
 * @property {'sm' | 'md' | 'lg'} [size='md'] - The size of the divider.
 */
export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  color?: string;
  label?: string;
  labelPosition?: 'start' | 'center' | 'end';
}

/**
 * A flexible Divider component that supports different orientations, sizes, and optional labels.
 *
 * @component
 * @param {DividerProps} props - Props for the Divider component.
 * @returns {JSX.Element} The rendered Divider component.
 */
const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = 'horizontal', size, color, label, labelPosition = 'center', ...props }, ref) => {
    
    const isHorizontal = orientation !== 'vertical';

    const labelPositionClass = isHorizontal
      ? {
          start: 'justify-start',
          center: 'justify-center',
          end: 'justify-end',
        }[labelPosition]
      : {
          start: 'items-start',
          center: 'items-center',
          end: 'items-end',
        }[labelPosition];

    return (
      <div
        ref={ref}
        className={cn(
          dividerVariants({ orientation, size }),
          color,
          label && isHorizontal && 'flex items-center',
          label && !isHorizontal && 'flex flex-col',
          labelPositionClass,
          className
        )}
        role="separator"
        aria-orientation={ orientation || undefined }
        {...props}
      >
        {label && (
          <span className={cn(
            "px-2 rounded-lg text-sm text-gray-700 dark:text-gray-100",
            isHorizontal ? "bg-white" : "writing-mode-vertical-rl"
          )}>
            {label}
          </span>
        )}
      </div>
    );
  }
);

Divider.displayName = 'Divider';
export default Divider;
