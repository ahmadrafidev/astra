'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { cn } from "@/lib/utils"; 

/**
 * Props for the Tab component.
 * 
 * @typedef {Object} TabProps
 * @property {string} [label] - The label for the tab.
 * @property {string} [iconLight] - The light theme icon for the tab.
 * @property {string} [iconDark] - The dark theme icon for the tab.
 * @property {React.ReactNode} children - The content to display within the tab.
 * @property {string} [className] - Additional class names for custom styling.
 * @property {string} [labelClassName] - Additional class names for styling the label text.
 */
export interface TabProps {
  label?: string;
  iconLight?: string;
  iconDark?: string;
  children: React.ReactNode;
  className?: string;
  labelClassName?: string;
}

/**
 * Props for the Tabs component.
 * 
 * @typedef {Object} TabsProps
 * @property {string} [theme] - The current theme, either 'light' or 'dark'.
 * @property {React.ReactElement<TabProps>[]} children - The tab components to render within the tabs.
 * @property {string} [className] - Additional class names for custom styling.
 * @property {string} [tabClassName] - Additional class names for styling individual tabs.
 * @property {string} [activeTab] - The label of the currently active tab.
 * @property {(label: string) => void} [onTabChange] - Callback function called when the active tab changes.
 */
export interface TabsProps {
  theme?: string;
  children: React.ReactElement<TabProps>[];
  className?: string;
  tabClassName?: string;
  activeTab?: string;
  onTabChange?: (label: string) => void;
}

/**
 * Tab component for rendering individual tab content.
 * 
 * @component
 * @param {TabProps} props - Props for the Tab component.
 * @returns {JSX.Element} The rendered Tab component.
 */
const Tab: React.FC<TabProps> = ({ children, className, ...props }) => (
  <div role="tabpanel" className={cn(className)}>{children}</div>
);

/**
 * Tabs component for rendering a set of tabs with associated content.
 * 
 * @component
 * @param {TabsProps} props - Props for the Tabs component.
 * @returns {JSX.Element} The rendered Tabs component.
 */
const Tabs: React.FC<TabsProps> = ({ theme, children, className, tabClassName, activeTab: controlledActiveTab, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(controlledActiveTab ? children.findIndex(child => child.props.label === controlledActiveTab) : 0);

  useEffect(() => {
    if (controlledActiveTab) {
      setActiveTab(children.findIndex(child => child.props.label === controlledActiveTab));
    }
  }, [controlledActiveTab, children]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (onTabChange) {
      onTabChange(children[index].props.label || '');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'ArrowRight') {
      const newIndex = (index + 1) % children.length;
      handleTabClick(newIndex);
    } else if (event.key === 'ArrowLeft') {
      const newIndex = (index - 1 + children.length) % children.length;
      handleTabClick(newIndex);
    }
  };

  return (
    <div className={cn('flex flex-col items-center', className)} role="tablist">
      <div className="flex space-x-2 bg-zinc-200 dark:bg-zinc-700 p-1 rounded-lg">
        {children.map((tab, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === activeTab}
            aria-controls={`tabpanel-${index}`}
            id={`tab-${index}`}
            tabIndex={index === activeTab ? 0 : -1}
            className={cn(
              'py-1 px-4 rounded-lg flex items-center content-center',
              index === activeTab
                ? 'bg-white dark:bg-black text-black dark:text-white shadow-lg text-base md:text-lg font-normal'
                : 'text-gray-700 dark:text-gray-50 hover:bg-white dark:hover:bg-zinc-950 hover:text-black dark:hover:text-white',
              tabClassName
            )}
            onClick={() => handleTabClick(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            {tab.props.iconLight && tab.props.iconDark && (
              <Image
                src={theme === 'dark' ? tab.props.iconDark : tab.props.iconLight}
                alt={tab.props.label || 'Tab icon'}
                width={20}
                height={20}
              />
            )}
            {tab.props.label && !tab.props.iconLight && !tab.props.iconDark && (
              <span className={cn('align-middle justify-center text-base md:text-lg', tab.props.labelClassName)}>
                {tab.props.label}
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="p-2 w-full" id={`tabpanel-${activeTab}`} aria-labelledby={`tab-${activeTab}`} role="tabpanel">
        {children[activeTab]}
      </div>
    </div>
  );
};

Tabs.displayName = "Tabs";
Tab.displayName = "Tab";
export { Tab, Tabs };
