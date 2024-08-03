/* eslint-disable react/no-unescaped-entities */

const AlertDialogDocumentation: React.FC = () => {
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
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">open</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">boolean</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">false</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Controls the visibility of the alert dialog.</td>
                    </tr>
                    <tr>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onClose</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">function</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Function called when the dialog should be closed.</td>
                    </tr>
                    <tr>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">onConfirm</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">function</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Function called when the confirm action is triggered.</td>
                    </tr>
                    <tr>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">children</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">ReactNode</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">-</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Content to display inside the alert dialog.</td>
                    </tr>
                    <tr>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">confirmText</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Continue</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Text for the confirm button.</td>
                    </tr>
                    <tr>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">closeText</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Cancel</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Text for the close button.</td>
                    </tr>
                    <tr>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">className</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200 font-mono">string</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">empty</td>
                        <td className="border px-6 py-4 text-gray-700 dark:text-gray-200">Additional classes for custom styling.</td>
                    </tr>
                </tbody>
            </table>
          </div>
      </section>
      {/* Best Practices Section */}
      <section className="my-5">
        <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
        <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">1. Use alert dialogs sparingly for critical actions or important decisions that require user confirmation.</p>
            <p className="text-gray-700 dark:text-gray-300">2. Keep the dialog content concise and focused on the specific action or decision at hand.</p>
            <p className="text-gray-700 dark:text-gray-300">3. Use clear and action-oriented language for button labels (e.g., "Delete" instead of "OK").</p>
            <p className="text-gray-700 dark:text-gray-300">4. Ensure that the confirm button stands out visually as the primary action.</p>
            <p className="text-gray-700 dark:text-gray-300">5. Provide a clear way to dismiss the dialog without taking action (e.g., a "Cancel" button or clicking outside the dialog).</p>
            <p className="text-gray-700 dark:text-gray-300">6. Consider using different colors or styles for destructive actions to draw attention to potential consequences.</p>
            <p className="text-gray-700 dark:text-gray-300">7. Ensure the dialog is accessible, including proper focus management and keyboard navigation.</p>
            <p className="text-gray-700 dark:text-gray-300">8. Test the dialog on different screen sizes to ensure it remains usable on mobile devices.</p>
        </div>
      </section>
    </>
  );
};

AlertDialogDocumentation.displayName = "AlertDialogDocumentation";
export default AlertDialogDocumentation;
