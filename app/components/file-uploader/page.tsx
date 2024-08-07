import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "File Uploader",
    description: "An interface for selecting and uploading files.",
};

const FileUploaderClient = dynamic(() => import("@/components/FileUploader/FileUploaderClient"), { ssr: false });

const FileUploaderPage: React.FC = () => {
    return <FileUploaderClient />;
};

FileUploaderPage.displayName="FileUploaderPage"
export default FileUploaderPage;
