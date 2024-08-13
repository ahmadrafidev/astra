'use client';

import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Switch from './Switch';
import SwitchDocumentation from './SwitchDocumentation';

const SwitchPageClient: React.FC = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    };

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Switch</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A toggle control for switching between two states.
                </p>
            </div>
            <section className="mb-5">
                <h2 className="text-lg md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Variants</h2>
                <div className="space-y-3 flex flex-col justify-around">
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Default Switch
                        </h3>
                        <Switch 
                            checked={checked} 
                            onChange={handleChange} 
                            ariaLabel="Toggle switch"
                            className="max-w-md"
                        />
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Disabled Switch
                        </h3>
                        <Switch 
                            checked={checked} 
                            onChange={handleChange} 
                            ariaLabel="Toggle switch"
                            className="max-w-md"
                            disabled
                        />
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Small Switch
                        </h3>
                        <Switch 
                            checked={checked} 
                            onChange={handleChange} 
                            ariaLabel="Toggle switch"
                            className="max-w-md"
                            size="small"
                        />
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Medium Switch
                        </h3>
                        <Switch 
                            checked={checked} 
                            onChange={handleChange} 
                            ariaLabel="Toggle switch"
                            className="max-w-md"
                            size="medium"
                        />
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Large Switch
                        </h3>
                        <Switch 
                            checked={checked} 
                            onChange={handleChange} 
                            ariaLabel="Toggle switch"
                            className="max-w-md"
                            size="large"
                        />
                    </div>
                </div>
            </section>
            <SwitchDocumentation/>
        </Layout>
    );
};

SwitchPageClient.displayName = "SwitchPageClient";
export default SwitchPageClient;
