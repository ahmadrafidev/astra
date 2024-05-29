// pages/contact.tsx
import React from 'react';
import Header from '../../components/Header/Header';

export default function ContactPage() {
    return (
        <>
            <Header />
            <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-400">
                <a
                    href="https://x.com/ahmadrafiwirana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-100 hover:underline text-xl lg:text-2xl"
                >
                    Find me on X (fka Twitter)
                </a>
            </div>
        </>
    );
}
