'use client';

import React from 'react';
import { ShoppingCart, Star, Heart } from 'lucide-react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import { List, ListItem } from './List';

const ListPageClient: React.FC = () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">List</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A component for displaying multiple items in a vertical or horizontal arrangement.
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
                            className="fruit-list"
                        />
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Unordered List with Icons
                        </h3>
                        <List
                            items={[
                            { content: 'Shopping List', icon: ShoppingCart },
                            { content: 'Favorites', icon: Star },
                            { content: 'Wishlist', icon: Heart },
                            ]}
                            variant="unordered" 
                            iconClassName="text-blue-600"
                        />
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Ordered List
                        </h3>  
                        <List variant="ordered" className="custom-list-class">
                            <ListItem>First item</ListItem>
                            <ListItem>Second item</ListItem>
                            <ListItem>Third item</ListItem>
                        </List>
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Ordered List with Icons
                        </h3>  
                        <List variant="ordered" className="custom-list-class">
                            <ListItem icon={ShoppingCart}>Shopping List</ListItem>
                            <ListItem icon={Star}>Favorites</ListItem>
                            <ListItem icon={Heart}>Wishlist</ListItem>
                        </List>
                    </div>
                </div>
            </section>
            <section className="mb-10">
                <h2 className="text-2xl md:text-3xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Props</h2>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow">
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr>
                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Name</th>
                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Type</th>
                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Default</th>
                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">items</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">React.ReactNode[]</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Array of items to be displayed in the list.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling the list.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            {/* Best Practices Section */}
            <section>
                <h2 className="text-2xl md:text-3xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                <div className="space-y-4">
                    <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3">
                        <li>Use lists to group related items and improve readability.</li>
                        <li>Ensure list items are clearly distinguishable and visually separated.</li>
                        <li>Avoid overloading lists with too many items; break them into smaller groups if necessary.</li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

ListPageClient.displayName = "ListPageClient";
export default ListPageClient;
