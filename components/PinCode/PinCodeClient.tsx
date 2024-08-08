'use client';

import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import PinCode from './PinCode';

const PinCodeClient: React.FC = () => {
    const [defaultPin, setDefaultPin] = useState<string[]>(new Array(6).fill(''));
    const [maskedPin, setMaskedPin] = useState<string[]>(new Array(6).fill(''));

    const handleDefaultPinComplete = (pin: string) => {
        console.log('Entered Default PIN:', pin);
    };

    const handleMaskedPinComplete = (pin: string) => {
        console.log('Entered Masked PIN:', pin);
    };

    const handleDefaultPinChange = (newPin: string[]) => {
        setDefaultPin(newPin);
    };

    const handleMaskedPinChange = (newPin: string[]) => {
        setMaskedPin(newPin);
    };

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">PIN Code</h1>
                <p className="texta-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A secure input for PIN codes or short numeric sequences.
                </p>
            </div>
            <section className="my-5 space-y-4">
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Variants</h2>
                <div>
                    <h3 className="text-lg md:text-xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Default PIN Code</h3>
                    <PinCode
                        className="flex justify-center" 
                        inputClassName="custom-input-class" 
                        isMask={false} 
                        onComplete={handleDefaultPinComplete} 
                        pin={defaultPin}
                        onPinChange={handleDefaultPinChange}
                    />
                </div>
                <div>
                    <h3 className="text-lg md:text-xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Masked PIN Code</h3>
                    <PinCode
                        className="flex justify-center" 
                        inputClassName="custom-input-class" 
                        isMask={true} 
                        onComplete={handleMaskedPinComplete} 
                        pin={maskedPin}
                        onPinChange={handleMaskedPinChange}
                    />
                </div>
            </section>
            {/* Props Section */}
            <section className="mb-10">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-6">Props</h2>
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
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">length</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">number</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">6</td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Number of digits in the PIN code.</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Custom class for the container.</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">inputClassName</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Custom class for each input box.</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">isMask</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">boolean</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">true</td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Whether the input should be masked.</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">onComplete</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">{`(pin: string) => void`}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Callback function when the PIN is completely entered.</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">pin</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string[]</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">[]</td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The current value of the PIN code as an array of strings.</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">onPinChange</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">{`(pin: string[]) => void`}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Callback function when the PIN code changes.</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </section>
            {/* Best Practices Section */}
            <section>
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                <div className="space-y-4">
                    <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3">
                        <li>Provide clear feedback to the user when the PIN is on progress and complete.</li>
                        <li>Ensure the input fields are clearly visible and accessible on both light and dark themes.</li>
                        <li>Validate the PIN input to ensure it meets the expected format and length.</li>
                        <li>Handle focus and blur events to enhance the user experience, especially on mobile devices.</li>
                        <li>Use masking for security, especially for sensitive PIN codes.</li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

PinCodeClient.displayName = "PinCodeClient";
export default PinCodeClient;
