import React from 'react';

const ModalDocumentation = () => {
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
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">isOpen</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">boolean</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">false</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Controls the visibility of the modal.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onClose</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">() =&gt; void</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Function to call when the modal is requested to be closed.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">children</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">React.ReactNode</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Content to be rendered inside the modal.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">title</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Optional title for the modal. If provided, it will be rendered as an h2 element.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for styling the modal content wrapper.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">closeOnOutsideClick</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">boolean</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">true</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">If true, clicking outside the modal will close it.</td>
              </tr>
              <tr>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">closeButton</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">React.ReactNode</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">none</td>
                <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Custom close button element. If not provided, defaults to the X icon from lucide-react.</td>
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
            <li>Use modals for urgent and important information that requires user action or attention.</li>
            <li>Provide clear and concise information within the modal. Keep content focused and to the point.</li>
            <li>Avoid overusing modals, as they can be disruptive to the user experience.</li>
            <li>Ensure the modal content is responsive and looks good on all screen sizes.</li>
            <li>Use the title prop to give context to screen reader users and to visually structure your modal content.</li>
          </ul>
        </div>
      </section>
    </>
  );
};

ModalDocumentation.displayName = "ModalDocumentation";
export default ModalDocumentation;
