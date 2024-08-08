'use client';

import React, { useState } from 'react';

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
                <h1 className="text-xl md:text-2xl font-medium mb-4 text-gray-900 dark:text-gray-50">File Uploader</h1>
                <p className="texta-sm md:text-base font-normal font-sans text-gray-900 dark:text-gray-50">
                    A form component for capturing and validating file uploads.
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">File Uploader</h2>
                <FileUploader
                    onFileSelect={handleFileSelect}
                    maxSizeMB={10}
                    allowedTypes={['image/*', 'application/pdf']}
                    dropzoneText="Drag and drop your file here"
                    browseText="Browse files"
                />
            </div>
            {/* Props Section */}
            <section className="mb-10">
                <h2 className="text-xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Props</h2>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow">
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr>
                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Name</th>
                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200 font-mono">Type</th>
                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Default</th>
                                <th className="px-6 py-2 text-left text-gray-700 dark:text-gray-200">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </section>
            {/* Best Practices Section */}
            <section>
                <h2 className="text-2xl md:text-2xl font-medium font-sans text-gray-900 dark:text-gray-50 mb-5">Best Practices</h2>
                <div className="space-y-4">
                    <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-3">  
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

FileUploaderClient.displayName = "FileUploaderClient";
export default FileUploaderClient;
