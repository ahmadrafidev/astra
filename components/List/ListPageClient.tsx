'use client';

import React from 'react';
import { ShoppingCart, Star, Heart } from 'lucide-react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import { List, ListItem } from './List';
import ListDocumentation from './ListDocumentation';

const ListPageClient: React.FC = () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">List</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A component for displaying multiple items with customizable styling and optional item icons.
                </p>
            </div>
            <section className="mb-5">
                <h2 className="text-lg md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Variants</h2>
                <div className="space-y-4 flex flex-col justify-around">
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Unordered List
                        </h3>
                        <List 
                            items={[ 
                                { content: 'Apple' }, 
                                { content: 'Banana' }, 
                                { content: 'Cherry' }
                            ]} 
                            variant="unordered" 
                            className="text-gray-900 dark:text-gray-50"
                        />
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Unordered List with Icons
                        </h3>
                        <List
                            items={[
                            { content: 'Shopping List', icon: <ShoppingCart /> },
                            { content: 'Favorites', icon: <Star /> },
                            { content: 'Wishlist', icon: <Heart /> },
                            ]}
                            variant="unordered" 
                            iconClassName="text-blue-600 dark:text-blue-500"
                        />
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Ordered List
                        </h3>  
                        <List variant="ordered" className="text-gray-900 dark:text-gray-50">
                            <ListItem>First item</ListItem>
                            <ListItem>Second item</ListItem>
                            <ListItem>Third item</ListItem>
                        </List>
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Ordered List with Icons
                        </h3>  
                        <List variant="ordered" className="text-blue-600 dark:text-blue-500">
                            <ListItem icon={<ShoppingCart />}>Shopping List</ListItem>
                            <ListItem icon={<Star />}>Favorites</ListItem>
                            <ListItem icon={<Heart />}>Wishlist</ListItem>
                        </List>
                    </div>
                </div>
            </section>
            <ListDocumentation />
        </Layout>
    );
};

ListPageClient.displayName = "ListPageClient";
export default ListPageClient;
