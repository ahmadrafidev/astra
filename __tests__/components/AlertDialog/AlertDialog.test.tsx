import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import AlertDialog from '../../../components/AlertDialog/AlertDialog';

describe('AlertDialog Component', () => {
  const onClose = jest.fn();
  const onConfirm = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders when open is true', () => {
    render(
      <AlertDialog open={true} onClose={onClose} onConfirm={onConfirm}>
        Are you sure?
      </AlertDialog>
    );

    expect(screen.getByText('Are you sure?')).toBeInTheDocument();
    expect(screen.getByText('Continue')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  test('does not render when open is false', () => {
    render(
      <AlertDialog open={false} onClose={onClose} onConfirm={onConfirm}>
        Are you sure?
      </AlertDialog>
    );

    expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    render(
      <AlertDialog open={true} onClose={onClose} onConfirm={onConfirm}>
        Are you sure?
      </AlertDialog>
    );

    fireEvent.click(screen.getByText('Cancel'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('calls onConfirm and onClose when confirm button is clicked', () => {
    render(
      <AlertDialog open={true} onClose={onClose} onConfirm={onConfirm}>
        Are you sure?
      </AlertDialog>
    );

    fireEvent.click(screen.getByText('Continue'));
    expect(onConfirm).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('calls onClose when clicking outside the dialog', () => {
    render(
      <AlertDialog open={true} onClose={onClose} onConfirm={onConfirm}>
        Are you sure?
      </AlertDialog>
    );

    fireEvent.click(screen.getByTestId('alert-dialog-overlay'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
