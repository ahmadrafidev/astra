// components/Sidebar/Sidebar.tsx
'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

import { useMemoizedPathname } from '../../hooks/useMemoizedPathname.jsx';

import SearchBar from '../SearchBar/SearchBar';
import { Tabs, Tab } from '../Tabs/Tabs';
import { componentsList, foundationList, aboutList } from '../../utils/constants/route';

interface SidebarProps {
    isSidebarOpen: boolean;
    closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, closeSidebar }) => {
    const pathname = useMemoizedPathname();
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

    const isActive = (path: string) => pathname === path;

    return (
        <aside className={`fixed md:static bg-gray-50 dark:bg-black h-full md:h-auto z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out md:w-64 w-64 p-5`}>
            <div className="flex items-center justify-end md:hidden mb-3">
                <button className="p-2 focus:outline-none" onClick={closeSidebar}>
                    <ArrowLeftIcon className="h-6 w-6 text-black dark:text-white" />
                </button>
            </div>
            <div className="w-full">
                <SearchBar onSearch={handleSearch} />
                {pathname.startsWith('/about') && (
                    <>
                        <h2 className="text-base md:text-lg lg:text-xl font-medium my-2 lg:my-4 text-black dark:text-white px-2">About AstraUI</h2>
                        <ul className="my-2 lg:my-4">
                            {aboutList.map((about) => (
                                <li key={about.name} onClick={closeSidebar}>
                                    <Link href={about.path} className={`block rounded-xl px-2 py-3 text-sm lg:text-base font-sans font-normal ${isActive(about.path) ? 'bg-black text-white dark:bg-gray-50 dark:text-black' : 'hover:bg-gray-200 focus:bg-gray-300 dark:hover:bg-gray-600 dark:focus:bg-gray-600 text-black dark:text-white'}`} >
                                        {about.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                {pathname.startsWith('/foundations') && (
                    <>
                        <h2 className="text-base md:text-lg lg:text-xl font-medium my-3 lg:my-4 text-black dark:text-white px-2">Foundations</h2>
                        <ul>
                            {filteredFoundations.map((foundation) => (
                                <li key={foundation.name} onClick={closeSidebar}>
                                    <Link href={foundation.path} className={`block rounded-xl px-2 py-2.5 text-sm lg:text-base font-sans font-normal ${isActive(foundation.path) ? 'bg-black text-white dark:bg-gray-50 dark:text-black ' : 'hover:bg-gray-200 focus:bg-gray-300 dark:hover:bg-gray-600 dark:focus:bg-gray-600 text-black dark:text-white'}`}>
                                        {foundation.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                {pathname.startsWith('/components') && (
                    <div className="my-3 md:my-4">
                        <Tabs>
                            <Tab label="Web">
                                <h2 className="text-base md:text-lg lg:text-xl font-medium my-2 md:my-3 text-black dark:text-white px-2">Web</h2>
                                <ul>
                                    {filteredComponents.map((component) => (
                                        <li key={component.name} onClick={closeSidebar}>
                                            <Link href={component.path} className={`block rounded-xl px-2 py-2.5 text-sm lg:text-base font-sans font-normal ${isActive(component.path) ? 'bg-black text-white dark:bg-gray-50 dark:text-black ' : 'hover:bg-gray-200 focus:bg-gray-300 dark:hover:bg-gray-600 dark:focus:bg-gray-600 text-black dark:text-white'}`}>
                                                {component.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Tab>
                            <Tab icon="/icons/apple.webp">
                                <h2 className="text-base md:text-lg lg:text-xl font-medium my-2 md:my-3 text-black dark:text-white px-2">iOS</h2>
                                <ul>
                                    {filteredComponents.map((component) => (
                                        <li key={component.name} onClick={closeSidebar}>
                                            <Link href={component.path} className={`block rounded-xl px-2 py-2.5 text-sm lg:text-base font-sans font-normal ${isActive(component.path) ? 'bg-black text-white dark:bg-gray-50 dark:text-black ' : 'hover:bg-gray-200 focus:bg-gray-300 dark:hover:bg-gray-600 dark:focus:bg-gray-600 text-black dark:text-white'}`}>
                                                {component.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Tab>
                            <Tab icon="/icons/android.webp">
                                <h2 className="text-base md:text-lg lg:text-xl font-medium my-2 md:my-3 text-black dark:text-white px-2">Android</h2>
                                <ul>
                                    {filteredComponents.map((component) => (
                                        <li key={component.name} onClick={closeSidebar}>
                                            <Link href={component.path} className={`block rounded-xl px-2 py-2.5 text-sm lg:text-base font-sans font-normal ${isActive(component.path) ? 'bg-black text-white dark:bg-gray-50 dark:text-black ' : 'hover:bg-gray-200 focus:bg-gray-300 dark:hover:bg-gray-600 dark:focus:bg-gray-600 text-black dark:text-white'}`}>
                                                {component.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Tab>
                        </Tabs>
                    </div>
                )}
            </div>
        </aside>
    );
};

Sidebar.displayName = "Sidebar";
export default Sidebar;
