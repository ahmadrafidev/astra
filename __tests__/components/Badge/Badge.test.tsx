import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Badge from '../../../components/Badge/Badge';

describe('Badge Component', () => {
  test('renders with text', () => {
    render(<Badge text="New" />);

    const badge = screen.getByText('New');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('bg-gray-200');
    expect(badge).toHaveClass('text-gray-900');
    expect(badge).toHaveClass('px-3 py-1 text-sm rounded-lg');
  });

  test('renders with count below maxCount', () => {
    render(<Badge count={42} />);

    const badge = screen.getByText('42');
    expect(badge).toBeInTheDocument();
  });

  test('renders with count above maxCount', () => {
    render(<Badge count={120} maxCount={99} />);

    const badge = screen.getByText('99+');
    expect(badge).toBeInTheDocument();
  });

  test('applies custom background color', () => {
    render(<Badge text="Custom" color="bg-red-500" textColor="text-white" />);

    const badge = screen.getByText('Custom');
    expect(badge).toHaveClass('bg-red-500');
    expect(badge).toHaveClass('text-white');
  });

  test('applies size class based on size prop', () => {
    render(<Badge text="Large Badge" size="large" />);

    const badge = screen.getByText('Large Badge');
    expect(badge).toHaveClass('px-4 py-1 text-base rounded-lg');
  });

  test('applies aria-label for accessibility', () => {
    render(<Badge text="Accessible Badge" ariaLabel="This is an accessible badge" />);

    const badge = screen.getByLabelText('This is an accessible badge');
    expect(badge).toBeInTheDocument();
  });
});
