/* eslint-disable react/no-unescaped-entities */

import React from 'react';

const ErrorDocumentation = () => {
  return (
    <>
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
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">type</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">ErrorType</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Type of error to display.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">title</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Title of the error message.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">message</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The error message to display.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">primaryAction</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">{`{ label: string, onClick: () => void }`}</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">void</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Primary action for the error message.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">secondaryAction</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">{`{ label: string, onClick: () => void }`}</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">void</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Secondary action for the error message (optional).</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* Best Practices Section */}
      <section className="my-5">
        <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">1. Use clear and concise error messages.</p>
          <p className="text-gray-700 dark:text-gray-300">2. Provide a retry button for recoverable errors.</p>
          <p className="text-gray-700 dark:text-gray-300">3. Ensure the error message is accessible and noticeable.</p>
          <p className="text-gray-700 dark:text-gray-300">4. Use appropriate colors to indicate error states.</p>
        </div>
      </section>
    </>
  );
};

ErrorDocumentation.displayName = "ErrorDocumentation";
export default ErrorDocumentation;
