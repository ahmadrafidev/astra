'use client';

import React, { useState } from 'react';
import { InformationCircleIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';

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

  return (
    <Layout>
      <Badge text="Components" />
      <div className="flex flex-col mb-5">
        <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-gray-50">Input</h1>
        <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
          A field where users can enter data or information.
        </p>
      </div>

      {/* Variants Input */}
      <section className="mb-5">
        <h2 className="text-lg md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Variants</h2>
        <div className="space-y-4 flex flex-col justify-around">
          {/* Email Input */}
          <div>
            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
              Default Input
            </h3>
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
            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
              Input with Icon
            </h3>
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
            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
              Input with Error
            </h3>
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
            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
              Password Input
            </h3>
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
            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
              Password Input with Icon
            </h3>
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
            <h3 className="text-base md:text-lg font-medium font-sans text-gray-900 dark:text-gray-50 mb-2 md:mb-3">
              Disabled Input
            </h3>
            <Input
              type="text"
              value="Disabled Input"
              onChange={() => {}}
              label="Disabled"
              placeholder="This input is disabled"
              className="max-w-md"
              disabled={true}
            />
          </div>
        </div>
      </section>
      <InputDocumentation />
    </Layout>
  );
};

InputPageClient.displayName = "InputPageClient";
export default InputPageClient;
