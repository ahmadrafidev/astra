import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the ProgressTracker component.
 * 
 * @typedef {Object} ProgressTrackerProps
 * @property {string[]} steps - Array of step labels.
 * @property {number} currentStep - The current active step index (0-based).
 * @property {string} [className] - Additional class names for custom styling.
 * @property {string} [activeClassName] - Class names for active steps.
 * @property {string} [inactiveClassName] - Class names for inactive steps.
 * @property {string} [stepNumberClassName] - Class names for step numbers.
 * @property {string} [stepLabelClassName] - Class names for step labels.
 * @property {string} [separatorClassName] - Class names for step separators.
 */
export interface ProgressTrackerProps {
  steps: string[];
  currentStep: number;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  stepNumberClassName?: string;
  stepLabelClassName?: string;
  separatorClassName?: string;
}

/**
 * ProgressTracker component for displaying a series of steps with active and inactive states.
 * 
 * @component
 * @param {ProgressTrackerProps} props - Props for the ProgressTracker component.
 * @returns {JSX.Element} The rendered ProgressTracker component.
 */
const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  steps,
  currentStep,
  className,
  activeClassName,
  inactiveClassName,
  stepNumberClassName,
  stepLabelClassName,
  separatorClassName,
}) => {

  return (
    <div
      className={cn(
        'flex items-center',
        className
      )}
      role="progressbar"
      aria-valuenow={currentStep + 1}
      aria-valuemin={1}
      aria-valuemax={steps.length}
    >
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={cn(
              stepNumberClassName,
              index <= currentStep ? activeClassName : inactiveClassName
            )}
            aria-label={`Step ${index + 1}: ${step}`}
          >
            {index + 1}
          </div>
          <div className={stepLabelClassName}>{step}</div>
          {index < steps.length - 1 && (
            <div className={separatorClassName} />
          )}
        </div>
      ))}
    </div>
  );
};

ProgressTracker.displayName = 'ProgressTracker';
export default ProgressTracker;
