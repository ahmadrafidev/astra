import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '../../../components/Modal/Modal';

describe('Modal Component', () => {
  const onCloseMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders modal when isOpen is true', () => {
    render(<Modal isOpen={true} onClose={onCloseMock}>Modal Content</Modal>);
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  test('does not render modal when isOpen is false', () => {
    render(<Modal isOpen={false} onClose={onCloseMock}>Modal Content</Modal>);
    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    render(<Modal isOpen={true} onClose={onCloseMock}>Modal Content</Modal>);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    expect(onCloseMock).toHaveBeenCalled();
  });

  test('closes modal on outside click if closeOnOutsideClick is true', () => {
    render(<Modal isOpen={true} onClose={onCloseMock} closeOnOutsideClick>Modal Content</Modal>);
    fireEvent.click(screen.getByRole('dialog'));
    expect(onCloseMock).toHaveBeenCalled();
  });

  test('does not close modal on outside click if closeOnOutsideClick is false', () => {
    render(<Modal isOpen={true} onClose={onCloseMock} closeOnOutsideClick={false}>Modal Content</Modal>);
    fireEvent.click(screen.getByRole('dialog'));
    expect(onCloseMock).not.toHaveBeenCalled();
  });
});
