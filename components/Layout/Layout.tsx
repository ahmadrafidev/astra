// components/Layout.tsx
import React from 'react';
import Link from 'next/link';
import { componentsList } from '../../utils/constants/route';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col md:flex-row">
            <aside className="w-full md:w-64 bg-gray-100 dark:bg-gray-900 h-screen md:h-auto p-4">
                <h2 className="text-xl font-bold mb-4">Components</h2>
                <ul>
                    {componentsList.map((component) => (
                        <li key={component.name} className="mb-2">
                            <Link href={component.path}>
                                {component.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
            <main className="flex-1 p-4 bg-white dark:bg-black overflow-y-auto h-screen md:h-auto">
                {children}
            </main>
        </div>
    );
};

export default Layout;
