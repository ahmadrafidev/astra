/* eslint-disable react/no-unescaped-entities */

import React from 'react';

const AccordionDocumentation = () => {
  return (
    <>
      {/* Props Section */}
      <section className="my-5">
        <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Props</h2>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Accordion Props</h3>
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
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">children</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">ReactNode</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The AccordionItem components to be rendered.</td>
                    </tr>
                    <tr>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling the Accordion container.</td>
                    </tr>
                    <tr>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">itemClassName</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling each AccordionItem.</td>
                    </tr>
                    <tr>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">border</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Border style for the accordion items.</td>
                    </tr>
                    <tr>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">selectionMode</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">single, multiple</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">single</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Determines if multiple items can be open simultaneously.</td>
                    </tr>
                    <tr>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">variant</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">default, split</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">default</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Determines the layout style of the accordion.</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow mt-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">AccordionItem Props</h3>
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
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling individual AccordionItems.</td>
                    </tr>
                    <tr>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">title</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The title of the accordion item.</td>
                    </tr>
                    <tr>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">subtitle</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Optional subtitle for the accordion item.</td>
                    </tr>
                    <tr>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">children</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">ReactNode</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The content of the accordion item.</td>
                    </tr>
                    <tr>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">isOpen</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">boolean</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">false</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Determines if the item is expanded.</td>
                    </tr>
                    <tr>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onToggle</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">function</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">void</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Function to call when toggling the item.</td>
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
                  <li>Use accordions to organize content in a compact way, allowing users to expand sections as needed.</li>
                  <li>Ensure that the titles of accordion items are descriptive and concise.</li>
                  <li>Consider the user experience on both desktop and mobile devices, ensuring that the accordion is easy to interact with on all screen sizes.</li>
                  <li>Use the multiple selection mode when users might need to compare information across different sections.</li>
                  <li>Provide visual feedback for hover and focus states to improve usability, especially for keyboard navigation.</li>
                  <li>Consider using animations for expanding and collapsing to provide a smooth user experience, but ensure they are not too slow or distracting.</li>
                  <li>Use the split variant when you want to visually separate accordion items, especially for longer lists.</li>
              </ul>
          </div>
      </section>
    </>
  );
};

AccordionDocumentation.displayName="AccordionDocumentation"
export default AccordionDocumentation;