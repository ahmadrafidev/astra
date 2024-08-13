'use client';

import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import PaymentCard from './PaymentCard';

const PaymentCardClient: React.FC = () => {

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Payment Card</h1>
                <p className="texta-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A form component for securely capturing and validating payment card details.
                </p>
            </div>
            <section className="my-5 space-y-4">
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Variants</h2>
                <div>
                    <h3 className="text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Default Card</h3>
                    <PaymentCard className="max-w-md"/>
                </div>
            </section>
            {/* Props Section */}
            <section className="my-5">
                <h2 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-50 mb-6">Props</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Type</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Default</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Description</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Empty</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Additional CSS classes for custom styling.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">onPaymentSuccess</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">{`() => void`}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">undefined</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Callback function to be called on successful payment.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">onPaymentError</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">{`(error: Error) => void`}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">undefined</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Callback function to be called on payment error.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">amount</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">number</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">undefined</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Amount to be paid. Used for displaying in the button text.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            {/* Best Practices Section */}
            <section className="my-5">
                <h2 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-50 mb-6">Best Practices</h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <ul className="list-decimal list-inside space-y-2">
                        <li>Ensure all sensitive data fields are secure and not exposed in the client-side code.</li>
                        <li>Validate all inputs on both client-side and server-side to prevent invalid data submission.</li>
                        <li>Use HTTPS to ensure all data transmissions are secure.</li>
                        <li>Handle errors gracefully and provide user feedback on what went wrong.</li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

PaymentCardClient.displayName = "PaymentCardClient";
export default PaymentCardClient;
