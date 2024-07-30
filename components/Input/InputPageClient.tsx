// app/components/input/InputPageClient.tsx
'use client';

import React, { useState } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Input from './Input';

const InputPageClient: React.FC = () => {
    const [value, setValue] = useState('');

    return (
        <Layout>
            <Badge text="Components" />
            <h1 className="text-2xl md:text-4xl font-medium mb-4 text-gray-900 dark:text-gray-50">Input</h1>
            <div className="space-y-6">
                <Input
                    type="email"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    label="Email"
                    placeholder="name@email.com"
                    hint="This is a hint text."
                    className="max-w-md"
                />
                <Input
                    type="email"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    label="Email"
                    placeholder="name@email.com"
                    hint="This is a hint text."
                    icon={<InformationCircleIcon className="h-5 w-5 text-gray-400" />}
                    className="max-w-md"
                />
                <Input
                    type="email"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    label="Email"
                    placeholder="name@email.com"
                    hint="This is a hint text."
                    className="max-w-md"
                />
                <Input
                    type="email"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    label="Email"
                    placeholder="name@email.com"
                    error="This is an error message."
                    className="max-w-md"
                />
            </div>
        </Layout>
    );
};

InputPageClient.displayName = "InputPageClient";
export default InputPageClient;
