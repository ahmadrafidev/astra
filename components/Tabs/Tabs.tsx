// components/Tabs/Tabs.tsx
'use client'

import React, { useState } from 'react';

interface TabProps {
    label: string;
    children: React.ReactNode;
}

interface TabsProps {
    children: React.ReactElement<TabProps>[];
}

const Tab: React.FC<TabProps> = ({ children }) => <div>{children}</div>;

const Tabs: React.FC<TabsProps> = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="flex flex-col items-center">
            <div className="flex space-x-2 bg-gray-200 p-1 rounded-lg">
                {children.map((tab, index) => (
                    <button
                        key={index}
                        className={`py-2 px-4 rounded-lg ${
                            index === activeTab
                                ? 'bg-white text-black shadow'
                                : 'text-gray-600 hover:bg-white hover:text-black'
                        }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.props.label}
                    </button>
                ))}
            </div>
            <div className="p-4">{children[activeTab]}</div>
        </div>
    );
};

export { Tab, Tabs };
