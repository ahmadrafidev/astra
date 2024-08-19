import React from 'react';
import { cn } from 'lib/utils';

/**
 * Props for the Switch component.
 * 
 * @typedef {Object} SwitchProps
 * @property {string} [className] - Additional class names for custom styling.
 * @property {string} [ariaLabel] - Accessible label for the switch.
 * @property {boolean} checked - The current checked state of the switch.
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange - Function to call when the switch state changes.
 * @property {boolean} [disabled=false] - Whether the switch is disabled.
 * @property {'small' | 'medium' | 'large'} [size='medium'] - The size of the switch.
 */
export interface SwitchProps {
  className?: string;
  ariaLabel?: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
}

/**
 * Switch component for toggling between on and off states.
 * 
 * @component
 * @param {SwitchProps} props - Props for the Switch component.
 * @returns {JSX.Element} The rendered Switch component.
 */
const Switch: React.FC<SwitchProps> = ({ 
  checked, 
  onChange, 
  className, 
  ariaLabel, 
  disabled = false, 
  size = 'medium' 
}) => {

    const sizeClasses = {
      small: 'w-10 h-5',
      medium: 'w-12 h-6',
      large: 'w-14 h-7',
    };

    const knobSizeClasses = {
      small: 'w-3 h-3',
      medium: 'w-4 h-4',
      large: 'w-5 h-5',
    };

    const translateClasses = {
      small: 'translate-x-1',
      medium: 'translate-x-1',
      large: 'translate-x-1',
    };

    const checkedTranslateClasses = {
      small: 'translate-x-6',
      medium: 'translate-x-7',
      large: 'translate-x-8',
    };

    return (
      <label className={cn("relative inline-flex items-center cursor-pointer", className, { 'cursor-not-allowed opacity-50': disabled })}>
        <input 
          type="checkbox" 
          checked={checked} 
          onChange={onChange} 
          className="sr-only" 
          role="switch" 
          aria-checked={checked} 
          aria-label={ariaLabel} 
          disabled={disabled}
        />
        <span 
          className={cn(
            "rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500",
            sizeClasses[size], 
            { 'bg-gray-300 dark:bg-zinc-700': !checked, 'bg-blue-800 dark:bg-blue-700': checked }
          )}
        ></span>
        <span 
          className={cn(
            "absolute bg-white rounded-full transition-transform",
            knobSizeClasses[size],
            { [checked ? checkedTranslateClasses[size] : translateClasses[size]]: true, 'peer-focus:ring-2 peer-focus:ring-blue-500': !disabled }
          )}
        ></span>
      </label>
    );
};

Switch.displayName = "Switch";
export default Switch;
