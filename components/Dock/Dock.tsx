import React from 'react';
import Link from 'next/link';
import { Home, Pen, Github, Linkedin, Twitter, Mail, Sun } from 'lucide-react';

export interface DockProps {
    className?: string;
}

const Dock: React.FC<DockProps> = ({ className }) => {
    const iconSize = 24;

    return (
        <div className={`max-w-fit flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg p-2 ${className}`} aria-label="Dock">
            <Link href="/" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <Home size={iconSize} />
            </Link>
            <Link href="/edit" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <Pen size={iconSize} />
            </Link>
            <Link href="https://github.com" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <Github size={iconSize} />
            </Link>
            <Link href="https://linkedin.com" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <Linkedin size={iconSize} />
            </Link>
            <Link href="https://twitter.com" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <Twitter size={iconSize} />
            </Link>
            <Link href="/contact" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <Mail size={iconSize} />
            </Link>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <Sun size={iconSize} />
            </button>
        </div>
    );
};

Dock.displayName = "Dock";
export default Dock;