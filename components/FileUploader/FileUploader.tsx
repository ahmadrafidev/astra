import React, { useState, useRef, useCallback } from 'react';
import { Upload } from 'lucide-react';
import { Alert, AlertContent } from '../Alert/Alert';
import ProgressBar from '../ProgressBar/ProgressBar';

/**
 * Props for the FileUploader component.
 * 
 * @typedef {Object} FileUploaderProps
 * @property {string} [className] - Additional class names for custom styling.
 * @property {(file: File) => void} onFileSelect - Callback when a file is selected.
 * @property {(progress: number) => void} [onUploadProgress] - Callback for upload progress.
 * @property {number} [maxSizeMB=5] - Maximum file size in megabytes.
 * @property {string[]} [allowedTypes=['image/*', 'application/pdf']] - Allowed file types.
 * @property {string} [label] - Label for the file uploader.
 * @property {string} [dropzoneText='Drop files here to upload'] - Text displayed in the dropzone area.
 * @property {string} [browseText='Browse files'] - Text displayed on the browse button.
 * @property {Object} [styles] - Custom styles for different parts of the component.
 * @property {string} [styles.container] - Custom styles for the container.
 * @property {string} [styles.dropzone] - Custom styles for the dropzone.
 * @property {string} [styles.dropzoneActive] - Custom styles for the active dropzone.
 * @property {string} [styles.uploadIcon] - Custom styles for the upload icon.
 * @property {string} [styles.dropzoneText] - Custom styles for the dropzone text.
 * @property {string} [styles.browseButton] - Custom styles for the browse button.
 * @property {Partial<React.ComponentProps<typeof ProgressBar>>} [progressBarProps] - Additional props for the progress bar.
 */
export interface FileUploaderProps {
  className?: string;
  onFileSelect: (file: File) => void;
  onUploadProgress?: (progress: number) => void;
  maxSizeMB?: number;
  allowedTypes?: string[];
  label?: string;
  dropzoneText?: string;
  browseText?: string;
  styles?: {
    container?: string;
    dropzone?: string;
    dropzoneActive?: string;
    uploadIcon?: string;
    dropzoneText?: string;
    browseButton?: string;
  };
  progressBarProps?: Partial<React.ComponentProps<typeof ProgressBar>>;
}

/**
 * FileUploader component for selecting and uploading files with progress indication.
 * 
 * @component
 * @param {FileUploaderProps} props - Props for the FileUploader component.
 * @returns {JSX.Element} The rendered FileUploader component.
 */
const FileUploader: React.FC<FileUploaderProps> = ({
  className,
  onFileSelect,
  onUploadProgress,
  maxSizeMB = 5,
  allowedTypes = ['image/*', 'application/pdf'],
  label,
  dropzoneText,
  browseText,
  styles = {},
  progressBarProps = {},
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  }, []);

  const handleFiles = useCallback((files: FileList) => {
    const file = files[0];
    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(`File size exceeds ${maxSizeMB}MB limit.`);
      return;
    }
    if (!allowedTypes.some(type => file.type.match(type))) {
      setError('File type not allowed.');
      return;
    }
    setError(null);
    onFileSelect(file);
    simulateUpload(file);
  }, [maxSizeMB, allowedTypes, onFileSelect]);

  const simulateUpload = useCallback((file: File) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (onUploadProgress) {
        onUploadProgress(progress);
      }
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 500);
  }, [onUploadProgress]);

  const onButtonClick = useCallback(() => {
    inputRef.current?.click();
  }, []);

  return (
    <div className={`w-full max-w-sm mx-auto ${className} ${styles.container || ''}`}>
      <label className="block text-base font-medium text-gray-900 dark:text-gray-100 mb-2">{label}</label>
      <div
        className={`
          border-2 rounded-2xl p-4 text-center cursor-pointer transition-colors bg-gray-900 dark:bg-gray-100
          ${dragActive ? 'border-blue-400 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}
          ${styles.dropzone || ''}
          ${dragActive ? styles.dropzoneActive || '' : ''}
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={onButtonClick}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={handleChange}
          accept={allowedTypes.join(',')}
        />
        <Upload className={`mx-auto h-8 w-8 text-gray-50 dark:text-gray-900 ${styles.uploadIcon || ''}`} />
        <p className={`my-2 text-base font-sans font-medium text-gray-50 dark:text-gray-900 ${styles.dropzoneText || ''}`}>{dropzoneText}</p>
        <button className={`
          my-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm
          text-black bg-gray-100 dark:bg-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
          ${styles.browseButton || ''}
        `}>
          {browseText}
        </button>
      </div>
      {uploadProgress > 0 && (
        <ProgressBar
          progress={uploadProgress}
          className="mt-2"
          size="md"
          showLabel
          labelPosition="outside"
          animate
          {...progressBarProps}
        />
      )}
      {error && (
        <Alert type="error" className="mt-2">
          <AlertContent>{error}</AlertContent>
        </Alert>
      )}
    </div>
  );
};

FileUploader.displayName = "FileUploader";
export default FileUploader;
