'use client';

import React from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';
import Tooltip from './Tooltip';

const TooltipPageClient: React.FC = () => {
    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Tooltip</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A small pop-up box that provides additional information about an element.
                </p>
            </div>
            <section className="mb-5">
                <h2 className="text-lg md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Variants</h2>
                <div className="space-y-3 flex flex-col justify-around">
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Default Tooltip
                        </h3>
                        <Tooltip text="Default tooltip">
                        <button className="px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-black rounded-lg shadow-sm hover:bg-gray-800 dark:hover:bg-gray-200">
                            Default Tooltip
                        </button>
                    </Tooltip>
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">Arrow Tooltip</h3>
                        <Tooltip text="Arrow tooltip" variant="arrow">
                        <button className="px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-black rounded-lg shadow-sm hover:bg-gray-800 dark:hover:bg-gray-200">
                            Arrow Tooltip
                        </button>
                    </Tooltip>
                    </div>
                </div>
            </section>
            {/* Props Section */}
            <section className="my-5">
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Props</h2>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow">
                    <table className="min-w-full table-auto">
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
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">children</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">ReactNode</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The content that triggers the tooltip on hover or focus.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">text</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The text content of the tooltip. Keep it concise for better readability.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling the tooltip wrapper.</td>
                            </tr>
                            <tr>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">variant</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">default, arrow</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">default</td>
                                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Specifies the visual style of the tooltip.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            {/* Best Practices Section */}
            <section>
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">1. Use tooltips to provide additional information about an element when the user hovers over it or focuses on it with keyboard navigation.</p>
                    <p className="text-gray-700 dark:text-gray-300">2. Ensure the tooltip content is concise and informative. Aim for 1-2 short sentences or phrases.</p>
                    <p className="text-gray-700 dark:text-gray-300">3. Make tooltips accessible by ensuring they work with keyboard navigation and are compatible with screen readers (use aria-describedby attribute).</p>
                    <p className="text-gray-700 dark:text-gray-300">4. Position tooltips consistently throughout your application and ensure they do not obscure important content.</p>
                    <p className="text-gray-700 dark:text-gray-300">5. Add a small delay (200-300ms) before showing the tooltip to prevent accidental triggers during rapid mouse movements.</p>
                    <p className="text-gray-700 dark:text-gray-300">6. Use the arrow variant when you need to clearly indicate which element the tooltip refers to.</p>
                    <p className="text-gray-700 dark:text-gray-300">7. Avoid using tooltips for critical information that users need to complete a task. Consider inline help text or expandable sections for more complex explanations.</p>
                    <p className="text-gray-700 dark:text-gray-300">8. Test tooltips across different browsers and devices to ensure consistent behavior and visibility.</p>
                </div>
            </section>
        </Layout>
    );
};

TooltipPageClient.displayName = "TooltipPageClient";
export default TooltipPageClient;
