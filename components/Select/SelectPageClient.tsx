'use client';

import React, { useState } from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Select from './Select';
import SelectDocumentation from './SelectDocumentation';

const SelectPageClient: React.FC = () => {
    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
    };
    
    const handleClear = () => {
        setValue('');
    };

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
    ];

    return (
        <Layout>
            <Badge text="Components" />
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Select</h1>
                <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A dropdown menu for choosing one option from a list of alternatives.
                </p>
            </div>
            <section className="mb-5">
                <h2 className="text-lg md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Variants</h2>
                <div className="space-y-4 flex flex-col justify-around">
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Base Model
                        </h3>
                        <Select
                            label="Choose an option"
                            value={value}
                            onChange={handleChange}
                            options={options}
                            helpText="Select one of the available options"
                            variant="medium"
                            isClearable={true}
                            onClear={handleClear}
                            placeholder="Choose one only"
                        />
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Small Model
                        </h3>
                        <Select
                            value={value}
                            onChange={handleChange}
                            options={options}
                            helpText="Select one of the available options"
                            variant="small"
                            isClearable={true}
                            onClear={handleClear}
                            placeholder="Choose one only"
                        />
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Large Model
                        </h3>
                        <Select
                            value={value}
                            onChange={handleChange}
                            options={options}
                            helpText="Select one of the available options"
                            variant="large"
                            isClearable={true}
                            onClear={handleClear}
                            placeholder="Choose one only"
                        />
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
                            Full Width Model
                        </h3>
                        <Select
                            value={value}
                            onChange={handleChange}
                            options={options}
                            helpText="Select one of the available options"
                            variant="medium"
                            isClearable={true}
                            onClear={handleClear}
                            placeholder="Choose one only"
                            fullWidth
                        />
                    </div>
                </div>
            </section>
            <SelectDocumentation/>
        </Layout>
    );
};

SelectPageClient.displayName = "SelectPageClient";
export default SelectPageClient;
