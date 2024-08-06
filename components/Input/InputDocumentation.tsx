import React from 'react';

const InputDocumentation = () => {
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

InputDocumentation.displayName = "InputDocumentation";
export default InputDocumentation;
