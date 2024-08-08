import React from 'react';

/**
 * Props for the Stepper component.
 * 
 * @typedef {Object} StepperProps
 * @property {Array<{label: string, description?: string}>} steps - The steps to display in the stepper.
 * @property {number} currentStep - The current active step.
 * @property {(stepIndex: number) => void} [onStepClick] - Callback when a step is clicked.
 * @property {string} [className] - Additional class names for custom styling.
 * @property {string} [activeColor] - Color for the active step.
 * @property {string} [inactiveColor] - Color for the inactive steps.
 * @property {'horizontal' | 'vertical'} [orientation='horizontal'] - Orientation of the stepper.
 */
export interface StepperProps {
  steps: Array<{
    label: string;
    description?: string;
  }>;
  currentStep: number;
  onStepClick?: (stepIndex: number) => void;
  className?: string;
  activeColor?: string;
  inactiveColor?: string;
  orientation?: 'horizontal' | 'vertical';
}

/**
 * Stepper component for displaying progress through a series of steps.
 * 
 * @component
 * @param {StepperProps} props - Props for the Stepper component.
 * @returns {JSX.Element} The rendered Stepper component.
 */
const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  onStepClick,
  className = '',
  activeColor,
  inactiveColor,
  orientation = 'horizontal',
}) => {
  const isVertical = orientation === 'vertical';

  return (
    <nav
      className={`${className} ${isVertical ? 'flex-col' : 'flex-row'} flex`}
      aria-label="Progress"
    >
      {steps.map((step, index) => {
        const isActive = index <= currentStep;
        const isCurrent = index === currentStep;

        return (
          <div
            key={index}
            className={`${isVertical ? 'mb-4' : 'mr-4'} flex ${isVertical ? 'flex-col' : 'items-center'}`}
          >
            <div className="flex items-center">
              <button
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  isActive ? activeColor : inactiveColor
                } ${isActive ? 'text-white' : 'text-gray-500'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                onClick={() => onStepClick && onStepClick(index)}
                aria-current={isCurrent ? 'step' : undefined}
                aria-label={`Step ${index + 1}: ${step.label}`}
                disabled={!onStepClick}
              >
                {index + 1}
              </button>
              <div className={`${isVertical ? 'ml-3' : 'ml-2'}`}>
                <div className="text-sm font-medium text-gray-900 dark:text-gray-50">{step.label}</div>
                {step.description && (
                  <div className="text-sm text-gray-600 dark:text-gray-300">{step.description}</div>
                )}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`${isVertical ? 'w-0.5 h-full ml-5 mt-2' : 'w-full h-0.5 mt-5'} ${inactiveColor}`}
                aria-hidden="true"
              />
            )}
          </div>
        );
      })}
    </nav>
  );
};

Stepper.displayName = "Stepper";
export default Stepper;
