import React from 'react';
import { Metadata } from 'next';

import Layout from '@/components/Layout/Layout';
import Badge from '@/components/Badge/Badge';
import { Alert, AlertTitle, AlertContent } from '@/components/Alert/Alert';
import TOC from '@/components/TOC/TOC';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Screen Sizes',
        description: 'Learn about the responsive design principles and screen size guidelines in AstraUI for Web, Android, and iOS.',
    };
}

const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'web', label: 'Web' },
    { id: 'android', label: 'Android' },
    { id: 'ios', label: 'iOS' },
];

const AstraScreenSizesPage: React.FC = () => {
    return (
        <Layout>
            <main>
                <div className="flex">
                    <div className="w-full md:w-4/5 pr-4">
                        <Badge text="Foundations" />
                        <Alert 
                            type="info" 
                            isDismissible={false} 
                            className="my-2 p-4"
                        >
                            <AlertTitle>Under Development</AlertTitle>
                            <AlertContent>
                                This page is currently being updated. Some information may be incomplete or subject to change.
                            </AlertContent>
                        </Alert>
                        <h1 id="overview" className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50 scroll-mt-20">Screen sizes</h1>
                        <div className="mb-8">
                            <section id="web" className="scroll-mt-20">
                                <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Web</h2>
                                <p className="text-sm md:text-base font-sans font-normal text-gray-900 dark:text-gray-50 mb-4">
                                    For web design, it is important to consider various screen sizes to ensure a responsive layout.
                                </p>
                                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 mb-8">
                                    <table className="min-w-full">
                                        <thead>
                                            <tr>
                                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Device Type</th>
                                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Width (px)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Small devices (mobile)</td>
                                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">320 - 480</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Medium devices (tablets)</td>
                                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">481 - 768</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Large devices (desktops)</td>
                                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">769 - 1024</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Extra large devices (large desktops)</td>
                                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">1025 and up</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                            <section id="android" className="scroll-mt-20">
                                <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">Android</h2>
                                <p className="text-sm md:text-base font-sans font-normal text-gray-900 dark:text-gray-50 mb-4">
                                    Android devices come in a variety of screen sizes and densities. 
                                    Use dp (density-independent pixels) for defining dimensions and sp (scale-independent pixels) for text sizes to ensure consistency across different screens.
                                </p>
                                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 mb-8">
                                    <table className="min-w-full">
                                        <thead>
                                            <tr>
                                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Size Category</th>
                                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Dimensions (dp)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Small</td>
                                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">320 x 426</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Normal</td>
                                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">360 x 640</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Large</td>
                                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">480 x 800</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">X-Large</td>
                                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">720 x 1280</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                            <section id="ios" className="scroll-mt-20">
                                <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">iOS</h2>
                                <p className="text-sm md:text-base font-sans font-normal text-gray-900 dark:text-gray-50 mb-4">
                                    iOS devices also come in a range of sizes. Apple&apos;s Human Interface Guidelines provide detailed information on designing for different iOS devices.
                                </p>
                                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 mb-8">
                                    <table className="min-w-full">
                                        <thead>
                                            <tr>
                                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Size Category</th>
                                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Dimensions (pt)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Small</td>
                                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">320 x 568</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Phone</td>
                                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">375 x 812</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Tablet</td>
                                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">768 x 1024</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </div>
                    </div>
                    <TOC className="hidden md:block" items={tocItems} />
                </div>
            </main>
        </Layout>
    );
};

AstraScreenSizesPage.displayName = "AstraScreenSizesPage";
export default AstraScreenSizesPage;
