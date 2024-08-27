import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FileUploader from '../../../components/FileUploader/FileUploader';

describe('FileUploader Component', () => {
  const onFileSelectMock = jest.fn();
  const onUploadProgressMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders with default props', () => {
    render(<FileUploader onFileSelect={onFileSelectMock} />);

    expect(screen.getByText('Drop files here to upload')).toBeInTheDocument();
    expect(screen.getByText('Browse files')).toBeInTheDocument();
  });

  test('calls onFileSelect when a valid file is selected', () => {
    render(<FileUploader onFileSelect={onFileSelectMock} />);

    const input = screen.getByLabelText('Drop files here to upload');
    const file = new File(['dummy content'], 'example.png', { type: 'image/png' });

    fireEvent.change(input, { target: { files: [file] } });

    expect(onFileSelectMock).toHaveBeenCalledWith(file);
  });

  test('shows error message for file exceeding max size', () => {
    render(<FileUploader onFileSelect={onFileSelectMock} maxSizeMB={0.001} />);

    const input = screen.getByLabelText('Drop files here to upload');
    const file = new File(['dummy content'], 'largefile.png', { type: 'image/png' });

    fireEvent.change(input, { target: { files: [file] } });

    expect(screen.getByText(/File size exceeds/)).toBeInTheDocument();
  });

  test('handles drag and drop events', () => {
    render(<FileUploader onFileSelect={onFileSelectMock} />);

    const dropzone = screen.getByText('Drop files here to upload');

    fireEvent.dragEnter(dropzone);
    expect(dropzone).toHaveClass('border-blue-400');

    fireEvent.dragLeave(dropzone);
    expect(dropzone).not.toHaveClass('border-blue-400');
  });
});
