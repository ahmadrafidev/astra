/* eslint-disable react/no-unescaped-entities */

import React from 'react';

const CardDocumentation = () => (
  <>
    {/* Props Section */}
    <section className="my-5">
      <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Props</h2>
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="border px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase tracking-wider">Name</th>
              <th className="border px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase tracking-wider">Type</th>
              <th className="border px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase tracking-wider">Default</th>
              <th className="border px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase tracking-wider">Description</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">title</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200 font-mono">string</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">empty</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">The title of the card.</td>
            </tr>
            <tr>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">description</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200 font-mono">string</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">empty</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">The description content of the card.</td>
            </tr>
            <tr>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">imageSrc</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200 font-mono">string</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">empty</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">The URL of the image to display in the card.</td>
            </tr>
            <tr>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">imageWidth</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200 font-mono">number</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">300</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">The width of the image in the card.</td>
            </tr>
            <tr>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">imageHeight</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200 font-mono">number</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">200</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">The height of the image in the card.</td>
            </tr>
            <tr>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">imageAlt</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200 font-mono">string</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">empty</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">The alt text for the image.</td>
            </tr>
            <tr>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">variant</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200 font-mono">"default" | "hover" | "interactive"</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">"default"</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">The style variant of the card.</td>
            </tr>
            <tr>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">titleElement</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200 font-mono">"h2" | "h3" | "h4" | "h5" | "h6"</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">"h3"</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">The HTML element to use for the title.</td>
            </tr>
            <tr>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">className</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200 font-mono">string</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">empty</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">Additional classes for styling.</td>
            </tr>
            <tr>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">children</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200 font-mono">React.ReactNode</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">-</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">Additional content to display inside the card.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    {/* Best Practices Section */}
    <section className="my-8">
      <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
      <div className="space-y-4">
        <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3">
          <li>Use descriptive titles and concise descriptions to provide clear information.</li>
          <li>Ensure images are of high quality and relevant to the card content. Always provide meaningful alt text for accessibility.</li>
          <li>Group related information and actions within a card to maintain a cohesive structure.</li>
        </ul>
      </div>
    </section>
  </>
);

CardDocumentation.displayName = "CardDocumentation";
export default CardDocumentation;