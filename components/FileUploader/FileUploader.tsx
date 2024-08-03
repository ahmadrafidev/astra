// components/FileUploader/FileUploader.tsx
import React from 'react';
import Link from 'next/link';

export interface FileUploaderProps {
    className?: string;
}

const FileUploader: React.FC<FileUploaderProps> = ({ className = '' }) => {
    return (
        <div>File Uploader</div>
    );
};

FileUploader.displayName = "FileUploader";
export default FileUploader;
