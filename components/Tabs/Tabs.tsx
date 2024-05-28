// components/Tabs/Tabs.tsx
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
    <div>
        <div className="flex border-b">
        {children.map((tab, index) => (
            <button
            key={index}
            className={`py-2 px-4 ${
                index === activeTab ? 'border-b-2 border-blue-500' : ''
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
