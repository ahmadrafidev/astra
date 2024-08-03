// components/BottomNavigation/BottomNavigation.tsx
import React from 'react';
import Link from 'next/link';

export interface BottomNavigationProps {
    className?: string;
    items: { name: string; path: string }[];
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ items, className = '' }) => {
    return (
        <nav className={`flex text-gray-700 dark:text-gray-200 ${className}`} aria-label="BottomNavigation">
          <p>Bottom nav</p>
        </nav>
    );
};

BottomNavigation.displayName = "BottomNavigation";
export default BottomNavigation;
