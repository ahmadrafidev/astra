'use client';

import React from 'react';

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';
import NavigationBar, { NavLink } from '../../../components/Navbar/Navbar';
import ThemeToggle from '../../../components/ThemeToggle/ThemeToggle';

const links: NavLink[] = [
    { label: 'About', href: '/about', ariaLabel: 'About' },
    { label: 'Foundations', href: '/foundations', ariaLabel: 'Foundations' },
    { label: 'Components', href: '/components', ariaLabel: 'Components' },
];

const NavigationBarPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Components" />
            {/* Header Content */}
            <section className="mb-5">
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-3 md:mb-4">Navigation Bar</h1>
                    <p className="ext-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                        A navigation component typically displayed at the top of every website.
                    </p>
                </div>
            </section>
            {/* Navigation Bar Examples Section */}
            <section className="mb-5">
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Examples</h2>
                <NavigationBar
                    links={links}
                    hero={
                        <div className="flex items-center">
                            <p className="text-gray-900 text-2xl md:text-3xl font-semibold font-sans dark:text-white">AstraUI</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-gray-900 dark:text-gray-50">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                            </svg>
                        </div>
                    }
                    rightContent={<ThemeToggle />}
                />
            </section>
            {/* Props Table Section */}
            <section>
                <div className="flex flex-col mb-4">
                    <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Props</h2>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Name</th>
                                    <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Type</th>
                                    <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Default</th>
                                    <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">links</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">NavLink[]</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">[]</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Array of navigation links with label, href, and ariaLabel.</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">toggleSidebar</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">{`() => void`}</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">light</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Function to toggle the sidebar.</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">isSidebarOpen</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">boolean</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">false</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">State of the sidebar (open/close).</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">brand</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">React.ReactNode</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">null</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Brand element, can include logo or text.</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">string</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling.</td>
                                </tr>
                                <tr>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">rightContent</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">React.ReactNode</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">null</td>
                                    <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Content to be displayed on the right side of the navbar.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            {/* Best Practices Section */}
            <section>
                <div className="flex flex-col mb-4">
                    <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                        <li className="mb-2">Ensure navigation links are descriptive and provide clear indications of their destination.</li>
                        <li className="mb-2">Use ARIA labels for better accessibility.</li>
                        <li className="mb-2">Maintain consistency in the design of the navigation bar across different pages.</li>
                        <li className="mb-2">Include a visible focus state for interactive elements to improve accessibility.</li>
                        <li className="mb-2">Ensure the navigation bar is responsive and works well on different screen sizes.</li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

NavigationBarPage.displayName = "NavigationBarPage"
export default NavigationBarPage;
