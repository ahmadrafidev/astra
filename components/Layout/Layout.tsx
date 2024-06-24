// components/Layout.tsx
'use client'

import React, { useState } from 'react';
import Link from 'next/link';

import SearchBar from '../SearchBar/SearchBar';
import Header from '../Header/Header';

import { componentsList, foundationList, aboutList } from '../../utils/constants/route';
import Image from 'next/image';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [filteredComponents, setFilteredComponents] = useState(componentsList);
    const [selectedCategory, setSelectedCategory] = useState<string>('about');

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
                <aside className="w-full md:w-64 bg-gray-50 dark:bg-gray-800 h-screen md:h-auto p-5">
                    <SearchBar onSearch={handleSearch} />
                    <ul className="my-2 lg:my-4">
                        {aboutList.map((about) => (
                            <li key={about.name}>
                                <Link href={about.path} className="text-base lg:text-lg font-medium mb-4 my-2 lg:my-4 text-black dark:text-white">
                                    {about.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <h2 className="text-base lg:text-lg font-medium mb-4 my-2 lg:my-4 text-black dark:text-white">Foundations</h2>
                    <ul>
                        {foundationList.map((foundation) => (
                            <li key={foundation.name} className="mb-2">
                                <Link href={foundation.path} className="text-sm lg:text-base font-sans font-light text-black dark:text-white">
                                    {foundation.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <h2 className="text-base lg:text-lg font-medium mb-4 my-2 lg:my-4 text-black dark:text-white">Components</h2>
                    <ul>
                        {componentsList.map((component) => (
                            <li key={component.name} className="mb-2">
                                <Link href={component.path} className="text-sm lg:text-base font-sans font-light text-black dark:text-white">
                                    {component.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>
                <main className="flex-1 p-4 bg-gray-50 dark:bg-gray-800 overflow-y-auto h-screen md:h-auto">
                    {children}
                </main>
            </div>
            <footer className="flex flex-col sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-800">
                <p className="text-xs text-gray-900 dark:text-gray-200">© 2024 Astra UI</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <Link href="https://x.com/ahmadrafiwirana" passHref>
                    <Image src="/twitter.png" alt="X Icon" width={20} height={20} />
                </Link>
                <Link href="https://github.com/ahmadrafidev/astra" passHref>
                    <Image src="/github.png" alt="GitHub Icon" width={20} height={20} />
                </Link>
                </nav>
            </footer>
        </>
    ); 
};

export default Layout;
