// components/Sidebar/Sidebar.tsx
'use client'

import React, { useState } from 'react';
import Link from 'next/link';

import SearchBar from '../SearchBar/SearchBar';
import { Tabs, Tab } from '../Tabs/Tabs';
import { componentsList, foundationList, aboutList } from '../../utils/constants/route';


interface SidebarProps {
    activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
    
    const [filteredComponents, setFilteredComponents] = useState(componentsList);
    const [filteredFoundations, setFilteredFoundations] = useState(foundationList);

    const handleSearch = (query: string) => {
        const lowerCaseQuery = query.toLowerCase();
        const filteredComponents = componentsList.filter(component =>
            component.name.toLowerCase().includes(lowerCaseQuery)
        );

        const filteredFoundations = foundationList.filter(foundation =>
            foundation.name.toLowerCase().includes(lowerCaseQuery)
        );
        
        setFilteredComponents(filteredComponents);
        setFilteredFoundations(filteredFoundations);
    };

    return (
        <aside className="w-full md:w-64 bg-gray-50 dark:bg-gray-800 h-auto p-5">
            <SearchBar onSearch={handleSearch} />

            {activeSection === 'about' && (
                <>
                    <h2 className="text-base lg:text-lg font-medium mb-4 my-2 lg:my-4 text-black dark:text-white">About Astra UI</h2>
                    <ul className="my-2 lg:my-4">
                        {aboutList.map((about) => (
                            <li key={about.name}>
                                <Link href={about.path} className="text-sm lg:text-base font-sans font-light text-black dark:text-white">
                                    {about.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            {activeSection === 'foundations' && (
                <>
                    <h2 className="text-base lg:text-lg font-medium mb-4 my-2 lg:my-4 text-black dark:text-white">Foundations</h2>
                    <ul>
                        {filteredFoundations.map((foundation) => (
                            <li key={foundation.name} className="mb-2">
                                <Link href={foundation.path} className="text-sm lg:text-base font-sans font-light text-black dark:text-white">
                                    {foundation.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            {activeSection === 'components' && (
                <>
                    <h2 className="text-base lg:text-lg font-medium mb-4 my-2 lg:my-4 text-black dark:text-white">Components</h2>
                    <Tabs>
                        <Tab label="Web">
                            <ul>
                                {filteredComponents.map((component) => (
                                    <li key={component.name} className="mb-2">
                                        <Link href={component.path} className="text-sm lg:text-base font-sans font-light text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            {component.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Tab>
                        <Tab icon="/icons/apple.webp">
                            <ul>
                                {filteredComponents.map((component) => (
                                    <li key={component.name} className="mb-2">
                                        <Link href={component.path} className="text-sm lg:text-base font-sans font-light text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            {component.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Tab>
                        <Tab icon="/icons/android.webp">
                            <ul>
                                {filteredComponents.map((component) => (
                                    <li key={component.name} className="mb-2">
                                        <Link href={component.path} className="text-sm lg:text-base font-sans font-light text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            {component.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Tab>
                    </Tabs>
                </>
            )}
        </aside>
    );
};

Sidebar.displayName = "Sidebar";
export default Sidebar;
