// components/SearchBar/SearchBar.tsx
'use client'

import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export interface SearchBarProps {
    onSearch: (query: string) => void;
    className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, className }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    };

    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search AstraUI"
                aria-label="Search AstraUI"
                className="border dark:border-none py-2 pl-10 leading-6 rounded-lg w-full text-sm md:text-base text-gray-800 dark:text-gray-300 bg-white dark:bg-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-gray-700"
            />
        </div>
    );
};

SearchBar.displayName = "SearchBar";
export default SearchBar;
