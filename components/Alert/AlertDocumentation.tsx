import React from 'react';

const AlertDocumentation = () => {
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
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">type</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">AlertType</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Required</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">{`The type of alert to display. One of: 'info', 'success', 'warning', 'error'`}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">title</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">empty</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The title of the alert. If provided, it will be displayed prominently.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">children</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">ReactNode</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">The content of the alert. Can be text or JSX.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">isDismissible</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">boolean</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">false</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">If true, shows a dismiss button to close the alert.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">empty</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Additional CSS classes to apply to the alert container.</td>
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
            <li>
              <strong>Use appropriate alert types:</strong> Choose the correct type based on the message importance and context.
              <ul className="list-disc pl-8 text-gray-700 dark:text-gray-300">
                <li><strong>Info:</strong> For general information or updates</li>
                <li><strong>Success:</strong> To confirm a task has been completed successfully</li>
                <li><strong>Warning:</strong> For potential issues or important notices</li>
                <li><strong>Error:</strong> For critical problems or failures</li>
              </ul>
            </li>
            <li><strong>Keep content concise and actionable.</strong> Write clear, brief messages that users can quickly understand and act upon. Avoid unnecessary details.</li>
            <li><strong>Use dismissible alerts judiciously.</strong> Make alerts dismissible when the information is not critical and users might want to remove it from view.</li>
            <li><strong>Provide context and next steps.</strong> When appropriate, include guidance on what the user should do next or how to resolve an issue.</li>
            <li><strong>Ensure accessibility.</strong> Use proper ARIA roles and ensure color is not the only means of conveying the alert type.</li>
            <li><strong>Placement matters.</strong> Position alerts where they are easily noticeable but don‘t obstruct important content or actions.</li>
          </ul>
        </div>
      </section>
    </>
  );
};

AlertDocumentation.displayName="AlertDocumentation"
export default AlertDocumentation;
