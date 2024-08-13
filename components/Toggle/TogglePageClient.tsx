'use client';

import React from 'react';
import { Check, X, Wifi } from 'lucide-react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Toggle from './Toggle';
import ToggleDocumentation from './ToggleDocumentation';

const TogglePageClient: React.FC = () => {

    const handleToggleChange = (state: boolean) => {
        console.log("Toggle is now", state ? "On" : "Off");
    };

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Toggle</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A button that switches between two states when clicked.
                </p>
            </div>
            <section className="mb-5">
                <h2 className="text-lg md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Variants</h2>
                <div className="space-y-3 flex flex-col justify-around">
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Default Toggle
                        </h3>
                        <Toggle 
                            ariaLabel="Toggle switch"
                            className="max-w-md px-4 py-2 border rounded-lg"
                            onIcon={<Check />}
                            offIcon={<X />}
                            onClassName="bg-gray-100 text-gray-900"
                            offClassName="bg-gray-100 text-gray-900"
                            onChange={handleToggleChange}
                            defaultOn={false}
                        />
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Mode Toggle
                        </h3>
                        <Toggle 
                            ariaLabel="Toggle switch"
                            className="max-w-md px-4 py-2 border rounded-lg"
                            onIcon={<Wifi />}
                            offIcon={<Wifi />}
                            onChange={handleToggleChange}
                            defaultOn={false}
                            onClassName="bg-blue-500 text-white"
                            offClassName="bg-gray-100 text-gray-900"
                            iconClassName="h-6 w-6"
                            hideOffIcon={false}
                        />
                    </div>
                </div>
            </section>
            <ToggleDocumentation/>
        </Layout>
    );
};

TogglePageClient.displayName = "TogglePageClient";
export default TogglePageClient;
