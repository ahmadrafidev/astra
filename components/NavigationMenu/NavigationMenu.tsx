'use client';

import React from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

/**
 * Represents a navigation link item.
 * 
 * @typedef {Object} NavLink
 * @property {string} label - The text to display for the link.
 * @property {string} href - The URL that the link navigates to.
 * @property {string} [ariaLabel] - Optional aria-label for accessibility.
 */
export interface NavLink {
  label: string;
  href: string;
  ariaLabel?: string;
}

/**
 * Props for the NavigationMenu component.
 * 
 * @typedef {Object} NavigationMenuProps
 * @property {NavLink[]} links - An array of navigation links to display.
 * @property {() => void} [toggleSidebar] - Optional function to toggle the sidebar.
 * @property {boolean} [isSidebarOpen] - Indicates whether the sidebar is currently open.
 * @property {React.ReactNode} [hero] - Optional hero content, like a logo or title.
 * @property {string} [className] - Additional class names for the navigation menu.
 * @property {React.ReactNode} [rightContent] - Optional content to display on the right side of the menu.
 * @property {string} [mobileBreakpoint='md'] - The breakpoint at which the mobile menu is activated.
 * @property {boolean} [debug=false] - If true, logs the component's props for debugging purposes.
 */
export interface NavigationMenuProps {
  links: NavLink[];
  toggleSidebar?: () => void;
  isSidebarOpen?: boolean;
  hero?: React.ReactNode;
  className?: string;
  rightContent?: React.ReactNode;
  mobileBreakpoint?: string;
  debug?: boolean;
}

/**
 * A responsive navigation menu component that supports sidebar toggling, custom hero content, and additional right-aligned content.
 * 
 * @param {NavigationMenuProps} props - The props for the NavigationMenu component.
 * @returns {JSX.Element} The rendered NavigationMenu component.
 */
const NavigationMenu: React.FC<NavigationMenuProps> = ({
  links,
  toggleSidebar,
  isSidebarOpen,
  hero,
  className = '',
  rightContent,
  mobileBreakpoint = 'md',
  debug = false,
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const baseStyles = 'flex flex-wrap items-center justify-between p-4 bg-gray-50 dark:bg-gray-900';
  const combinedClassName = `${baseStyles} ${className}`.trim();

  if (debug) {
    console.log('NavigationMenu props:', { links, toggleSidebar, isSidebarOpen, hero, className, rightContent, mobileBreakpoint });
  }

  return (
    <nav className={combinedClassName} role="navigation">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          {toggleSidebar && (
            <button
              onClick={toggleSidebar}
              aria-label={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
              className={`${mobileBreakpoint}:hidden p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            >
              {isSidebarOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-900 dark:text-white" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-900 dark:text-white" />
              )}
            </button>
          )}
          {hero && (
            <div className="ml-2">
              {hero}
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className="text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" aria-label={link.ariaLabel}>
                {link.label}
              </span>
            </Link>
          ))}
        </div>
        
        <div className="flex items-center">
          {rightContent}
        </div>
      </div>
    </nav>
  );
};

NavigationMenu.displayName = 'NavigationMenu';
export default NavigationMenu;
