"use client";

import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid';

const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState('system');
    const [dropdownOpen, setDropdownOpen] = useState(false);

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
    }, [theme]);

    const applyTheme = (theme: string) => {
        if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            document.documentElement.classList.toggle('dark', systemTheme === 'dark');
        } else {
            document.documentElement.classList.toggle('dark', theme === 'dark');
        }
    };

    const handleThemeChange = (newTheme: string) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
        setDropdownOpen(false); 
    };

    return (
        <div className="relative inline-block text-left">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="rounded-md p-2">
                {theme === 'light' ? (
                    <SunIcon className="h-6 w-6 text-yellow-500" />
                ) : theme === 'dark' ? (
                    <MoonIcon className="h-5 w-5 text-gray-500" />
                ) : (
                    <ComputerDesktopIcon className="h-5 w-5 text-gray-600 dark:text-gray-100" />
                )}
            </button>
            {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-10">
                    <button
                        onClick={() => handleThemeChange('light')}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900"
                    >
                        Light
                    </button>
                    <button
                        onClick={() => handleThemeChange('dark')}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900"
                    >
                        Dark
                    </button>
                    <button
                        onClick={() => handleThemeChange('system')}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900"
                    >
                        System
                    </button>
                </div>
            )}
        </div>
    );
};

export default ThemeToggle;
