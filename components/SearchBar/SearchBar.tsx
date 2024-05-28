// components/SearchBar/SearchBar.tsx
import React, { useState } from 'react';

export interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    };

    const handleSearch = () => {
    onSearch(query);
    };

    return (
    <div>
        <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="border p-2"
        />
        <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white">
        Search
        </button>
    </div>
    );
};

export default SearchBar;
