'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid';
import { useTheme, type Theme } from '@/hooks/useTheme';

const ThemeToggle: React.FC = () => {
    const { theme, setTheme, mounted } = useTheme();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setDropdownOpen(false);
        }
    }, []);

    useEffect(() => {
        if (dropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownOpen, handleClickOutside]);

    const handleThemeChange = (newTheme: Theme) => {
        setTheme(newTheme);
        setDropdownOpen(false);
    };

    const handleButtonClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setDropdownOpen(!dropdownOpen);
    };

    if (!mounted) {
        return (
            <div className="rounded-full p-2 w-10 h-10" aria-label="Loading theme toggle">
                <div className="h-6 w-6 bg-gray-200 animate-pulse rounded"></div>
            </div>
        );
    }

    const currentTheme = theme || 'system';

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button 
                onClick={handleButtonClick} 
                className="rounded-full p-2 items-center hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                aria-label="Toggle theme menu"
            >
                {currentTheme === 'light' ? (
                    <SunIcon className="h-6 w-6 text-yellow-500" />
                ) : currentTheme === 'dark' ? (
                    <MoonIcon className="h-6 w-6 text-blue-400" />
                ) : (
                    <ComputerDesktopIcon className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                )}
            </button>
            
            {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 overflow-hidden">
                    <button
                        onClick={() => handleThemeChange('light')}
                        className={`flex items-center w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                            currentTheme === 'light' 
                                ? 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20' 
                                : 'text-gray-700 dark:text-gray-200'
                        }`}
                        aria-label="Switch to light theme"
                    >
                        <SunIcon className="h-4 w-4 mr-2" />
                        Light
                    </button>
                    <button
                        onClick={() => handleThemeChange('dark')}
                        className={`flex items-center w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                            currentTheme === 'dark' 
                                ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                                : 'text-gray-700 dark:text-gray-200'
                        }`}
                        aria-label="Switch to dark theme"
                    >
                        <MoonIcon className="h-4 w-4 mr-2" />
                        Dark
                    </button>
                    <button
                        onClick={() => handleThemeChange('system')}
                        className={`flex items-center w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                            currentTheme === 'system' 
                                ? 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20' 
                                : 'text-gray-700 dark:text-gray-200'
                        }`}
                        aria-label="Use system theme"
                    >
                        <ComputerDesktopIcon className="h-4 w-4 mr-2" />
                        System
                    </button>
                </div>
            )}
        </div>
    );
};

ThemeToggle.displayName = "ThemeToggle";
export default ThemeToggle;
