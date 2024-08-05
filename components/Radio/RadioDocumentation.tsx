import React from 'react';

const RadioDocumentation = () => {
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
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">checked</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">boolean</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Whether the radio button is checked.</td>
                      </tr>
                      <tr>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onChange</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">{'(e: React.ChangeEvent<HTMLInputElement>) => void'}</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Callback function to handle change events.</td>
                      </tr>
                      <tr>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">label</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Label text for the radio button.</td>
                      </tr>
                      <tr>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">name</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Name attribute for the radio button group.</td>
                      </tr>
                      <tr>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">value</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Value attribute for the radio button.</td>
                      </tr>
                      <tr>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling.</td>
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
                  <li>Use radio buttons when the user needs to select one option from a group.</li>
                  <li>Ensure that radio buttons are clearly labeled and grouped logically.</li>
                  <li>Provide a default selection whenever possible.</li>
                  <li>Make sure radio buttons are accessible and usable via keyboard navigation.</li>
              </ul>
          </div>
      </section>
    </>
  );
};

RadioDocumentation.displayName = "RadioDocumentation";
export default RadioDocumentation;
