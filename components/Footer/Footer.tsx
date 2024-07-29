// components/Footer/Footer.tsx
'use client'

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col sm:flex-row py-6 w-full items-center px-4 md:px-12 bg-gray-50 dark:bg-black justify-between" aria-label="Main Footer">
            <p className="text-xs md:text-sm font-normal text-gray-600 dark:text-gray-300">
                Engineered with passion by <Link href="https://x.com/rafiwiranaa" passHref className="underline" aria-label="Visit Rafi's Twitter">Rafi</Link>.
            </p>
            <p className="text-xs md:text-sm font-normal text-gray-600 dark:text-gray-300" aria-label="Copyright Information">
                © 2024 AstraUI
            </p>
        </footer>
    );
};

Footer.displayName = "Footer";
export default Footer;
