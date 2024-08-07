/* eslint-disable react/no-unescaped-entities */

const AlertDialogDocumentation: React.FC = () => {
    return (
      <>
        {/* Props Section */}
        <section className="my-5">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-6">Props</h2>
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">open</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">boolean</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Controls the visibility of the alert dialog.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">onClose</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">function</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">empty</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Function called when the dialog should be closed.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">onConfirm</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">function</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">empty</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Function called when the confirm action is triggered.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">children</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">ReactNode</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Content to display inside the alert dialog.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">confirmText</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Continue</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Text for the confirm button.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">closeText</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Cancel</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Text for the close button.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">empty</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Additional classes for custom styling.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* Best Practices Section */}
        <section className="my-5">
          <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
          <div className="space-y-4">
            <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3">
              <li>Use alert dialogs sparingly for critical actions or important decisions that require user confirmation.</li>
              <li>Keep the dialog content concise and focused on the specific action or decision at hand.</li>
              <li>Use clear and action-oriented language for button labels (e.g., "Delete" instead of "OK").</li>
              <li>Ensure that the confirm button stands out visually as the primary action.</li>
              <li>Provide a clear way to dismiss the dialog without taking action (e.g., a "Cancel" button or clicking outside the dialog).</li>
              <li>Consider using different colors or styles for destructive actions to draw attention to potential consequences.</li>
            </ul>
          </div>
        </section>
      </>
    );
  };
  
  AlertDialogDocumentation.displayName = "AlertDialogDocumentation";
  export default AlertDialogDocumentation;
  