'use client';

import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Radio from './Radio';
import RadioDocumentation from './RadioDocumentation';

const RadioPageClient: React.FC = () => {

    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const handleChange = (value: string | null) => {
        setSelectedValue(value);
        console.log("Selected value:", value);
    };

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5"> 
                <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Radio</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A radio input allowing users to select a single option from a number of choices.
                </p>
            </div>
            <section className="mb-5">
                <h2 className="text-lg md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Variants</h2>
                <div className="space-y-4 flex flex-col justify-around">
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Base Radio
                        </h3>
                        <Radio
                            name="example"
                            value="Option1"
                            checked={selectedValue === 'Option1'}
                            onChange={handleChange}
                            label="Option 1"
                            className="my-4"
                        />
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Radio with Description
                        </h3>
                        <Radio
                            name="example"
                            value="Option2"
                            checked={selectedValue === 'Option2'}
                            onChange={handleChange}
                            label="Option 2"
                            description="This is a description"
                            className="my-4"
                        />   
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Disable Radio
                        </h3>
                        <Radio
                            name="example"
                            value="Option3"
                            checked={selectedValue === 'Option3'}
                            onChange={handleChange}
                            label="Option 3 (Disabled)"
                            description="This option is disabled"
                            disabled
                            className="my-4"
                        />
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Error Radio
                        </h3>
                        <Radio
                            name="example"
                            value="Option4"
                            checked={selectedValue === 'Option4'}
                            onChange={handleChange}
                            label="Option 4 (With Error)"
                            error="This is an error message"
                            className="my-4"
                        />
                    </div>
                </div>
            </section>
            <p className="mt-4 text-gray-900 dark:text-gray-50">Selected value: {selectedValue}</p>
            <RadioDocumentation />
        </Layout>
    );
};

RadioPageClient.displayName = "RadioPageClient";
export default RadioPageClient;
