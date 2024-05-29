// components/ThemeToggle/ThemeToggle.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <button onClick={toggleTheme} className="rounded-md">
            {theme === 'light' ? < MoonIcon className="h-6 w-6 text-gray-400" /> :  <SunIcon className="h-6 w-6 text-yellow-300" />}
        </button>
    );
};

export default ThemeToggle;
