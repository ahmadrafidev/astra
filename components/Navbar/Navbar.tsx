'use client';

import React from 'react';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';

import ThemeToggle from '../ThemeToggle/ThemeToggle';

export interface NavLink {
    label: string;
    href: string;
    ariaLabel?: string;
}

export interface NavigationBarProps {
    links: NavLink[];
    toggleSidebar?: () => void;
    isSidebarOpen?: boolean;
    hero?: React.ReactNode;
    className?: string;
    rightContent?: React.ReactNode;
}

const NavigationBar: React.FC<NavigationBarProps> = ({
    links,
    toggleSidebar,
    isSidebarOpen,
    hero,
    className,
    rightContent,
}) => {
    return (
        <nav className={`flex items-center justify-between p-4 bg-gray-50 dark:bg-black ${className}`}>
            <div className="flex items-center">
                {!isSidebarOpen && toggleSidebar && (
                    <button
                        onClick={toggleSidebar}
                        aria-label="Open Sidebar"
                        className="md:hidden p-2 focus:outline-none"
                    >
                        <Bars3Icon className="h-6 w-6 text-black dark:text-white" />
                    </button>
                )}
                {hero && (
                    <div className="ml-2">
                        {hero}
                    </div>
                )}
            </div>
            <div className="flex items-center space-x-4">
                {links.map((link) => (
                    <Link key={link.href} href={link.href} passHref>
                        <p className="text-sm font-medium text-gray-900 dark:text-white hover:underline" aria-label={link.ariaLabel}>
                            {link.label}
                        </p>
                    </Link>
                ))}
                {rightContent}
            </div>
        </nav>
    );
};

NavigationBar.displayName = 'NavigationBar';
export default NavigationBar;
