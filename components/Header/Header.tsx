'use client';

import { 
    useEffect, 
    useState, 
    useRef, 
    useCallback 
} from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { cn } from "@/lib/utils";
import { useMemoizedPathname } from '@/hooks/useMemoizedPathname';

import ThemeToggle from '../ThemeToggle/ThemeToggle';

export interface HeaderProps {
    setActiveSection: (section: string) => void;
    toggleSidebar?: () => void; 
    isSidebarOpen?: boolean;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ setActiveSection, toggleSidebar, isSidebarOpen, className }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = useMemoizedPathname();
    const popoverRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        if (pathname.startsWith('/foundations')) {
            setActiveSection('foundations');
        } else if (pathname.startsWith('/components')) {
            setActiveSection('components');
        } else {
            setActiveSection('about');
        }
    }, [pathname, setActiveSection]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
            closeMobileMenu();
        }
    }, []);

    const handleResize = useCallback(() => {
        closeMobileMenu();
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            window.addEventListener('resize', handleResize);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', handleResize);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', handleResize);
        };
    }, [handleClickOutside, handleResize, isMobileMenuOpen]);

    const hideMobileMenu = pathname.startsWith('/about') || pathname.startsWith('/foundations') || pathname.startsWith('/components');

    return (
        <header
            className={cn(
                "sticky top-0 px-6 md:px-14 h-14 py-4 md:py-8 flex items-center transition-all duration-500 z-50",
                isScrolled ? 'bg-transparent backdrop-blur' : 'bg-gray-50 dark:bg-black',
                className
            )}
            aria-label="Main Navigation"
        >
            {!isSidebarOpen && toggleSidebar && (
                <button className="md:hidden p-2 focus:outline-none" onClick={toggleSidebar} aria-label="Toggle Sidebar">
                    <Bars3Icon className="h-6 w-6 text-black dark:text-white" />
                </button>
            )}
            <Link className="flex items-center justify-center ml-2" href="/" aria-label="Home">
                <p className="text-gray-900 dark:text-white text-2xl md:text-4xl font-semibold font-sans">
                    Astra
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                        UI
                    </span>
                </p>
            </Link>
            <nav className="ml-auto gap-1 md:gap-2 flex items-center" aria-label="Primary Navigation">
                {/* Desktop Navigation Links */}
                <div className={cn("hidden md:flex items-center gap-1 md:gap-2")}>
                    {['about', 'foundations', 'components'].map((section) => {
                        const isActive = pathname.startsWith(`/${section}`);
                        return (
                            <Link
                                key={section}
                                href={`/${section}`}
                                onClick={() => setActiveSection(section)}
                                aria-label={section.charAt(0).toUpperCase() + section.slice(1)}
                                className={cn(
                                    "inline-block rounded-lg px-2 py-1 text-sm font-medium",
                                    "hover:bg-zinc-200 dark:hover:bg-zinc-700 text-gray-900 dark:text-white",
                                    isActive ? 'underline text-zinc-900 dark:text-zinc-50' : ''
                                )}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </Link>
                        );
                    })}
                </div>
                {/* Divider */}
                <div className="hidden md:block h-6 border-l border-gray-300 dark:border-gray-600 mx-2"></div>
                {/* GitHub Icon */}
                <Link href="https://github.com/ahmadrafidev/astra" passHref aria-label="GitHub Icon">
                    <Image
                        quality={100}
                        src="/icons/github-light.webp"
                        alt="GitHub Light Icon"
                        width={20}
                        height={20}
                        className="block dark:hidden"
                    />
                    <Image
                        quality={100}
                        src="/icons/github-dark.webp"
                        alt="GitHub Dark Icon"
                        width={20}
                        height={20}
                        className="hidden dark:block bg-white rounded-full"
                    />
                </Link>
                <ThemeToggle />
                {/* Mobile Menu Button */}
                {!hideMobileMenu && (
                    <button
                        className="md:hidden ml-4 p-2 focus:outline-none hover:bg-gray-200 dark:hover:bg-zinc-700 rounded"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle Mobile Menu"
                    >
                        {isMobileMenuOpen ? (
                            <XMarkIcon className="h-6 w-6 text-black dark:text-white" />
                        ) : (
                            <Bars3Icon className="h-6 w-6 text-black dark:text-white" />
                        )}
                    </button>
                )}
            </nav>
            {/* Mobile Popover Menu */}
            {isMobileMenuOpen && (
                <div ref={popoverRef} className="fixed top-14 right-6 w-48 bg-gray-50 dark:bg-black shadow z-50 rounded-lg">
                    <nav className="flex flex-col gap-2 p-2" aria-label="Mobile Navigation">
                        {['about', 'foundations', 'components'].map((section) => (
                            <Link
                                key={section}
                                href={`/${section}`}
                                onClick={() => {
                                    setActiveSection(section);
                                    closeMobileMenu();
                                }}
                                aria-label={section.charAt(0).toUpperCase() + section.slice(1)}
                                className={cn(
                                    "block rounded-lg px-2 py-1 text-sm font-medium",
                                    "hover:bg-zinc-200 dark:hover:bg-zinc-800 text-gray-900 dark:text-white",
                                    pathname.startsWith(`/${section}`) ? 'underline text-zinc-900 dark:text-zinc-50' : ''
                                )}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

Header.displayName = "Header";
export default Header;
