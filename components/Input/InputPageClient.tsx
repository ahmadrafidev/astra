'use client';

import React, { useState } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { InformationCircleIcon, LockClosedIcon } from '@heroicons/react/24/outline';

import TOC from '@/components/TOC/TOC';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import Input from './Input';
import InputDocumentation from './InputDocumentation';

const InputPageClient: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [search, setSearch] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');

    const tocItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'usage', label: 'Usage' },
        { id: 'properties', label: 'Properties' },
        { id: 'best-practices', label: 'Best Practices' },
    ];

    const codeExample = `
    <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
        placeholder="name@email.com"
        hint="This is a hint text."
        className="max-w-md"
    />
    <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        placeholder="Enter your password"
        className="max-w-md"
    />
    `;

    return (
        <Layout>
            <div className="flex">
                <div className="w-4/5 pr-2">
                    <Badge text="Components" />
                    <div id="overview" className="flex flex-col mb-5 scroll-mt-16">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">Input</h1>
                        <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                            A field where users can enter data or information.
                        </p>
                    </div>

                    {/* Usage Section */}
                    <section id="usage" className="scroll-mt-20">
                        <Tabs>
                            <Tab label="Preview">
                                <div className="relative w-full overflow-hidden mt-4 rounded-lg bg-zinc-100 dark:bg-zinc-950 shadow border border-slate-300 dark:border-slate-800">
                                    <div className="p-6 space-y-4 flex flex-col justify-start items-start">
                                        {/* Email Input */}
                                        <div>
                                            <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-50">Default Input</h3>
                                            <Input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                label="Email"
                                                placeholder="name@email.com"
                                                hint="This is a hint text."
                                                className="max-w-md"
                                            />
                                        </div>
                                        {/* Email Input with Icon */}
                                        <div>
                                            <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-50">Input with Icon</h3>
                                            <Input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                label="Email with Icon"
                                                placeholder="name@email.com"
                                                hint="This is a hint text."
                                                icon={<InformationCircleIcon className="h-5 w-5 text-gray-400" />}
                                                className="max-w-md"
                                            />
                                        </div>
                                        {/* Email Input with Error */}
                                        <div>
                                            <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-50">Input with Error</h3>
                                            <Input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                label="Email with Error"
                                                placeholder="name@email.com"
                                                error="This is an error message."
                                                className="max-w-md"
                                            />
                                        </div>
                                        {/* Password Input */}
                                        <div>
                                            <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-50">Password Input</h3>
                                            <Input
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                label="Password"
                                                placeholder="Enter your password"
                                                className="max-w-md"
                                            />
                                        </div>
                                        {/* Password Input with Icon */}
                                        <div>
                                            <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-50">Password Input with Icon (Toggle Visibility)</h3>
                                            <Input
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                label="Password with Icon"
                                                placeholder="Enter your password"
                                                icon={<LockClosedIcon className="h-5 w-5 text-gray-400" />}
                                                className="max-w-md"
                                            />
                                        </div>
                                        {/* Disabled Input */}
                                        <div>
                                            <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-50">Disabled Input</h3>
                                            <Input
                                                type="text"
                                                value="Disabled Input"
                                                onChange={() => {}}
                                                label="Disabled"
                                                placeholder="This input is disabled"
                                                className="max-w-md"
                                                disabled
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab label="Code">
                                <div
                                    className="relative rounded-lg bg-gray-900 dark:bg-gray-800/90 mt-4"
                                    role="region"
                                    aria-label="Code Snippet in tsx"
                                >
                                    <div className="flex justify-between items-center px-4 py-2 border-b border-gray-800">
                                        <span className="text-sm font-medium text-gray-100">
                                            tsx
                                        </span>
                                    </div>
                                    <div className="overflow-auto rounded-lg border border-gray-800">
                                        <SyntaxHighlighter
                                            language="tsx"
                                            style={materialLight}
                                            showLineNumbers={false}
                                            wrapLongLines={true}
                                            customStyle={{
                                                margin: 1.5,
                                                borderRadius: '0.5rem 0.5rem 0.5rem 0.5rem',
                                                fontSize: '14px',
                                                lineHeight: '1.25',
                                                padding: '10px',
                                            }}
                                        >
                                            {codeExample}
                                        </SyntaxHighlighter>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </section>

                    <InputDocumentation />
                </div>
                <TOC items={tocItems} />
            </div>
        </Layout>
    );
};

InputPageClient.displayName = "InputPageClient";
export default InputPageClient;
