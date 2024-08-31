import React from 'react';

const BreadcrumbsDocumentation = () => (
  <>
    {/* Props Section */}
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
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">items</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">{'BreadcrumbItem[]'}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Array of breadcrumb items to display.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Additional classes for styling the breadcrumbs container.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">separator</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">React.ReactNode</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{`React Icon`}</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Custom separator between breadcrumb items.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">maxItems</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">number</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">0</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Maximum number of items to display. 0 means no limit.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">itemClassName</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">custom</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Classes for styling individual breadcrumb items.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">activeItemClassName</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">custom</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Classes for styling the active (last) breadcrumb item.</td>
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
          <li>Use breadcrumbs to provide users with a clear navigational path, indicating their current location within the application‘s hierarchy.</li>
          <li>Ensure breadcrumb items are ordered correctly from highest (root) to lowest (current page) in the hierarchy.</li>
          <li>Provide concise, meaningful names for each breadcrumb item to aid in quick understanding of the navigation structure.</li>
          <li>Ensure sufficient color contrast between the breadcrumb text and background for better accessibility.</li>
        </ul>
      </div>
    </section>
  </>
);

BreadcrumbsDocumentation.displayName = "BreadcrumbsDocumentation";
export default BreadcrumbsDocumentation;
