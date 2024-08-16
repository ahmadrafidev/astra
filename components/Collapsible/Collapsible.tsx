import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

/**
 * Props for the Collapsible component.
 * 
 * @typedef {Object} CollapsibleProps
 * @property {React.ReactNode} title - The title displayed on the collapsible header.
 * @property {React.ReactNode} children - The content to display when the collapsible is open.
 * @property {string} [className] - Additional class names for the collapsible container.
 * @property {boolean} [defaultOpen=false] - Whether the collapsible is open by default.
 * @property {boolean} [disabled=false] - Whether the collapsible is disabled.
 * @property {(open: boolean) => void} [onOpenChange] - Callback when the open state changes.
 * @property {React.ReactNode} [icon] - Custom icon to display next to the title.
 * @property {string} [contentClassName] - Additional class names for the collapsible content.
 */
export interface CollapsibleProps {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
  disabled?: boolean;
  onOpenChange?: (open: boolean) => void;
  icon?: React.ReactNode;
  contentClassName?: string;
}

/**
 * Collapsible component for displaying a section that can be toggled open or closed.
 * 
 * @component
 * @param {CollapsibleProps} props - Props for the Collapsible component.
 * @returns {JSX.Element} The rendered Collapsible component.
 */
const Collapsible: React.FC<CollapsibleProps> = ({
  title,
  children,
  className,
  defaultOpen = false,
  disabled = false,
  onOpenChange,
  icon,
  contentClassName = '',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleCollapse = () => {
    if (!disabled) {
      const newState = !isOpen;
      setIsOpen(newState);
      onOpenChange?.(newState);
    }
  };

  return (
    <div className={`${className}`}>
      <button
        className={`w-full text-left py-2 px-4 flex items-center justify-between ${
          isOpen ? 'rounded-t-lg' : 'rounded-lg'
        } ${disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-white hover:bg-gray-50'} 
          focus:outline-none transition-colors duration-200`}
        onClick={toggleCollapse}
        aria-expanded={isOpen}
        aria-disabled={disabled}
        aria-controls="collapsible-content"
        disabled={disabled}
      >
        <span className="font-medium">{title}</span>
        {icon || (isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />)}
      </button>
      <div
        id="collapsible-content"
        className={`overflow-hidden transition-all duration-300 rounded-b-lg ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`p-4 bg-white ${contentClassName}`}>{children}</div>
      </div>
    </div>
  );
};

Collapsible.displayName = "Collapsible";

export default Collapsible;
