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
        <header className={`sticky top-0 px-6 md:px-16 h-14 py-4 md:py-8 flex items-center transition-all duration-300 z-50 ${isScrolled ? 'bg-transparent backdrop-blur' : 'bg-gray-50 dark:bg-black'}`} aria-label="Main Navigation">
            {!isSidebarOpen && toggleSidebar && (
                <button className="md:hidden p-2 focus:outline-none" onClick={toggleSidebar} aria-label="Toggle Sidebar">
                    <Bars3Icon className="h-6 w-6 text-black dark:text-white" />
                </button>
            )}
            <Link className="flex items-center justify-center ml-2" href="/" aria-label="Home">
                <div className="flex flex-row align-center gap-1 justify-start">
                    <p className="text-gray-900 dark:text-white text-2xl md:text-4xl font-semibold font-sans">
                        Astra
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                            UI
                        </span>
                    </p>
                </div>
            </Link>
            <nav className="ml-auto gap-2 sm:gap-3 flex items-center" aria-label="Primary Navigation">
                <Link className="hidden md:inline-block text-sm font-medium" href="/about" onClick={() => setActiveSection('about')} aria-label="About">
                    <div className="inline-block rounded-lg text-gray-900 hover:bg-zinc-200 px-3 py-1 text-sm hover:dark:bg-gray-800 dark:text-white">
                        About
                    </div>
                </Link>
                <Link className="hidden md:inline-block text-sm font-medium" href="/foundations" onClick={() => setActiveSection('foundations')} aria-label="Foundation">
                    <div className="inline-block rounded-lg text-gray-900 hover:bg-zinc-200 px-3 py-1 text-sm hover:dark:bg-gray-800 dark:text-white">
                        Foundations
                    </div>
                </Link>
                <Link className="hidden md:inline-block text-sm font-medium" href="/components" onClick={() => setActiveSection('components')} aria-label="Components">
                    <div className="inline-block rounded-lg hover:bg-zinc-200 px-3 py-1 text-sm text-gray-900 hover:dark:bg-gray-800 dark:text-white">
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
