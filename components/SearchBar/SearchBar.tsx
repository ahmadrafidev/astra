// components/SearchBar/SearchBar.tsx
'use client'

import React, { useState } from 'react';

export interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    };

    const handleSearch = () => {
    onSearch(query);
    };

    return (
        <>
            <input
                
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search Components"
                className="border p-2 rounded-lg"
                />
        </>
    );
};

export default SearchBar;
