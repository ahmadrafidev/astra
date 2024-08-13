import React from 'react';
import Link from 'next/link';
import Tooltip from '../Tooltip/Tooltip';

export interface DockItemProps {
  href?: string;
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
  hoverEffect?: 'default' | 'floating';
}

export interface DockProps {
  className?: string;
  items: DockItemProps[];
  iconSize?: number;
  dockWidth?: string | number;
  dockHeight?: string | number;
  variant?: 'default' | 'glassmorphism';
}

const DockItem: React.FC<DockItemProps & { iconSize: number }> = ({
  href,
  icon: Icon,
  label,
  onClick,
  iconSize,
  hoverEffect = 'floating',
}) => {
  const hoverClass = hoverEffect === 'floating' ? 'hover:scale-110' : '';
  const content = (
    <span className={`p-2 rounded-full transition-all duration-200 ease-in-out ${hoverClass}`}>
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
      <Link href={href} aria-label={label} className="outline-none focus:outline-none">
        {wrappedContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} aria-label={label} className="outline-none focus:outline-none">
      {wrappedContent}
    </button>
  );
};

const Dock: React.FC<DockProps> = ({
  className = '', 
  items, 
  iconSize = 24, 
  dockWidth = 'auto',
  dockHeight = 'auto',
  variant = 'default', 
}) => {
  const glassClasses = variant === 'glassmorphism'
    ? 'bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg bg-gradient-to-br from-white/30 to-white/10'
    : 'bg-white border border-gray-300';

  return (
    <nav
      className={`flex items-center justify-around rounded-lg ${glassClasses} ${className}`}
      style={{ width: dockWidth, height: dockHeight }}
      role="navigation"
      aria-label="Main"
    >
      {items.map((item, index) => (
        <DockItem key={index} {...item} iconSize={iconSize} />
      ))}
    </nav>
  );
};

Dock.displayName = 'Dock';
export default Dock;
