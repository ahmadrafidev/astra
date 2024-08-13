'use client';

import React, { useState } from 'react';
import { Home, Pen, Github, Linkedin, Twitter, Mail, Sun, Moon } from 'lucide-react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Dock from './Dock';

const items = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/edit', icon: Pen, label: 'Edit' },
    { href: 'https://github.com', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
    { href: '/contact', icon: Mail, label: 'Contact' },
];

const DockClient: React.FC = () => {

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Dock</h1>
                <p className="texta-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A dynamic hub for effortless access and intuitive navigation.
                </p>
            </div>
            <div className="relative w-full h-64 mb-8 overflow-hidden rounded-lg bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600">
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <Dock 
                        items={items}
                        dockWidth="400px"
                        dockHeight="60px"
                        variant="glassmorphism"
                    />
                </div>
            </div>
            {/* Props Section */}
            <section className="my-5">
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Props</h2>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow">
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr>
                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Name</th>
                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200 font-mono">Type</th>
                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Default</th>
                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </section>
            {/* Best Practices Section */}
            <section>
                <h2 className="text-2xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                <div className="space-y-4">
                    <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3">
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

DockClient.displayName = "DockClient";
export default DockClient;
