import React from 'react';

const SpinnerDocumentation = () => {
  return (
    <>
      {/* Props Section */}
      <section className="my-5">
        <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Props</h2>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow overflow-x-auto">
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
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">size</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">{`'sm' | 'md' | 'lg' | number`}</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">{`'md'`}</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The size of the spinner. Can be a predefined size or a custom number in pixels.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">color</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The color of the spinner. Can be any valid Tailwind CSS color class.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">thickness</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">number</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">4</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The thickness of the spinner‘s border in pixels.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">speed</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">{`'slow' | 'normal' | 'fast'`}</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">{`'normal'`}</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The animation speed of the spinner.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling the spinner.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">aria-label</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">{`'Spinner'`}</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Accessible label for the spinner.</td>
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
            <li>Use spinners to indicate loading or ongoing processes.</li>
            <li>Ensure the spinner is clearly visible and distinguishable.</li>
            <li>Provide an accessible label to describe the loading state.</li>
            <li>Choose an appropriate size for the context where the spinner is used.</li>
          </ul>
        </div>
      </section>
    </>
  );
};

SpinnerDocumentation.displayName = "SpinnerDocumentation";
export default SpinnerDocumentation;
