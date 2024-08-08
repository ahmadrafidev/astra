import React from 'react';
import { cn } from "@/lib/utils";

/**
 * Represents a navigation item.
 * 
 * @typedef {Object} NavItem
 * @property {React.ElementType} icon - The icon for the navigation item.
 * @property {string} [label] - The label for the navigation item.
 */
export interface NavItem {
  icon: React.ElementType;
  label?: string;
}

/**
 * Props for the BottomNavItem component.
 * 
 * @typedef {Object} BottomNavItemProps
 * @property {React.ElementType} icon - The icon for the navigation item.
 * @property {string} [label] - The label for the navigation item.
 * @property {boolean} isActive - Whether the navigation item is active.
 * @property {() => void} onClick - The click event handler for the navigation item.
 * @property {string} [className] - Additional class names for custom styling.
 */
export interface BottomNavItemProps {
  icon: React.ElementType;
  label?: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

/**
 * Props for the BottomNavigation component.
 * 
 * @typedef {Object} BottomNavigationProps
 * @property {NavItem[]} items - Array of navigation items to display.
 * @property {string} activeItem - The label of the active navigation item.
 * @property {(label: string) => void} onItemClick - The click event handler for navigation items.
 */
export interface BottomNavigationProps {
  items: NavItem[];
  activeItem: string;
  onItemClick: (label: string) => void;
}

/**
 * BottomNavItem component for rendering an individual navigation item in the bottom navigation bar.
 * 
 * @component
 * @param {BottomNavItemProps} props - Props for the BottomNavItem component.
 * @returns {JSX.Element} The rendered BottomNavItem component.
 */
const BottomNavItem: React.FC<BottomNavItemProps> = ({ icon: Icon, label, isActive, onClick, className }) => (
  <button
    onClick={onClick}
    className={cn(
      "flex flex-col items-center justify-center flex-1 py-2 text-sm font-medium transition-colors",
      isActive ? "text-gray-900 dark:text-gray-50" : "text-muted-foreground text-gray-900 dark:text-gray-50 hover:text-dark-700",
      className
    )}
  >
    <Icon className={cn("mb-1 transition-transform duration-300", isActive ? "w-7 h-7" : "w-6 h-6")} />
    {label && <span className="text-gray-900 dark:text-gray-50 font-medium text-sm">{label}</span>}
  </button>
);

/**
 * BottomNavigation component for displaying a bottom navigation bar with multiple navigation items.
 * 
 * @component
 * @param {BottomNavigationProps} props - Props for the BottomNavigation component.
 * @returns {JSX.Element} The rendered BottomNavigation component.
 */
const BottomNavigation: React.FC<BottomNavigationProps> = ({ items, activeItem, onItemClick }) => {
  return (
    <nav className="bg-background border-2 border-solid rounded-md">
      <div className="flex justify-around items-center">
        {items.map((item) => (
          <BottomNavItem
            key={item.label} 
            icon={item.icon}
            label={item.label}
            isActive={activeItem === item.label}
            onClick={() => item.label && onItemClick(item.label)} 
          />
        ))}
      </div>
    </nav>
  );
};

BottomNavigation.displayName = "BottomNavigation";
export default BottomNavigation;
