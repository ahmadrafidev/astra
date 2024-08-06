import React from 'react';

const InputDocumentation = () => {
  return (
    <>
      {/* Props Table Section */}
      <section className="my-5">
        <h2 className="text-2xl md:text-3xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Props</h2>
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
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">type</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">{`'text' | 'password' | 'email'`}</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">{`'text'`}</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">The type of input.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">value</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">string</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">N/A</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">The value of the input.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">onChange</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">{`(e: React.ChangeEvent<HTMLInputElement>) => void`}</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">N/A</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">The function to call when the input value changes.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">placeholder</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">string</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">N/A</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">The placeholder text for the input.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">label</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">string</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">N/A</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">The label for the input.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">hint</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">string</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">N/A</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">A hint for the input.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">error</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">string</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">N/A</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">An error message for the input.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">icon</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">React.ReactNode</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">N/A</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">An optional icon to display inside the input.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">className</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">string</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">empty</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">Additional class names for the wrapper div.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">inputClassName</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">string</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">empty</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">Additional class names for the input element.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">labelClassName</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">string</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">empty</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">Additional class names for the label.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">hintClassName</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">string</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">empty</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">Additional class names for the hint.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">errorClassName</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">string</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">empty</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">Additional class names for the error message.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">disable</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">boolean</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">false</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-50">Flag to disable the input.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* Best Practices Section */}
      <section>
        <div className="flex flex-col mb-4">
          <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
          <ul className="list-decimal list-inside pl-5 space-y-2 text-gray-900 dark:text-gray-50">
            <li>Use clear and intuitive icons that represent the action they perform.</li>
            <li>Use labels to provide context for the input fields.</li>
            <li>Include hints to guide the user in entering the correct information.</li>
            <li>Display error messages to help users correct their input.</li>
          </ul>
        </div>
      </section>
    </>
  );
};

InputDocumentation.displayName = "InputDocumentation";
export default InputDocumentation;
