// components/Header/Header.tsx
'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Bars3Icon } from '@heroicons/react/24/outline';

import ThemeToggle from '../ThemeToggle/ThemeToggle';
import SearchBar from '../SearchBar/SearchBar';

import { componentsList, foundationList } from '../../utils/constants/route';

export interface HeaderProps {
    setActiveSection: (section: string) => void;
    toggleSidebar?: () => void; 
    isSidebarOpen?: boolean;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ setActiveSection, toggleSidebar, isSidebarOpen, className }) => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsScrolled(offset > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return (
        <header className={`sticky top-0 px-6 md:px-16 h-14 py-4 md:py-8 flex items-center transition-all duration-300 z-50 ${isScrolled ? 'bg-transparent backdrop-blur-sm' : 'bg-gray-50 dark:bg-black'}`} aria-label="Main Navigation">
            {!isSidebarOpen && toggleSidebar && (
                <button className="md:hidden p-2 focus:outline-none" onClick={toggleSidebar} aria-label="Toggle Sidebar">
                    <Bars3Icon className="h-6 w-6 text-black dark:text-white" />
                </button>
            )}
            <Link className="flex items-center justify-center ml-2" href="/" aria-label="Home">
                <div className="flex flex-row align-center gap-1 justify-start">
                    <p className="text-gray-900 dark:text-white text-2xl md:text-4xl font-semibold font-sans ">
                        AstraUI
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-gray-900 dark:text-gray-50">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                </div>
            </Link>
            <nav className="ml-auto gap-2 sm:gap-3 flex items-center" aria-label="Primary Navigation">
                <Link className="hidden md:inline-block text-sm font-medium" href="/about" onClick={() => setActiveSection('about')} aria-label="About">
                    <div className="inline-block rounded-lg text-gray-900 hover:bg-gray-200 px-3 py-1 text-sm hover:dark:bg-gray-600 dark:text-white">
                        About
                    </div>
                </Link>
                <Link className="hidden md:inline-block text-sm font-medium" href="/foundations" onClick={() => setActiveSection('foundations')} aria-label="Foundation">
                    <div className="inline-block rounded-lg text-gray-900 hover:bg-gray-200 px-3 py-1 text-sm hover:dark:bg-gray-600 dark:text-white">
                        Foundations
                    </div>
                </Link>
                <Link className="hidden md:inline-block text-sm font-medium" href="/components" onClick={() => setActiveSection('components')} aria-label="Components">
                    <div className="inline-block rounded-lg hover:bg-gray-200 px-3 py-1 text-sm text-gray-900 hover:dark:bg-gray-600 dark:text-white">
                        Components
                    </div>
                </Link>
                <div className="hidden md:block h-6 border-l border-gray-300 dark:border-gray-600 mx-2"></div> 
                <Link href="https://github.com/ahmadrafidev/astra" passHref aria-label="Github Image">
                    <Image quality={100} src="/icons/github-light.webp" alt="GitHub Light Icon" width={20} height={20} className="block dark:hidden"/>
                    <Image quality={100} src="/icons/github-dark.webp" alt="GitHub Dark Icon" width={20} height={20} className="hidden dark:block bg-white rounded-full"/>
                </Link>
                <ThemeToggle />
            </nav>
        </header>
    );
};

Header.displayName = "Header";
export default Header;
