import React from 'react';

const SkeletonLoaderDocumentation = () => {
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
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">width</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">&quot;100%&quot;</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The width of the skeleton loader.</td>
                    </tr>
                    <tr>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">height</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">&quot;1rem&quot;</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The height of the skeleton loader.</td>
                    </tr>
                    <tr>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling the skeleton loader.</td>
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
                  <li>Use skeleton loaders to provide a visual indication of loading content.</li>
                  <li>Ensure the skeleton loader reflects the shape and size of the content it represents.</li>
                  <li>Provide accessible labels to describe the loading state.</li>
              </ul>
          </div>
      </section>
    </>
  );
};

SkeletonLoaderDocumentation.displayName = "SkeletonLoaderDocumentation";
export default SkeletonLoaderDocumentation;
