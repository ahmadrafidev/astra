'use client';

import React from 'react';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import FileUploader from './FileUploader';

const FileUploaderClient: React.FC = () => {

  const handleFileSelect = (file: File) => {
    console.log('Selected file:', file);
  };

  return (
    <Layout>
      <Badge text="Components" />
      <div className="flex flex-col mb-5">
        <h1 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-50">File Uploader</h1>
        <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
          A form component for capturing and validating file uploads.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Example</h2>
        <FileUploader
          onFileSelect={handleFileSelect}
          maxSizeMB={10}
          allowedTypes={['image/*', 'application/pdf']}
          dropzoneText="Drag and drop your file here"
          browseText="Browse files"
        />
      </div>
      {/* Props Section */}
      <section className="my-5">
        <h2 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-50 mb-6">Props</h2>
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
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">empty</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Additional class names for custom styling.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">onFileSelect</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">{`(file: File) => void`}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Callback when a file is selected.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">onUploadProgress</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">{`(progress: number) => void`}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Callback for upload progress.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">maxSizeMB</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">number</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">5</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Maximum file size in megabytes.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">allowedTypes</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string[]</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">image, pdf</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Allowed file types.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">label</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">empty</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Label for the file uploader.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">dropzoneText</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">empty</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Text displayed in the dropzone area.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">browseText</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">empty</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Text displayed on the browse button.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">styles</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">Object</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Custom styles for different parts of the component.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">progressBarProps</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">Object</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Additional props for the progress bar.</td>
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
            <li>Ensure the file size limit is appropriate for your application.</li>
            <li>Validate file types to prevent unsupported file formats.</li>
            <li>Provide clear error messages for better user experience.</li>
            <li>Use the progress bar to give users feedback during the upload process.</li>
            <li>Allow users to cancel or retry uploads if they encounter issues.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

FileUploaderClient.displayName = "FileUploaderClient";
export default FileUploaderClient;
