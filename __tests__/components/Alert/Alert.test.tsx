import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Alert } from '../../../components/Alert/Alert';

describe('Alert Component', () => {
  test('renders without crashing', () => {
    render(
      <Alert type="info">
        This is an info alert.
      </Alert>
    );

    expect(screen.getByText('This is an info alert.')).toBeInTheDocument();
  });

  test('renders correct alert type styles', () => {
    const { container } = render(
      <Alert type="success">
        This is a success alert.
      </Alert>
    );

    expect(container.firstChild).toHaveClass('bg-green-50');
    expect(container.firstChild).toHaveClass('border-green-500');
    expect(container.firstChild).toHaveClass('text-green-700');
  });

  test('renders title when provided', () => {
    render(
      <Alert type="warning" title="Warning!">
        This is a warning alert.
      </Alert>
    );

    expect(screen.getByText('Warning!')).toBeInTheDocument();
    expect(screen.getByText('This is a warning alert.')).toBeInTheDocument();
  });

  test('does not render when dismissed', () => {
    render(
      <Alert type="error" isDismissible={true}>
        This is an error alert.
      </Alert>
    );

    const dismissButton = screen.getByRole('button', { name: /dismiss/i });

    // Click the dismiss button
    fireEvent.click(dismissButton);

    // Alert should not be visible after dismissal
    expect(screen.queryByText('This is an error alert.')).not.toBeInTheDocument();
  });

  test('does not render dismiss button when isDismissible is false', () => {
    render(
      <Alert type="info" isDismissible={false}>
        This is an info alert.
      </Alert>
    );

    expect(screen.queryByRole('button', { name: /dismiss/i })).not.toBeInTheDocument();
  });
});
