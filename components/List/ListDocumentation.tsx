import React from 'react';

const ListDocumentation = () => {
  return (
    <>
      {/* Props Section */}
      <section className="my-5">
        <h2 className="text-2xl md:text-3xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Props</h2>
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
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">items</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">Array&lt;{`{ content: React.ReactNode, icon?: React.ReactNode }`}&gt;</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Array of items to be displayed in the list. Each item can have content and an optional icon.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">variant</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">{`"ordered" | "unordered"`}</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">{`"unordered"`}</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Determines whether the list is ordered (ol) or unordered (ul).</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling the list.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">iconClassName</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling the icons.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* Best Practices Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
        <div className="space-y-4">
          <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3">
            <li>Use lists to group related items and improve readability.</li>
            <li>Ensure list items are clearly distinguishable and visually separated.</li>
            <li>Avoid overloading lists with too many items; break them into smaller groups if necessary.</li>
            <li>Utilize icons to visually enhance the list items and provide context.</li>
          </ul>
        </div>
      </section>
    </>
  );
};

ListDocumentation.displayName = "ListDocumentation";
export default ListDocumentation;
