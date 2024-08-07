import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const progressBarVariants = cva(
  "w-full rounded overflow-hidden",
  {
    variants: {
      size: {
        sm: "h-2",
        md: "h-4",
        lg: "h-6",
      },
      variant: {
        default: "bg-gray-200",
        custom: "",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

const progressVariants = cva(
  "h-full text-xs leading-none flex items-center justify-center text-white transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default: "bg-blue-500",
        success: "bg-green-500",
        warning: "bg-yellow-500",
        danger: "bg-red-500",
        custom: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ProgressBarProps {
  progress: number;
  className?: string;
  progressClassName?: string;
  showLabel?: boolean;
  labelPosition?: 'inside' | 'outside';
  customLabel?: React.ReactNode;
  animate?: boolean;
  size?: 'sm' | 'md' | 'lg';
  progressBarVariant?: 'default' | 'custom';
  progressVariant?: 'default' | 'custom' | 'success' | 'warning' | 'danger';
  hasStripe?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  size = 'md',
  progressBarVariant = 'default',
  progressVariant = 'default',
  className,
  progressClassName,
  showLabel = true,
  labelPosition = 'inside',
  customLabel,
  animate = true,
  hasStripe = false,
  ...props
}) => {

  const sanitizedProgress = Math.min(Math.max(progress, 0), 100);
  const progressText = `${Math.round(sanitizedProgress)}%`;

  const renderLabel = () => customLabel || progressText;

  const stripeStyles = hasStripe
    ? {
        backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
        backgroundSize: '1rem 1rem',
      }
    : {};

  return (
    <div className="relative">
      <div
        className={cn(progressBarVariants({ size, variant: progressBarVariant }), className)}
        role="progressbar"
        aria-valuenow={sanitizedProgress}
        aria-valuemin={0}
        aria-valuemax={100}
        {...props}
      >
        <div
          className={cn(
            progressVariants({ variant: progressVariant }),
            animate && 'transition-all duration-300 ease-in-out',
            progressClassName
          )}
          style={{ width: `${sanitizedProgress}%`, ...stripeStyles  }}
        >
          {showLabel && labelPosition === 'inside' && (
            <span className="px-2">{renderLabel()}</span>
          )}
        </div>
      </div>
      {showLabel && labelPosition === 'outside' && (
        <div className="mt-1 text-base font-sans font-medium text-gray-600 dark:text-gray-50">{renderLabel()}</div>
      )}
    </div>
  );
};

ProgressBar.displayName = "ProgressBar";
export default ProgressBar;
