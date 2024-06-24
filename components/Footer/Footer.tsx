// components/Footer/Footer.tsx
'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-800">
            <p className="text-xs text-gray-900 dark:text-gray-200">© 2024 Astra UI</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <Link href="https://x.com/ahmadrafiwirana" passHref>
                    <Image src="/icons/twitter.png" alt="X Icon" width={20} height={20} />
                </Link>
                <Link href="https://github.com/ahmadrafidev/astra" passHref>
                    <Image src="/icons/github.png" alt="GitHub Icon" width={20} height={20} />
                </Link>
            </nav>
        </footer>
    );
};

export default Footer;
