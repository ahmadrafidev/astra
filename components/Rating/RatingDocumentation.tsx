import React from 'react';

const RatingDocumentation = () => {
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
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">maxRating</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">number</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">5</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The maximum rating value.</td>
                      </tr>
                      <tr>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">defaultRating</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">number</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">0</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">The initial rating value.</td>
                      </tr>
                      <tr>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onRate</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">{'(rating: number | null) => void'}</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Callback function to handle rating changes.</td>
                      </tr>
                      <tr>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">size</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">{`'sm' | 'md' | 'lg'`}</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">{`'md'`}</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Size of the rating stars.</td>
                      </tr>
                      <tr>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">readOnly</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">boolean</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">false</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">If true, the rating cannot be changed.</td>
                      </tr>
                      <tr>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">icon</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">React.ReactNode</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">{'Star Icon'}</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Custom icon for rating stars.</td>
                      </tr>
                      <tr>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">activeColor</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">{`yellow`}</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Color of active (filled) stars.</td>
                      </tr>
                      <tr>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">inactiveColor</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">{`gray`}</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Color of inactive (unfilled) stars.</td>
                      </tr>
                      <tr>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling.</td>
                      </tr>
                      <tr>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">label</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">{`Rating Component`}</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Accessible label for the rating component.</td>
                      </tr>
                      <tr>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">allowClear</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">boolean</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">false</td>
                          <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">If true, allows clearing the rating by clicking the active star again.</td>
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
                  <li>Ensure the rating component is easy to use and accessible to all users, including keyboard navigation.</li>
                  <li>Provide immediate visual feedback to users as they interact with the rating component.</li>
                  <li>Keep the interface intuitive and easy to use.</li>
                  <li>Maintain consistency with overall design system.</li>
                  <li>Allow for customization to fit various design needs.</li>
              </ul>
          </div>
      </section>
    </>
  );
};

RatingDocumentation.displayName = "RatingDocumentation";
export default RatingDocumentation;
