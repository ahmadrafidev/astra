'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid';

const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState('system');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const applyTheme = useCallback((theme: string) => {
        if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            document.documentElement.classList.toggle('dark', systemTheme === 'dark');
            dispatchThemeChangeEvent(systemTheme);
        } else {
            document.documentElement.classList.toggle('dark', theme === 'dark');
            dispatchThemeChangeEvent(theme);
        }
    }, []);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'system';
        setTheme(savedTheme);
        applyTheme(savedTheme);

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            if (theme === 'system') {
                applyTheme('system');
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [applyTheme, theme]);

    const dispatchThemeChangeEvent = (theme: string) => {
        const event = new CustomEvent('themeChange', { detail: theme });
        window.dispatchEvent(event);
    };

    const handleThemeChange = (newTheme: string) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
        setDropdownOpen(false);
    };

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

    const handleButtonClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button 
                onClick={handleButtonClick} 
                className="rounded-full p-2 items-center hover:bg-gray-200 dark:hover:bg-zinc-700 transition"
                aria-label="Toggle theme menu"
            >
                {theme === 'light' ? (
                    <SunIcon className="h-6 w-6 text-yellow-500" />
                ) : theme === 'dark' ? (
                    <MoonIcon className="h-5 w-5 text-gray-200" />
                ) : (
                    <ComputerDesktopIcon className="h-6 w-5 text-gray-700 dark:text-gray-200" />
                )}
            </button>
            {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-10 overflow-hidden">
                    <button
                        onClick={() => handleThemeChange('light')}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900"
                        aria-label="Switch to light theme"
                    >
                        Light
                    </button>
                    <button
                        onClick={() => handleThemeChange('dark')}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900"
                        aria-label="Switch to dark theme"
                    >
                        Dark
                    </button>
                    <button
                        onClick={() => handleThemeChange('system')}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900"
                        aria-label="Use system theme"
                    >
                        System
                    </button>
                </div>
            )}
        </div>
    );
};

ThemeToggle.displayName = "ThemeToggle";
export default ThemeToggle;
