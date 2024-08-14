import React from 'react';
import Link from 'next/link';

import Tooltip from '../Tooltip/Tooltip';

/**
 * Props for each item in the Dock component.
 * 
 * @typedef {Object} DockItemProps
 * @property {string} [href] - The URL to navigate to when the dock item is clicked.
 * @property {React.ElementType} icon - The icon to be displayed in the dock item.
 * @property {string} label - The label text to be shown in the tooltip.
 * @property {() => void} [onClick] - The function to call when the dock item is clicked.
 * @property {'default' | 'floating'} [hoverEffect='floating'] - The hover effect to apply to the dock item.
 */
export interface DockItemProps {
  href?: string;
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
  hoverEffect?: 'default' | 'floating';
}

/**
 * Props for the Dock component.
 * 
 * @typedef {Object} DockProps
 * @property {string} [className] - Additional class names for the dock container.
 * @property {DockItemProps[]} items - The list of items to display in the dock.
 * @property {number} [iconSize=24] - The size of the icons in the dock items.
 * @property {string | number} [dockWidth='auto'] - The width of the dock container.
 * @property {string | number} [dockHeight='auto'] - The height of the dock container.
 * @property {'default' | 'glassmorphism'} [variant='default'] - The visual variant of the dock.
 * @property {'default' | 'floating'} [hoverEffect='floating'] - The hover effect to apply to all dock items.
 */
export interface DockProps {
  className?: string;
  items: DockItemProps[];
  iconSize?: number;
  dockWidth?: string | number;
  dockHeight?: string | number;
  variant?: 'default' | 'glassmorphism';
  hoverEffect?: 'default' | 'floating';
}

/**
 * DockItem component represents an individual item within the Dock.
 * 
 * @component
 * @param {DockItemProps & { iconSize: number }} props - Props for the DockItem component.
 * @returns {JSX.Element} The rendered DockItem component.
 */
const DockItem: React.FC<DockItemProps & { iconSize: number }> = ({
  href,
  icon: Icon,
  label,
  onClick,
  iconSize,
  hoverEffect = 'floating',
}) => {
  const hoverClass = hoverEffect === 'floating' ? 'transition-transform hover:scale-110' : '';
  const content = (
    <span className={`p-2 rounded-full ${hoverClass}`}>
      <Icon size={iconSize} className="outline-none focus:outline-none" />
    </span>
  );

  const wrappedContent = (
    <Tooltip text={label} variant="arrow-top">
      {content}
    </Tooltip>
  );

  if (href) {
    return (
      <Link href={href} aria-label={label} className={`outline-none focus:outline-none ${hoverClass}`}>
        {wrappedContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} aria-label={label} className={`outline-none focus:outline-none ${hoverClass}`}>
      {wrappedContent}
    </button>
  );
};

/**
 * Dock component for displaying a navigation bar with items that can be clicked or navigated to.
 * 
 * @component
 * @param {DockProps} props - Props for the Dock component.
 * @returns {JSX.Element} The rendered Dock component.
 */
const Dock: React.FC<DockProps> = ({
  className = '', 
  items, 
  iconSize = 24, 
  dockWidth = 'auto',
  dockHeight = 'auto',
  variant = 'default', 
  hoverEffect = 'default',
}) => {
  const glassClasses = variant === 'glassmorphism'
    ? 'bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg bg-gradient-to-br from-white/30 to-white/10 rounded-lg'
    : 'bg-white border border-gray-300 shadow rounded-lg';

  return (
    <nav
      className={`flex items-center justify-around ${glassClasses} ${className}`}
      style={{ width: dockWidth, height: dockHeight }}
      role="navigation"
      aria-label="Dock Component"
    >
      {items.map((item, index) => (
        <DockItem key={index} {...item} iconSize={iconSize} hoverEffect={hoverEffect} />
      ))}
    </nav>
  );
};

Dock.displayName = 'Dock';
export default Dock;
