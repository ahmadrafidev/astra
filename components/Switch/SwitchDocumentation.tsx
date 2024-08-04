import React from 'react';

const SwitchDocumentation = () => {
  return (
    <>
      {/* Props Section */}
      <section className="mb-10">
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
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">checked</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">boolean</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">false</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Status of the switch.</td>
                      </tr>
                      <tr>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onChange</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">{'(state: boolean) => void'}</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Function to call when the switch value changes.</td>
                      </tr>
                      <tr>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling the switch.</td>
                      </tr>
                      <tr>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">ariaLabel</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Accessible label for the switch.</td>
                      </tr>
                      <tr>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">disabled</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">boolean</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">false</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Disables the switch if true.</td>
                      </tr>
                      <tr>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">size</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">small, medium, large</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">medium</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Size of the switch.</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </section>
      {/* Best Practices Section */}
      <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
          <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">1. Use switches to toggle between two states.</p>
              <p className="text-gray-700 dark:text-gray-300">2. Ensure the switch clearly indicates its current state.</p>
              <p className="text-gray-700 dark:text-gray-300">3. Provide feedback to users when the state changes.</p>
              <p className="text-gray-700 dark:text-gray-300">4. Label the switch clearly, especially for accessibility.</p>
              <p className="text-gray-700 dark:text-gray-300">5. Ensure the switch is large enough to be easily tapped or clicked.</p>
              <p className="text-gray-700 dark:text-gray-300">6. Consider using different colors to indicate different states.</p>
          </div>
      </section>
    </>
  );
};

SwitchDocumentation.displayName = "SwitchDocumentation";
export default SwitchDocumentation;
