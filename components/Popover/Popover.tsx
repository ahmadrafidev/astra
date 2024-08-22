import React, { useState, useRef, useEffect, ReactNode, useCallback } from 'react';

/**
 * Props for the Popover component.
 * @typedef {Object} PopoverProps
 * @property {React.ReactNode} children - The element that triggers the popover.
 * @property {React.ReactNode} content - The content to display inside the popover.
 * @property {'top' | 'bottom' | 'left' | 'right'} [placement='bottom'] - The placement of the popover relative to the trigger.
 * @property {'click' | 'hover' | 'focus'} [trigger='click'] - The event that triggers the visibility of the popover.
 * @property {string} [className] - Additional class names to apply to the popover container.
 * @property {number} [offset=8] - The distance between the trigger and the popover in pixels.
 * @property {boolean} [closeOnClickOutside=true] - Whether to close the popover when clicking outside.
 * @property {boolean} [closeOnEsc=true] - Whether to close the popover when pressing the Escape key.
 * @property {string} [ariaLabel='Popover'] - Accessible label for the popover.
 * @property {boolean} [showArrow=true] - Whether to show an arrow pointing to the trigger.
 */
interface PopoverProps {
  children: ReactNode;
  content: ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  trigger?: 'click' | 'hover' | 'focus';
  className?: string;
  offset?: number;
  closeOnClickOutside?: boolean;
  closeOnEsc?: boolean;
  ariaLabel?: string;
}

/**
 * A customizable and accessible Popover component that displays content relative to a trigger element.
 *
 * @component
 * @param {PopoverProps} props - The props for the Popover component.
 * @returns {JSX.Element} The rendered Popover component.
 * @example
 * <Popover
 *   content={<div>Popover content</div>}
 *   placement="bottom"
 *   trigger="click"
 *   ariaLabel="Example popover"
 * >
 *   <button>Open Popover</button>
 * </Popover>
 */
const Popover: React.FC<PopoverProps> = ({
  children,
  content,
  placement = 'bottom',
  trigger = 'click',
  className = '',
  offset = 8,
  closeOnClickOutside = true,
  closeOnEsc = true,
  ariaLabel = 'Popover',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  /**
   * Handles clicks outside the popover to close it if enabled.
   */
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      closeOnClickOutside &&
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node) &&
      triggerRef.current &&
      !triggerRef.current.contains(event.target as Node)
    ) {
      setIsVisible(false);
    }
  }, [closeOnClickOutside]);

  /**
   * Handles the Escape key press to close the popover if enabled.
   */
  const handleEscKey = useCallback((event: KeyboardEvent) => {
    if (closeOnEsc && event.key === 'Escape') {
      setIsVisible(false);
    }
  }, [closeOnEsc]);

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKey);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isVisible, handleClickOutside, handleEscKey]);

  /**
   * Toggles the visibility of the popover.
   */
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  /**
   * Handles mouse enter event for hover trigger.
   */
  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      setIsVisible(true);
    }
  };

  /**
   * Handles mouse leave event for hover trigger.
   */
  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setIsVisible(false);
    }
  };

  /**
   * Handles focus event for focus trigger.
   */
  const handleFocus = () => {
    if (trigger === 'focus') {
      setIsVisible(true);
    }
  };

  /**
   * Handles blur event for focus trigger.
   */
  const handleBlur = () => {
    if (trigger === 'focus') {
      setIsVisible(false);
    }
  };

  /**
   * Gets the CSS classes for the popover based on its placement and custom class.
   * @returns {string} The CSS classes for the popover.
   */
  const getPopoverClasses = () => {
    const baseClasses = 'absolute z-10 p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg rounded-lg';
    const placementClasses = {
        top: `bottom-full mb-${offset / 4} left-1/2 transform -translate-x-1/2`,
        bottom: `top-full mt-${offset / 4} left-1/2 transform -translate-x-1/2`,
        left: `right-full mr-${offset / 4} top-1/2 transform -translate-y-1/2`,
        right: `left-full ml-${offset / 4} top-1/2 transform -translate-y-1/2`,
    };
    return `${baseClasses} ${placementClasses[placement]} ${className}`;
  };

  return (
    <div
      className="relative inline-block"
      ref={triggerRef}
      onClick={trigger === 'click' ? toggleVisibility : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {children}
      {isVisible && (
        <div
          ref={popoverRef}
          className={getPopoverClasses()}
          role="tooltip"
          aria-label={ariaLabel}
        >
          {content}
        </div>
      )}
    </div>
  );
};

Popover.displayName="Popover"
export default Popover;
