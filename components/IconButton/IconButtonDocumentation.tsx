import React from 'react';

const IconButtonDocumentation = () => {
  return (
    <>
      {/* Props Table Section */}
      <section className="my-5">
        <div className="flex flex-col mb-4">
          <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Props</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5">
            <table className="min-w-full">
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
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">icon</td>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">ElementType</td>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The icon component to display inside the button.</td>
                </tr>
                <tr>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onClick</td>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">function</td>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The function to call when the button is clicked.</td>
                </tr>
                <tr>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">aria-label</td>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The ARIA label for the button, used to improve accessibility.</td>
                </tr>
                <tr>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional class names for custom styling.</td>
                </tr>
                <tr>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">iconClassName</td>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional class names for styling the icon.</td>
                </tr>
                <tr>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">variant</td>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">{`"contained" | "outlinedBorder" | "outlinedNoBorder"`}</td>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">{`"contained"`}</td>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The variant of the button, determining its style.</td>
                </tr>
                <tr>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">size</td>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">{`"sm" | "md" | "lg"`}</td>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">{`"md"`}</td>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The size of the button.</td>
                </tr>
                <tr>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">color</td>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                  <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Custom color for the button.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* Best Practices Section */}
      <section>
        <div className="flex flex-col mb-4">
          <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
          <ul className="list-decimal list-inside pl-5 space-y-2 text-gray-900 dark:text-gray-50">
            <li>Use clear and intuitive icons that represent the action they perform.</li>
            <li>Ensure sufficient color contrast between the icon and its background for readability.</li>
            <li>Icon buttons must use a system icon with a clear meaning.</li>
            <li>On hover, display a tooltip describing the button’s action (not the name of the icon).</li>
          </ul>
        </div>
      </section>
    </>
  );
};

IconButtonDocumentation.displayName = "IconButtonDocumentation";
export default IconButtonDocumentation;
