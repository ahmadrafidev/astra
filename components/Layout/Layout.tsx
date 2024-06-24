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

const Layout: React.FC = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-4 bg-gray-50 dark:bg-gray-800">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
