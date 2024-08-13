'use client'

import React, { ReactNode } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

/**
 * Props for the AccordionItem component.
 * 
 * @typedef {Object} AccordionItemProps
 * @property {string} title - The title of the accordion item.
 * @property {string} [subtitle] - The subtitle of the accordion item.
 * @property {ReactNode} children - The content to display when the accordion item is open.
 * @property {boolean} [isOpen=false] - Whether the accordion item is open.
 * @property {() => void} [onToggle] - Function to call when the accordion item is toggled.
 * @property {string} [border] - Custom border styles for the accordion item.
 * @property {string} [shadow] - Custom shadow styles for the accordion item.
 * @property {string} [className] - Additional class names for the accordion item container.
 * @property {'default' | 'split'} [variant='default'] - The variant style of the accordion item.
 */
export interface AccordionItemProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  border?: string;
  shadow?: string;
  className?: string;
  variant?: 'default' | 'split';
}

/**
 * AccordionItem component for rendering an individual item within an accordion.
 * 
 * @component
 * @param {AccordionItemProps} props - Props for the AccordionItem component.
 * @returns {JSX.Element} The rendered AccordionItem component.
 */
export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  subtitle,
  children,
  isOpen = false,
  onToggle = () => {},
  border,
  shadow,
  className = '',
  variant = 'default',
}) => {

  const itemClasses = [
    className,
    variant === 'split' ? 'mb-2 rounded-lg overflow-hidden' : border || 'border-b border-gray-200 dark:border-gray-700',
    shadow || ''
  ].join(' ');

  return (
      <div className={itemClasses}>
          <button
              className="w-full text-left py-3 md:py-4 px-3 md:px-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none flex justify-between items-center transition-colors duration-200"
              onClick={onToggle}
          >
              <div className="flex flex-col justify-start">
                  <h3 className="text-base md:text-lg font-medium text-gray-900 dark:text-gray-100">{title}</h3>
                  {subtitle && <h4 className="text-sm font-normal text-gray-700 dark:text-gray-300">{subtitle}</h4>}
              </div>
              {isOpen ? (
                  <ChevronUpIcon className="h-4 w-4 md:h-5 md:w-5 text-gray-900 dark:text-gray-100" />
              ) : (
                  <ChevronDownIcon className="h-4 w-4 md:h-5 md:w-5 text-gray-900 dark:text-gray-100" />
              )}
          </button>
          {isOpen && (
              <div className="p-3 md:p-4 bg-white dark:bg-gray-900">
                  <p className="text-sm md:text-base font-normal leading-loose text-gray-900 dark:text-gray-100">
                    {children}
                  </p>
              </div>
          )}
      </div>
  );
};

AccordionItem.displayName = "AccordionItem";
