import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import FileUploader, { FileUploaderProps } from '@/components/FileUploader/FileUploader'; 

export default {
    title: 'Components/FileUploader',
    component: FileUploader,
    argTypes: {
        label: {
            control: 'text',
            description: 'Label for the file uploader.',
            table: {
                type: { summary: 'string' },
            },
        },
        dropzoneText: {
            control: 'text',
            description: 'Text displayed in the dropzone area.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Drop files here to upload' },
            },
        },
        browseText: {
            control: 'text',
            description: 'Text displayed on the browse button.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Browse files' },
            },
        },
        maxSizeMB: {
            control: { type: 'number' },
            description: 'Maximum file size in megabytes.',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '5' },
            },
        },
        allowedTypes: {
            control: 'object',
            description: 'Allowed file types.',
            table: {
                type: { summary: 'string[]' },
                defaultValue: { summary: "['image/*', 'application/pdf']" },
            },
        },
        styles: {
            control: 'object',
            description: 'Custom styles for different parts of the component.',
            table: {
                type: { summary: 'Object' },
            },
        },
        onFileSelect: {
            action: 'file selected',
            description: 'Callback when a file is selected.',
            table: {
                type: { summary: '(file: File) => void' },
            },
        },
        onUploadProgress: {
            action: 'upload progress',
            description: 'Callback for upload progress.',
            table: {
                type: { summary: '(progress: number) => void' },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'The FileUploader component allows users to select and upload files with progress indication and error handling.',
            },
        },
    },
} as Meta<FileUploaderProps>;

const Template: StoryFn<FileUploaderProps> = (args) => <FileUploader {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Upload your file',
    dropzoneText: 'Drop files here to upload',
    browseText: 'Browse files',
    maxSizeMB: 5,
    allowedTypes: ['image/*', 'application/pdf'],
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
    label: 'Custom Styled Uploader',
    dropzoneText: 'Drop your files here',
    browseText: 'Select files',
    styles: {
        container: 'bg-gray-200 p-4 rounded-lg',
        dropzone: 'bg-blue-200 border-blue-300',
        uploadIcon: 'text-blue-700',
        dropzoneText: 'text-blue-700',
        browseButton: 'bg-blue-500 text-white',
    },
    maxSizeMB: 10,
    allowedTypes: ['image/*', 'application/pdf'],
};

export const WithProgress = Template.bind({});
WithProgress.args = {
    label: 'Upload with Progress',
    dropzoneText: 'Drag and drop to upload',
    browseText: 'Select file',
    onUploadProgress: (progress) => console.log(`Upload Progress: ${progress}%`),
    maxSizeMB: 5,
    allowedTypes: ['image/*', 'application/pdf'],
};
