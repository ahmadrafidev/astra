// components/Navbar/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-lg font-bold">My Website</div>
            <div className="space-x-4">
                <Link href="/" legacyBehavior>
                <a className="text-white hover:underline">Home</a>
                </Link>
                <Link href="/documentation" legacyBehavior>
                <a className="text-white hover:underline">Documentation</a>
                </Link>
                <Link href="/contact" legacyBehavior>
                <a className="text-white hover:underline">Contact</a>
                </Link>
            </div>
            </div>
        </nav>
    );
};

Navbar.displayName = "Navbar";
export default Navbar;
