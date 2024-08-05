import React from 'react';

const ToggleDocumentation = () => {
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
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">children</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">ReactNode</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The content inside the toggle button.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling the toggle button.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">ariaLabel</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Accessible label for the toggle button.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onIcon</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">ReactNode</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Icon to display when the toggle is on.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">offIcon</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">ReactNode</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Icon to display when the toggle is off.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onChange</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">(state: boolean) =&gt; void</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Callback function called when the toggle state changes.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">defaultOn</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">boolean</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">false</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Initial state of the toggle button.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onClassName</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Classes to apply when the toggle is on.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">offClassName</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Classes to apply when the toggle is off.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">iconClassName</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Classes to apply to the icon.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">hideOffIcon</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">boolean</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">false</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Hide the icon when the toggle is off.</td>
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
                  <li>Use toggle buttons to switch between two states.</li>
                  <li>Ensure the button clearly indicates its current state.</li>
                  <li>Provide feedback to users when the state changes.</li>
                  <li>Customize the styles and icons to match your application design.</li>
              </ul>
          </div>
      </section>
    </>
  );
};

ToggleDocumentation.displayName = "ToggleDocumentation";
export default ToggleDocumentation;
