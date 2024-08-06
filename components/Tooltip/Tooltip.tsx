import React, { useState } from 'react';

/**
 * Props for the Tooltip component.
 * 
 * @typedef {Object} TooltipProps
 * @property {React.ReactNode} children - The content around which the tooltip will appear.
 * @property {string} text - The text to be displayed inside the tooltip.
 * @property {string} [className] - Additional class names for custom styling.
 * @property {'default' | 'arrow'} [variant='default'] - The variant style of the tooltip.
 */
export interface TooltipProps {
  children: React.ReactNode;
  text: string;
  className?: string;
  variant?: 'default' | 'arrow';
}

/**
 * Tooltip component for displaying a tooltip with text when hovering or focusing on an element.
 * 
 * @component
 * @param {TooltipProps} props - Props for the Tooltip component.
 * @returns {JSX.Element} The rendered Tooltip component.
 */
const Tooltip: React.FC<TooltipProps> = ({
  children,
  text,
  className,
  variant = 'default',
  ...props
}) => {
  const [visible, setVisible] = useState(false);

  const baseTooltipClasses = `
    absolute left-1/2 -translate-x-1/2 z-10 px-3 py-2 text-sm font-medium 
    text-white bg-gray-800 rounded-lg shadow-sm whitespace-nowrap
    transition-opacity duration-300
  `;

  const variantClasses = {
    default: 'bottom-full mb-2',
    arrow: `
      top-full mt-2
      before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2
      before:bottom-full before:border-8 before:border-x-transparent
      before:border-t-transparent before:border-b-gray-700
    `
  };

  const tooltipClasses = `
    ${baseTooltipClasses}
    ${variantClasses[variant]}
    ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
  `;

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      {...props}
    >
      {children}
      <div
        role="tooltip"
        className={tooltipClasses}
      >
        {text}
      </div>
    </div>
  );
};

Tooltip.displayName = "Tooltip";
export default Tooltip;
