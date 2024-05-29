// components/Layout.tsx
'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { componentsList } from '../../utils/constants/route';
import SearchBar from '../SearchBar/SearchBar';
import Header from '../Header/Header';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [filteredComponents, setFilteredComponents] = useState(componentsList);

    const handleSearch = (query: string) => {
        const filtered = componentsList.filter(component =>
            component.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredComponents(filtered);
    };

    return (
        <>
            <Header />
            <div className="flex flex-col md:flex-row">
                <aside className="w-full md:w-64 bg-gray-50 dark:bg-gray-400 h-screen md:h-auto p-5">
                    <SearchBar onSearch={handleSearch} />
                    <h2 className="text-lg lg:text-xl font-semibold mb-4 my-2 lg:my-4 text-black dark:text-white">Components</h2>
                    <ul>
                        {componentsList.map((component) => (
                            <li key={component.name} className="mb-2">
                                <Link href={component.path} className="text-base lg:text-md font-normal text-black dark:text-white">
                                    {component.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>
                <main className="flex-1 p-4 bg-gray-50 dark:bg-gray-400 overflow-y-auto h-screen md:h-auto">
                    {children}
                </main>
            </div>
        </>
    ); 
};

export default Layout;
