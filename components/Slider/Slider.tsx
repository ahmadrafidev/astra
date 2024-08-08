import React from 'react';

/**
 * Props for the Slider component.
 * 
 * @typedef {Object} SliderProps
 * @property {number} value - The current value of the slider.
 * @property {number} min - The minimum value of the slider.
 * @property {number} max - The maximum value of the slider.
 * @property {number} [step=1] - The step value for the slider.
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange - Callback when the slider value changes.
 * @property {string} [className] - Additional class names for custom styling.
 * @property {string} [id] - The id for the slider input.
 * @property {string} ['aria-label'] - The aria-label for accessibility.
 * @property {string} ['aria-labelledby'] - The aria-labelledby for accessibility.
 */
export interface SliderProps {
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  id?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

/**
 * Slider component for selecting a value from a range.
 * 
 * @component
 * @param {SliderProps} props - Props for the Slider component.
 * @returns {JSX.Element} The rendered Slider component.
 */
const Slider: React.FC<SliderProps> = ({
  value,
  min,
  max,
  step = 1,
  onChange,
  className = '',
  id,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  ...props
}) => {
  return (
    <input
      type="range"
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={onChange}
      className={`slider ${className}`}
      id={id}
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      role="slider"
      {...props}
    />
  );
};

Slider.displayName = "Slider";
export default Slider;
