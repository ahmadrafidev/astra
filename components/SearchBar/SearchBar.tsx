'use client'

import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export interface SearchBarProps {
    onSearch: (query: string) => void;
    className?: string;
    icon?: React.ReactNode;
    placeholder?: string;
    debounceTime?: number;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    size?: 'small' | 'medium' | 'large';
}

const debounce = (func: Function, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
};

const sizeClasses = {
    small: 'p-2 pl-10 text-sm',
    medium: 'p-3 pl-12 text-base',
    large: 'p-4 pl-13 text-lg',
};

const SearchBar: React.FC<SearchBarProps> = ({
    onSearch,
    className,
    icon = <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />,
    placeholder = 'Search AstraUI',
    debounceTime = 300,
    inputProps,
    size = "medium"
}) => {
    const [query, setQuery] = useState('');
    const debouncedSearch = debounce(onSearch, debounceTime);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        debouncedSearch(value);
    };

    return (
        <div className={`relative ${className}`}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {icon}
            </div>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder={placeholder}
                aria-label={placeholder}
                className={`${sizeClasses[size]} border dark:border-none p-2 pl-10 leading-6 rounded-lg w-full text-sm md:text-base text-gray-800 dark:text-gray-300 bg-white dark:bg-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-gray-700 `}
                {...inputProps}
            />
        </div>
    );
};

SearchBar.displayName = "SearchBar";
export default SearchBar;
