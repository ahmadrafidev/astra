import React from 'react';

const BreadcrumbsDocumentation = () => (
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
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">items</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200 font-mono">{'BreadcrumbItem[]'}</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">-</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">Array of breadcrumb items to display.</td>
            </tr>
            <tr>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">className</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200 font-mono">string</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">empty</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">Additional classes for styling the breadcrumbs container.</td>
            </tr>
            <tr>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">separator</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200 font-mono">React.ReactNode</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">{'<ChevronRight />'}</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">Custom separator between breadcrumb items.</td>
            </tr>
            <tr>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">maxItems</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200 font-mono">number</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">0</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">Maximum number of items to display. 0 means no limit.</td>
            </tr>
            <tr>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">itemClassName</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200 font-mono">string</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">custom</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">Classes for styling individual breadcrumb items.</td>
            </tr>
            <tr>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">activeItemClassName</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200 font-mono">string</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">custom</td>
              <td className="border px-6 py-4 text-sm text-gray-700 dark:text-gray-200">Classes for styling the active (last) breadcrumb item.</td>
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
          <li>Use breadcrumbs to provide users with a clear navigational path, indicating their current location within the application‘s hierarchy.</li>
          <li>Ensure breadcrumb items are ordered correctly from highest (root) to lowest (current page) in the hierarchy.</li>
          <li>Provide concise, meaningful names for each breadcrumb item to aid in quick understanding of the navigation structure.</li>
          <li>Ensure sufficient color contrast between the breadcrumb text and background for better accessibility.</li>
        </ul>
      </div>
    </section>
  </>
);

export default BreadcrumbsDocumentation;