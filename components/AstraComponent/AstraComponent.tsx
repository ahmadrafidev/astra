'use client';

import React, { useState, useEffect } from 'react';

import { Tabs, Tab } from '@/components/Tabs/Tabs';
import AlphabeticalList from '@/components/AlphabeticalList/AlphabeticalList';
import CategoricalList from '@/components/CategoricalList/CategoricalList';

interface AstraComponentProps {
    initialActiveTab: string;
}

const AstraComponent: React.FC<AstraComponentProps> = ({ initialActiveTab }) => {
    const [activeTab, setActiveTab] = useState(initialActiveTab);
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);

        if (typeof window !== 'undefined') {
            const savedTab = localStorage.getItem('activeTab');
            if (savedTab) {
                setActiveTab(savedTab);
            }
        }
    }, []);

    const handleTabChange = (label: string) => {
        setActiveTab(label);
        if (typeof window !== 'undefined') {
            localStorage.setItem('activeTab', label);
        }
    };

    if (!isHydrated) {
        return null;
    }

    return (
        <div className="my-2 md:my-4">
            <Tabs activeTab={activeTab} onTabChange={handleTabChange}>
                <Tab label="Alphabetical">
                    <AlphabeticalList />
                </Tab>
                <Tab label="Categorical">
                    <CategoricalList />
                </Tab>
            </Tabs>
        </div>
    );
};

AstraComponent.displayName = "AstraComponent";
export default AstraComponent;
