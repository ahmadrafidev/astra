'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

import { useMemoizedPathname } from '../../hooks/useMemoizedPathname.jsx';

import SearchBar from '../SearchBar/SearchBar';
import { Tabs, Tab } from '../Tabs/Tabs';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

import { componentsList, foundationList, aboutList } from '../../utils/constants/route';

export interface SidebarProps {
    isSidebarOpen: boolean;
    closeSidebar: () => void;
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, closeSidebar, className }) => {
    const pathname = useMemoizedPathname();
    const [filteredComponents, setFilteredComponents] = useState(componentsList);
    const [filteredFoundations, setFilteredFoundations] = useState(foundationList);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'system';
        setTheme(savedTheme);

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            if (savedTheme === 'system') {
                setTheme(mediaQuery.matches ? 'dark' : 'light');
            }
        };

        if (savedTheme === 'system') {
            setTheme(mediaQuery.matches ? 'dark' : 'light');
        }

        mediaQuery.addEventListener('change', handleChange);

        const handleThemeChange = (event: Event) => {
            const customEvent = event as CustomEvent;
            setTheme(customEvent.detail);
        };

        window.addEventListener('themeChange', handleThemeChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
            window.removeEventListener('themeChange', handleThemeChange);
        };
    }, []);

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
        <aside id="sidebar" aria-label="Main Sidebar" className={`fixed md:static bg-gray-50 dark:bg-black h-full md:h-auto z-40 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out md:w-64 w-64 p-5`}>
            <div className="flex items-center justify-end md:hidden mb-2">
                <button className="p-2 focus:outline-none" onClick={closeSidebar} aria-label="Close Sidebar Toggle">
                    <ArrowLeftIcon className="h-6 w-6 text-black dark:text-white" />
                </button>
            </div>
            <div className="flex flex-col justify-around md:hidden mb-4">
                <Link className="block rounded-lg text-gray-900 hover:bg-gray-200 px-3 py-2 text-sm hover:dark:bg-gray-700 dark:text-white" href="/about" onClick={closeSidebar} aria-label="About">
                    About   
                </Link>
                <Link className="block rounded-lg text-gray-900 hover:bg-gray-200 px-3 py-2 text-sm hover:dark:bg-gray-700 dark:text-white" href="/foundations" onClick={closeSidebar} aria-label="Foundation">
                    Foundations
                </Link>
                <Link className="block rounded-lg hover:bg-gray-200 px-3 py-2 text-sm hover:dark:bg-gray-700 text-gray-900 dark:text-white" href="/components" onClick={closeSidebar} aria-label="Components">
                    Components
                </Link>
            </div>
            <div className="w-full">
                <div className="hidden md:block">
                    <SearchBar className="ml-2" size="small" onSearch={handleSearch} />
                </div>
                {pathname.startsWith('/about') && (
                    <>
                        <h2 id="sidebar-heading-about" className="text-base md:text-lg lg:text-xl font-medium my-2 lg:my-4 text-black dark:text-white px-2">About AstraUI</h2>
                        <ul className="my-2 lg:my-4" aria-labelledby="sidebar-heading-about">
                            {aboutList.map((about) => (
                                <li key={about.name} onClick={closeSidebar}>
                                    <Link href={about.path} className={`block rounded-xl px-2 py-3 text-sm lg:text-base font-sans font-normal ${isActive(about.path) ? 'bg-black text-white dark:bg-gray-50 dark:text-black' : 'hover:bg-gray-200 focus:bg-gray-300 dark:hover:bg-gray-700 dark:focus:bg-gray-600 text-black dark:text-white'}`} >
                                        {about.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                {pathname.startsWith('/foundations') && (
                    <>
                        <h2 id="sidebar-heading-foundations" className="text-base md:text-lg lg:text-xl font-medium my-3 lg:my-4 text-black dark:text-white px-2">Foundations</h2>
                        <ul aria-labelledby="sidebar-heading-foundations">
                            {filteredFoundations.map((foundation) => (
                                <li key={foundation.name} onClick={closeSidebar}>
                                    <Link href={foundation.path} className={`block rounded-xl px-2 py-2.5 text-sm lg:text-base font-sans font-normal ${isActive(foundation.path) ? 'bg-black text-white dark:bg-gray-50 dark:text-black ' : 'hover:bg-gray-200 focus:bg-gray-300 dark:hover:bg-gray-700 dark:focus:bg-gray-600 text-black dark:text-white'}`}>
                                        {foundation.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                {pathname.startsWith('/components') && (
                    <div className="my-3 md:my-4">
                        <Tabs theme={theme}>
                            <Tab label="Web">
                                <h2 id="sidebar-heading-web" className="text-base md:text-lg lg:text-xl font-medium my-2 md:my-3 text-black dark:text-white px-2">Web</h2>
                                <ul aria-labelledby="sidebar-heading-web">
                                    {filteredComponents.map((component) => (
                                        <li key={component.name} onClick={closeSidebar}>
                                            <Link href={component.path} className={`block rounded-xl px-2 py-2.5 text-sm lg:text-base font-sans font-normal ${isActive(component.path) ? 'bg-black text-white dark:bg-gray-50 dark:text-black ' : 'hover:bg-gray-200 focus:bg-gray-300 dark:hover:bg-gray-700 dark:focus:bg-gray-600 text-black dark:text-white'}`}>
                                                {component.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Tab>
                            <Tab iconLight="/icons/apple-light.webp" iconDark="/icons/apple-dark.webp">
                                <h2 id="sidebar-heading-ios" className="text-base md:text-lg lg:text-xl font-medium my-2 md:my-3 text-black dark:text-white px-2">iOS</h2>
                                <ul aria-labelledby="sidebar-heading-ios">
                                    {filteredComponents.map((component) => (
                                        <li key={component.name} onClick={closeSidebar}>
                                            <Link href={component.path} className={`block rounded-xl px-2 py-2.5 text-sm lg:text-base font-sans font-normal ${isActive(component.path) ? 'bg-black text-white dark:bg-gray-50 dark:text-black ' : 'hover:bg-gray-200 focus:bg-gray-300 dark:hover:bg-gray-700 dark:focus:bg-gray-600 text-black dark:text-white'}`}>
                                                {component.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Tab>
                            <Tab iconLight="/icons/android-light.webp" iconDark="/icons/android-dark.webp">
                                <h2 id="sidebar-heading-android" className="text-base md:text-lg lg:text-xl font-medium my-2 md:my-3 text-black dark:text-white px-2">Android</h2>
                                <ul aria-labelledby="sidebar-heading-android">
                                    {filteredComponents.map((component) => (
                                        <li key={component.name} onClick={closeSidebar}>
                                            <Link href={component.path} className={`block rounded-xl px-2 py-2.5 text-sm lg:text-base font-sans font-normal ${isActive(component.path) ? 'bg-black text-white dark:bg-gray-50 dark:text-black ' : 'hover:bg-gray-200 focus:bg-gray-300 dark:hover:bg-gray-700 dark:focus:bg-gray-600 text-black dark:text-white'}`}>
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
