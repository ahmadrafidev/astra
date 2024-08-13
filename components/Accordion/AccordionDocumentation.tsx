import React from 'react';

const AccordionDocumentation = () => {
  return (
    <>
      {/* Props Table Section */}
      <section id="properties" className="my-5">
        <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-6">Props</h2>
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
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">children</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">ReactNode</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The AccordionItem components to be rendered.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Additional classes for styling the Accordion container.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">itemClassName</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Additional classes for styling each AccordionItem.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">border</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Border style for the accordion items.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">selectionMode</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">single, multiple</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">single</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Determines if multiple items can be open simultaneously.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">variant</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">default, split</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">default</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Determines the layout style of the accordion.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* Best Practices Section */}
      <section id="best-practices">
          <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
          <div className="space-y-4">
              <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3">
                  <li>Use accordions to organize content in a compact way, allowing users to expand sections as needed.</li>
                  <li>Ensure that the content of accordion items are descriptive and concise.</li>
                  <li>Use the multiple selection mode when users might need to compare information across different sections.</li>
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
