'use client'

import React, { 
    useState, 
    useEffect, 
    useCallback,
    useMemo 
} from 'react';

import { Tabs, Tab } from '@/components/Tabs/Tabs';
import AlphabeticalList from '@/components/AlphabeticalList/AlphabeticalList';
import CategoricalList from '@/components/CategoricalList/CategoricalList';

const AstraComponentClient: React.FC = () => {
    const [activeTab, setActiveTab] = useState(() => {
        return localStorage.getItem('activeTab') || 'Alphabetical';
    });

    const handleTabChange = useCallback((label: string) => {
        setActiveTab(label);
        localStorage.setItem('activeTab', label);
    }, []);

    const tabs = useMemo(() => (
        <Tabs activeTab={activeTab} onTabChange={handleTabChange}>
            <Tab label="Alphabetical">
                <AlphabeticalList />
            </Tab>
            <Tab label="Categorical">
                <CategoricalList />
            </Tab>
        </Tabs>
    ), [activeTab, handleTabChange]);

    return (
        <div className="my-2 md:my-4">
            {tabs}
        </div>
    );
};

AstraComponentClient.displayName = "AstraComponentClient"
export default AstraComponentClient;
