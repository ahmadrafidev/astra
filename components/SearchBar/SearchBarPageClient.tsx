'use client';

import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import SearchBar from './SearchBar';
import SearchBarDocumentation from './SearchBarDocumentation';

const SearchBarPageClient: React.FC = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (query: string) => {
        setQuery(query);
        console.log("Search query:", query);
    };

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">SearchBar</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    An input field for entering search queries to find specific content.
                </p>
            </div>
            <section className="max-w-md">
                <h2 className="text-lg md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Variants</h2>
                <div className="flex flex-col space-y-4"> 
                    <div>
                        <h3 className="text-lg md:text-xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-2">Default</h3>
                        <SearchBar onSearch={handleSearch}/>
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-2">With Custom Icon</h3>
                        <SearchBar 
                            onSearch={handleSearch} 
                            placeholder="SearchBar with Icon"
                            icon={<svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>}
                        />
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-2">With Debounce</h3>
                        <SearchBar onSearch={handleSearch} debounceTime={500} />
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-2">Small</h3>
                        <SearchBar onSearch={handleSearch} size="small" />
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-2">Medium</h3>
                        <SearchBar onSearch={handleSearch} size="medium" />
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-2">Large</h3>
                        <SearchBar onSearch={handleSearch} size="large" />
                    </div>
                </div>
                <p className="mt-4 text-lg md:text-xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-2">Current query: {query}</p>
            </section>
            <SearchBarDocumentation />
        </Layout>
    );
};

SearchBarPageClient.displayName = "SearchBarPageClient";
export default SearchBarPageClient;
