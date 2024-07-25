// components/Layout/Layout.tsx
'use client'

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [activeSection, setActiveSection] = useState('about');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (pathname.startsWith('/foundations')) {
            setActiveSection('foundations');
        } else if (pathname.startsWith('/components')) {
            setActiveSection('components');
        } else {
            setActiveSection('about');
        }
    }, [pathname]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header setActiveSection={setActiveSection} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
            <div className="flex flex-1 px-4 md:px-10">
                <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
                <main className="flex-1 p-6 md:p-7 bg-gray-50 dark:bg-black">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
};

Layout.displayName = "Layout";
export default Layout;
