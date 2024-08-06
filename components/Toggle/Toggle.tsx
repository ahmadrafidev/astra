import React, { ReactNode, useState, forwardRef, useImperativeHandle, useRef } from 'react';

/**
 * Props for the Toggle component.
 * 
 * @typedef {Object} ToggleProps
 * @property {ReactNode} [children] - The content to be displayed inside the toggle button.
 * @property {ReactNode} [onIcon] - The icon to be displayed when the toggle is on.
 * @property {ReactNode} [offIcon] - The icon to be displayed when the toggle is off.
 * @property {string} [className] - Additional class names for custom styling of the button.
 * @property {string} [onClassName] - Class names for the button when it is on.
 * @property {string} [offClassName] - Class names for the button when it is off.
 * @property {string} [iconClassName] - Class names for the icon.
 * @property {string} [ariaLabel] - Accessible label for the toggle button.
 * @property {boolean} [defaultOn=false] - The default state of the toggle button.
 * @property {boolean} [hideOffIcon=false] - Whether to hide the off icon when the toggle is off.
 * @property {(state: boolean) => void} [onChange] - Function to call when the toggle state changes.
 */
export interface ToggleProps {
  children?: ReactNode; 
  onIcon?: ReactNode;
  offIcon?: ReactNode;
  className?: string;
  onClassName?: string;
  offClassName?: string;
  iconClassName?: string;
  ariaLabel?: string;
  defaultOn?: boolean;
  hideOffIcon?: boolean;
  onChange?: (state: boolean) => void;
}

interface ToggleButtonHandle extends HTMLButtonElement {
  toggle: () => void;
}

/**
 * Toggle component for displaying a button that toggles between on and off states.
 * 
 * @component
 * @param {ToggleProps} props - Props for the Toggle component.
 * @param {React.Ref<ToggleButtonHandle>} ref - Ref for the button element.
 * @returns {JSX.Element} The rendered Toggle component.
 */
const Toggle = forwardRef<ToggleButtonHandle, ToggleProps>(
  (
    {
      children,
      className,
      ariaLabel,
      onIcon,
      offIcon,
      onChange,
      defaultOn = false,
      onClassName,
      offClassName,
      iconClassName,
      hideOffIcon = false
    }, ref) => {

    const [on, setOn] = useState(defaultOn);
    const internalRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(ref, () => ({
      ...internalRef.current!,
      toggle: () => setOn(prevOn => !prevOn),
    }));

    const handleClick = () => {
      const newOn = !on;
      setOn(newOn);
      onChange?.(newOn);
    };

    return (
      <button 
        ref={internalRef}
        onClick={handleClick} 
        className={`${on ? onClassName : offClassName} ${className}`}
        aria-pressed={on}
        aria-label={ariaLabel}
      >
        <span className={iconClassName}>
            {on ? onIcon : (hideOffIcon ? null : offIcon)}
        </span>
        {children}
      </button>
    );
  }
);

Toggle.displayName = "Toggle";
export default Toggle;
