'use client';

import React from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import Layout from '../Layout/Layout';
import Badge from '../Badge/Badge';

import TOC from '@/components/TOC/TOC';
import { Tabs, Tab } from '@/components/Tabs/Tabs';

import FileUploader from './FileUploader';

const FileUploaderClient: React.FC = () => {

  const handleFileSelect = (file: File) => {
    console.log('Selected file:', file);
  };

  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'usage', label: 'Usage' },
    { id: 'properties', label: 'Props' },
    { id: 'best-practices', label: 'Best Practices' },
  ];

  const codeExample = `
  <FileUploader
    onFileSelect={handleFileSelect}
    maxSizeMB={10}
    allowedTypes={['image/*', 'application/pdf']}
    dropzoneText="Drag and drop your file here"
    browseText="Browse files"
  />
  `;

  return (
    <Layout>
      <div className="flex">
        <div className="w-4/5 pr-2">
          <Badge text="Components" />
          <div id="overview" className="flex flex-col mb-5 scroll-mt-16">
            <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-50">File Uploader</h1>
            <p className="text-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
              A form component for capturing and validating file uploads.
            </p>
          </div>

          {/* Usage Section */}
          <section id="usage" className="scroll-mt-20">
            <Tabs>
              <Tab label="Preview">
                <div className="flex relative w-full overflow-hidden h-64 mt-4 rounded-lg justify-center items-center bg-zinc-100 dark:bg-zinc-950 shadow border border-slate-300 dark:border-slate-800">
                  <div className="flex flex-col gap-4">
                    <FileUploader
                      onFileSelect={handleFileSelect}
                      maxSizeMB={10}
                      allowedTypes={['image/*', 'application/pdf']}
                      dropzoneText="Drag and drop your file here"
                      browseText="Browse files"
                    />
                  </div>
                </div>
              </Tab>
              <Tab label="Code">
                <div
                  className="relative rounded-lg bg-gray-900 dark:bg-gray-800/90 mt-4"
                  role="region"
                  aria-label="Code Snippet in tsx"
                >
                  <div className="flex justify-between items-center px-4 py-2 border-b border-gray-800">
                    <span className="text-sm font-medium text-gray-100">
                      tsx
                    </span>
                  </div>
                  <div className="overflow-auto rounded-lg border border-gray-800">
                    <SyntaxHighlighter
                      language="tsx"
                      style={materialLight}
                      showLineNumbers={false}
                      wrapLongLines={true}
                      customStyle={{
                        margin: 1.5,
                        borderRadius: '0.5rem 0.5rem 0.5rem 0.5rem',
                        fontSize: '14px',
                        lineHeight: '1.25',
                        padding: '10px',
                      }}
                    >
                      {codeExample}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </section>

          {/* Props Section */}
          <section id="properties" className="my-5 scroll-mt-20">
            <h2 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-50 mb-5">Props</h2>
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Additional class names for custom styling.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">onFileSelect</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono text-wrap">{`(file: File) => void`}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Callback when a file is selected.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">onUploadProgress</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono text-wrap">{`(progress: number) => void`}</td>
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Label for the file uploader.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">dropzoneText</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Text displayed in the dropzone area.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">browseText</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 font-mono">string</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
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
          <section id="best-practices" className="my-5 scroll-mt-20">
            <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
            <div className="space-y-4">
              <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3">
                <li>Ensure the file size limit is appropriate for your application.</li>
                <li>Validate file types to prevent unsupported file formats.</li>
                <li>Provide clear and concise error messages for better user experience.</li>
                <li>Use the progress bar to give users feedback during the upload process.</li>
                <li>Allow users to cancel or retry uploads if they encounter issues.</li>
              </ul>
            </div>
          </section>
        </div>
        <TOC items={tocItems} />
      </div>
    </Layout>
  );
};

FileUploaderClient.displayName = "FileUploaderClient";
export default FileUploaderClient;
