'use client';

import { 
    useCallback,
    useEffect,
    useRef,
    useState,
    memo
} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { cn } from "@/lib/utils";
import { useMemoizedPathname } from '@/hooks/useMemoizedPathname';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
 
const useScrollPosition = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return isScrolled;
};

const useOutsideClick = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };
        
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [ref, callback]);
};

const useMobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    
    const closeMenu = useCallback(() => setIsOpen(false), []);
    const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
    
    useOutsideClick(menuRef, closeMenu);
    
    useEffect(() => {
        const handleResize = () => closeMenu();
        if (isOpen) {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [isOpen, closeMenu]);
    
    return { isOpen, toggleMenu, closeMenu, menuRef };
};

const NAVIGATION_SECTIONS = ['about', 'foundations', 'components'] as const;
type NavigationSection = typeof NAVIGATION_SECTIONS[number];

export interface HeaderProps {
    setActiveSection: (section: string) => void;
    toggleSidebar?: () => void; 
    isSidebarOpen?: boolean;
    className?: string;
}

const Header = memo<HeaderProps>(({ 
    setActiveSection, 
    toggleSidebar, 
    isSidebarOpen, 
    className 
}) => {
    const pathname = useMemoizedPathname();
    const isScrolled = useScrollPosition();
    const { isOpen: isMobileMenuOpen, toggleMenu, closeMenu, menuRef } = useMobileMenu();
    
    const activeSection = pathname.startsWith('/foundations') 
        ? 'foundations'
        : pathname.startsWith('/components')
        ? 'components'
        : 'about';
    
    useEffect(() => {
        setActiveSection(activeSection);
    }, [activeSection, setActiveSection]);
    
    const shouldHideMobileMenu = NAVIGATION_SECTIONS.some(section => 
        pathname.startsWith(`/${section}`)
    );
    
    const handleSectionClick = useCallback((section: NavigationSection) => {
        setActiveSection(section);
        closeMenu();
    }, [setActiveSection, closeMenu]);
    
    return (
        <header
            className={cn(
                "sticky top-0 px-6 md:px-14 h-14 py-4 md:py-8 flex items-center transition-all duration-500 z-50",
                isScrolled 
                    ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-800/20' 
                    : 'bg-gray-50 dark:bg-black',
                className
            )}
            role="banner"
            aria-label="Main Navigation"
        >
            {!isSidebarOpen && toggleSidebar && (
                <button 
                    type="button"
                    className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800" 
                    onClick={toggleSidebar}
                    aria-label="Open sidebar navigation"
                >
                    <Bars3Icon className="h-6 w-6 text-gray-900 dark:text-gray-100" />
                </button>
            )}
            
            <Link 
                className="flex items-center justify-center ml-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg" 
                href="/" 
                aria-label="Navigate to homepage"
            >
                <h1 className="text-gray-900 dark:text-white text-2xl md:text-4xl font-semibold font-sans">
                    Astra
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                        UI
                    </span>
                </h1>
            </Link>
            
            <nav className="ml-auto flex items-center gap-2" role="navigation" aria-label="Primary navigation">
                <div className="hidden md:flex items-center gap-2">
                    {NAVIGATION_SECTIONS.map((section) => {
                        const isActive = pathname.startsWith(`/${section}`);
                        const label = section.charAt(0).toUpperCase() + section.slice(1);
                        
                        return (
                            <Link
                                key={section}
                                href={`/${section}`}
                                onClick={() => setActiveSection(section)}
                                aria-label={`Navigate to ${label}`}
                                aria-current={isActive ? 'page' : undefined}
                                className={cn(
                                    "inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                    "hover:bg-gray-100 dark:hover:bg-gray-800",
                                    "focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    isActive 
                                        ? 'bg-gray-300/40 dark:bg-gray-800 text-gray-900 dark:text-gray-100' 
                                        : 'text-gray-700 dark:text-gray-300'
                                )}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </div>
                
                <div className="hidden md:block h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2" />
                
                <Link 
                    href="https://github.com/ahmadrafidev/astra" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="View source code on GitHub (opens in new tab)"
                >
                    <Image
                        quality={100}
                        src="/icons/github-light.webp"
                        alt="GitHub"
                        width={20}
                        height={20}
                        className="block dark:hidden"
                    />
                    <Image
                        quality={100}
                        src="/icons/github-dark.webp"
                        alt="GitHub"
                        width={20}
                        height={20}
                        className="hidden dark:block bg-white rounded-full"
                    />
                </Link>
                
                <ThemeToggle />
                
                {!shouldHideMobileMenu && (
                    <button
                        type="button"
                        className="md:hidden p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={toggleMenu}
                        aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        {isMobileMenuOpen ? (
                            <XMarkIcon className="h-6 w-6 text-gray-900 dark:text-gray-100" />
                        ) : (
                            <Bars3Icon className="h-6 w-6 text-gray-900 dark:text-gray-100" />
                        )}
                    </button>
                )}
            </nav>
            
            {isMobileMenuOpen && (
                <div 
                    ref={menuRef} 
                    id="mobile-menu"
                    className="fixed top-14 right-6 w-48 bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                    role="menu"
                    aria-label="Mobile navigation menu"
                >
                    <nav className="py-2" role="none">
                        {NAVIGATION_SECTIONS.map((section) => {
                            const isActive = pathname.startsWith(`/${section}`);
                            const label = section.charAt(0).toUpperCase() + section.slice(1);
                            
                            return (
                                <Link
                                    key={section}
                                    href={`/${section}`}
                                    onClick={() => handleSectionClick(section)}
                                    role="menuitem"
                                    aria-current={isActive ? 'page' : undefined}
                                    className={cn(
                                        "block px-4 py-2 text-sm font-medium transition-colors",
                                        "hover:bg-gray-100 dark:hover:bg-gray-800",
                                        "focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800",
                                        isActive 
                                            ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100' 
                                            : 'text-gray-700 dark:text-gray-300'
                                    )}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            )}
        </header>
    );
});

Header.displayName = "Header";
export default Header;
