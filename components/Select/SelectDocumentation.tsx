import React from 'react';

const SelectDocumentation = () => {
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
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">value</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The currently selected value.</td>
                  </tr>
                  <tr>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onChange</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">{'function'}</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Function to call when the selected value changes.</td>
                  </tr>
                  <tr>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">options</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">Array&lt;SelectOption&gt;</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">placeholder</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Array of options to display in the select menu.</td>
                  </tr>
                  <tr>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling the select component.</td>
                  </tr>
                  <tr>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">label</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Label displayed above the component for context and guidance.</td>
                  </tr>
                  <tr>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">error</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Error message to display.</td>
                  </tr>
                  <tr>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">helpText</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Help text for additional information.</td>
                  </tr>
                  <tr>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">fullWidth</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">boolean</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">false</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">If true, the select component will take the full width of its container.</td>
                  </tr>
                  <tr>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">variant</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">{`'small' | 'medium' | 'large'`}</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">{`'medium'`}</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Size variant of the select component.</td>
                  </tr>
                  <tr>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">isClearable</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">boolean</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">false</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">If true, a clear button will be displayed to clear the selection.</td>
                  </tr>
                  <tr>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onClear</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">function</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Function to call when the clear button is clicked.</td>
                  </tr>
                  <tr>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">placeholder</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                      <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Placeholder text to display when no value is selected.</td>
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
              <li>Use the select component to allow users to choose from a list of options.</li>
              <li>Ensure options are clear and concise to avoid user confusion.</li>
              <li>Provide accessible labels and descriptions for the select component.</li>
              <li>Avoid disabling options unless necessary and always indicate why an option is disabled if possible.</li>
              <li>Provide helpful error messages and assistive text to guide users in making their selection.</li>
              <li>Implement searchable dropdowns for extensive lists to enhance user experience by quickly finding options.</li>
            </ul>
        </div>
      </section>
    </>
  );
};

SelectDocumentation.displayName = "SelectDocumentation";
export default SelectDocumentation;
