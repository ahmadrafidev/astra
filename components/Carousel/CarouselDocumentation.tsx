import React from 'react';

const CarouselDocumentation = () => (
  <>
    {/* Props Table Section */}
    <section id="properties" className="my-5 scroll-mt-20">
      <h2 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-50 mb-5">Props</h2>
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
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">images</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string[]</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">required</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Array of image URLs to display in the carousel.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Additional classes for custom styling.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">width</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">number</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">400</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Maximum width of the carousel in pixels.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">height</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">number</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">200</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Height of the carousel in pixels.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">autoPlay</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">boolean</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">false</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Whether the carousel should automatically cycle through slides.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">autoPlayInterval</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">number</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">3000</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Interval between slides in milliseconds, when autoPlay is true.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">showDots</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">boolean</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">true</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Whether to show navigation dots below the carousel.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">showArrows</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">boolean</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">true</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Whether to show navigation arrows on the sides of the carousel.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    {/* Best Practices Section */}
    <section id="best-practices" className="scroll-mt-20">
      <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
      <div className="space-y-4">
        <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3">
          <li>
            <strong>Image Quality:</strong> Use high-quality, optimized images to ensure clarity and visual appeal. Compress images appropriately to balance quality and load time.
          </li>
          <li>
            <strong>Content Moderation:</strong> Limit the number of images to avoid overwhelming the user. Aim for 3-7 slides for optimal engagement.
          </li>
          <li>
            <strong>Navigation:</strong> Provide clear navigation controls (arrows and dots) for users to move between slides. Ensure these controls are easily clickable on touch devices.
          </li>
          <li>
            <strong>Performance:</strong> If using autoPlay, consider pausing the rotation when the user interacts with the carousel to avoid frustration.
          </li>
        </ul>
      </div>
    </section>
  </>
);

CarouselDocumentation.displayName = 'CarouselDocumentation';
export default CarouselDocumentation;
