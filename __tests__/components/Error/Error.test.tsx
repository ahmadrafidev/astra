import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Error, { ErrorType } from '../../../components/Error/Error';

describe('Error Component', () => {
  const primaryActionMock = jest.fn();
  const secondaryActionMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test.each([
    ['upload', 'Upload Error', 'An error occurred while uploading.'],
    ['network', 'Network Error', 'Network connection lost.'],
    ['filesize', 'File Size Error', 'The file is too large.'],
    ['authentication', 'Authentication Error', 'Please log in again.'],
    ['limiter', 'Rate Limit Exceeded', 'Too many requests.'],
    ['timeout', 'Timeout Error', 'The operation timed out.'],
    ['server', 'Server Error', 'Server is unavailable.'],
    ['payment', 'Payment Error', 'Payment failed.'],
  ])('renders correctly with %s type', (type: ErrorType, title: string, message: string) => {
    render(
      <Error
        type={type}
        title={title}
        message={message}
        primaryAction={{ label: 'Retry', onClick: primaryActionMock }}
        secondaryAction={{ label: 'Cancel', onClick: secondaryActionMock }}
      />
    );

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(message)).toBeInTheDocument();
    expect(screen.getByText('Retry')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  test('calls primary action on button click', () => {
    render(
      <Error
        type="upload"
        title="Error"
        message="An error occurred."
        primaryAction={{ label: 'Retry', onClick: primaryActionMock }}
      />
    );

    fireEvent.click(screen.getByText('Retry'));
    expect(primaryActionMock).toHaveBeenCalled();
  });

  test('calls secondary action on button click', () => {
    render(
      <Error
        type="upload"
        title="Error"
        message="An error occurred."
        primaryAction={{ label: 'Retry', onClick: primaryActionMock }}
        secondaryAction={{ label: 'Cancel', onClick: secondaryActionMock }}
      />
    );

    fireEvent.click(screen.getByText('Cancel'));
    expect(secondaryActionMock).toHaveBeenCalled();
  });
});
