// components/Breadcrumbs/Breadcrumbs.tsx
import React from 'react';
import Link from 'next/link';

export interface BreadcrumbsProps {
    className?: string;
    items: { name: string; path: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
    return (
        <nav className={`flex text-gray-700 dark:text-gray-200 ${className}`} aria-label="Breadcrumb">
            {items.map((item, index) => (
                <span key={item.path} className="flex items-center">
                    <Link href={item.path} className="hover:underline">
                        {item.name}
                    </Link>
                    {index < items.length - 1 && <span className="mx-2">/</span>}
                </span>
            ))}
        </nav>
    );
};

Breadcrumbs.displayName = "Breadcrumbs";
export default Breadcrumbs;
