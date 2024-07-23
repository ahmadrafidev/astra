// app/foundations/screen-sizes/page.tsx

import React from 'react';
import { Metadata } from 'next';

import Layout from '../../../components/Layout/Layout';
import Badge from '../../../components/Badge/Badge';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Screen Sizes',
        description: 'Learn about the responsive design principles and screen size guidelines in AstraUI for Web, Android, and iOS.',
    };
}

const AstraScreenSizesPage: React.FC = () => {
    return (
        <Layout>
            <Badge text="Foundations" />
            <main>
                <h1 className="text-2xl md:text-4xl font-medium mb-4 text-gray-900 dark:text-gray-50">Screen sizes</h1>
                <div className="mb-8">
                    <section>
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
                    <section>
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
                    <section>
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
            </main>
        </Layout>
    );
};

export default AstraScreenSizesPage;
