import React from 'react';

const SpinnerDocumentation = () => {
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
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">size</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono text-wrap">{`'sm' | 'md' | 'lg' | number`}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{`'md'`}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The size of the spinner. Can be a predefined size or a custom number in pixels.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">color</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The color of the spinner. Can be any valid Tailwind CSS color class.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">thickness</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">number</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">4</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The thickness of the spinner‘s border in pixels.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">speed</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono text-wrap">{`'slow' | 'normal' | 'fast'`}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{`'normal'`}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The animation speed of the spinner.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Additional classes for styling the spinner.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">aria-label</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{`'Spinner'`}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Accessible label for the spinner.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Best Practices Section */}
      <section id="best-practices" className="scroll-mt-20">
        <h2 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
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
