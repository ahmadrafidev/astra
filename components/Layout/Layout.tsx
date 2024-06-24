// components/Layout.tsx
'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import SearchBar from '../SearchBar/SearchBar';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

import { componentsList, foundationList, aboutList } from '../../utils/constants/route';

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
                <Sidebar />
                <main className="flex-1 p-4 bg-gray-50 dark:bg-gray-800 overflow-y-auto h-screen md:h-auto">
                    {children}
                </main>
            </div>
            <Footer />
        </>
    ); 
};

export default Layout;
