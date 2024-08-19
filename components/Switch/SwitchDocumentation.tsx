import React from 'react';

const SwitchDocumentation = () => {
  return (
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
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">checked</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">boolean</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">false</td>
                          <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Status of the switch.</td>
                      </tr>
                      <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">onChange</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">{'(state: boolean)'}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                          <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Function to call when the switch value changes.</td>
                      </tr>
                      <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                          <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Additional classes for styling the switch.</td>
                      </tr>
                      <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">ariaLabel</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                          <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Accessible label for the switch.</td>
                      </tr>
                      <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">disabled</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">boolean</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">false</td>
                          <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Disables the switch if true.</td>
                      </tr>
                      <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">size</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono text-wrap">small, medium, large</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">medium</td>
                          <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Size of the switch.</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </section>

      {/* Best Practices Section */}
      <section id="best-practices" className="my-5 scroll-mt-20">
          <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
          <div className="space-y-4">
              <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3">
                  <li>Use switches to toggle between two states.</li>
                  <li>Ensure the switch clearly indicates its current state.</li>
                  <li>Provide feedback to users when the state changes.</li>
                  <li>Consider using different colors to indicate different states.</li>
              </ul>
          </div>
      </section>
    </>
  );
};

SwitchDocumentation.displayName = "SwitchDocumentation";
export default SwitchDocumentation;
