// components/Navbar/Navbar.tsx
import React from 'react';
import Link from 'next/link';

export interface NavbarLink {
    href: string;
    label: string;
}

export interface NavbarProps {
    title: string;
    links: NavbarLink[];
    className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ title, links, className = '' }) => {
    return (
        <nav className={`bg-gray-800 p-4 ${className}`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">{title}</div>
                <div className="space-x-4">
                    {links.map((link, index) => (
                        <Link key={index} href={link.href} legacyBehavior>
                            <a className="text-white hover:underline">{link.label}</a>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

Navbar.displayName = "Navbar";
export default Navbar;
