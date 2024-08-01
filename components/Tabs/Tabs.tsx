// components/Tabs/Tabs.tsx
'use client'

import React, { useState } from 'react';
import Image from 'next/image';

export interface TabProps {
    label?: string;
    icon?: string;
    children: React.ReactNode;
    className?: string;
}

export interface TabsProps {
    children: React.ReactElement<TabProps>[];
    className?: string;
}

const Tab: React.FC<TabProps> = ({ children, className, ...props }) => <div role="tabpanel">{children}</div>;

const Tabs: React.FC<TabsProps> = ({ children, className }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
        if (event.key === 'ArrowRight') {
            setActiveTab((index + 1) % children.length);
        } else if (event.key === 'ArrowLeft') {
            setActiveTab((index - 1 + children.length) % children.length);
        }
    };

    return (
        <div className={`flex flex-col items-center ${className}`} role="tablist">
            <div className="flex space-x-2 bg-gray-200 dark:bg-gray-700 p-1 rounded-lg">
                {children.map((tab, index) => (
                    <button
                        key={index}
                        role="tab"
                        aria-selected={index === activeTab}
                        aria-controls={`tabpanel-${index}`}
                        id={`tab-${index}`}
                        tabIndex={index === activeTab ? 0 : -1}
                        className={`py-1 px-4 rounded-lg flex items-center ${
                            index === activeTab
                                ? 'bg-white dark:bg-gray-900 text-black dark:text-white shadow-lg text-base md:text-lg font-normal'
                                : 'text-gray-700 dark:text-gray-50 hover:bg-white dark:hover:bg-gray-900 hover:text-black dark:hover:text-white'
                        }`}
                        onClick={() => setActiveTab(index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                    >
                        {tab.props.icon && <Image src={tab.props.icon} alt={tab.props.label || 'Tab icon'} width={20} height={20} />}
                        {tab.props.label && !tab.props.icon && <span className="align-middle justify-center text-base md:text-lg">{tab.props.label}</span>}
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
