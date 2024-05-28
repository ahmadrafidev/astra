// components/Footer/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
    <footer className="bg-gray-800 p-4 mt-4">
        <div className="container mx-auto text-center text-white">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        <div className="mt-4">
            <a
            href="https://twitter.com/your_twitter_handle"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-blue-500 hover:underline"
            >
            Twitter
            </a>
            <a
            href="https://facebook.com/your_facebook_handle"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-blue-500 hover:underline"
            >
            Facebook
            </a>
            <a
            href="https://instagram.com/your_instagram_handle"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-blue-500 hover:underline"
            >
            Instagram
            </a>
        </div>
        </div>
    </footer>
    );
};

export default Footer;
