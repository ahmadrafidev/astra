import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

/**
 * Represents a single breadcrumb item.
 * 
 * @typedef {Object} BreadcrumbItem
 * @property {string} name - The display name of the breadcrumb.
 * @property {string} path - The URL path of the breadcrumb.
 */
export interface BreadcrumbItem {
  name: string;
  path: string;
}

/**
 * Props for the Breadcrumbs component.
 * 
 * @typedef {Object} BreadcrumbsProps
 * @property {BreadcrumbItem[]} items - Array of breadcrumb items to display.
 * @property {string} [className] - Additional class names for custom styling of the breadcrumb container.
 * @property {React.ReactNode} [separator] - Custom separator element between breadcrumb items.
 * @property {number} [maxItems=0] - Maximum number of breadcrumb items to display.
 * @property {string} [itemClassName='hover:underline text-blue-600 dark:text-blue-400'] - Class names for the breadcrumb items.
 * @property {string} [activeItemClassName='font-semibold text-gray-900 dark:text-gray-100'] - Class names for the active breadcrumb item.
 */
export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  separator?: React.ReactNode;
  maxItems?: number;
  itemClassName?: string;
  activeItemClassName?: string;
}

/**
 * Breadcrumbs component for displaying navigation breadcrumbs.
 * 
 * @component
 * @param {BreadcrumbsProps} props - Props for the Breadcrumbs component.
 * @returns {JSX.Element} The rendered Breadcrumbs component.
 */
const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  className,
  separator = <ChevronRight className="h-4 w-4 mx-2 text-gray-800 dark:text-gray-200" />,
  maxItems = 0,
  itemClassName = 'hover:underline text-blue-600 dark:text-blue-400',
  activeItemClassName = 'font-semibold text-gray-900 dark:text-gray-100'
}) => {
  const displayItems = maxItems > 0 ? items.slice(-maxItems) : items;

  return (
    <nav
      className={`flex flex-wrap items-center text-sm ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-1 md:space-x-2">
        {displayItems.map((item, index) => (
          <li key={item.path} className="flex items-center">
            {index > 0 && <span className="flex-shrink-0">{separator}</span>}
            <span className="flex items-center">
              {index === displayItems.length - 1 ? (
                <span
                  className={`${itemClassName} ${activeItemClassName}`}
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className={itemClassName}
                >
                  {item.name}
                </Link>
              )}
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumbs.displayName = "Breadcrumbs";
export default Breadcrumbs;
