import React from 'react';

const ProgressBarDocumentation = () => {
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
                        <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200 font-mono">Type</th>
                        <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Default</th>
                        <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">progress</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">number</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The current progress value.</td>
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
          <h2 className="text-2xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
          <div className="space-y-4">
              <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3">
                  <li>Ensure the progress bar is clearly visible and indicates progress accurately.</li>
                  <li>Use distinguishable colors to indicate progress.</li>
                  <li>Make sure the progress bar is accessible and usable via screen readers.</li>
              </ul>
          </div>
      </section>
    </>
  );
};

ProgressBarDocumentation.displayName = "ProgressBarDocumentation";
export default ProgressBarDocumentation;
