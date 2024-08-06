import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  separator?: React.ReactNode;
  maxItems?: number;
  itemClassName?: string;
  activeItemClassName?: string;
}

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
