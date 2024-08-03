// components/BottomNavigation/BottomNavigation.tsx
import React from 'react';
import Link from 'next/link';

export interface KeyboardShortcutProps {
    className?: string;
}

const KeyboardShortcut: React.FC<KeyboardShortcutProps> = ({ className }) => {
    return (
        <nav className={`flex text-gray-700 dark:text-gray-200 ${className}`} aria-label="KeyboardShortcut">
            <p>KeyboardShortcut</p>
        </nav>
    );
};

KeyboardShortcut.displayName = "KeyboardShortcut";
export default KeyboardShortcut;
