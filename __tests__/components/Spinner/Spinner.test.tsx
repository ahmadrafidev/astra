import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Spinner from '../../../components/Spinner/Spinner';

describe('Spinner Component', () => {
  const setup = (props = {}) => {
    render(<Spinner {...props} />);
  };

  it('renders with default properties', () => {
    setup();
    const spinner = screen.getByRole('status');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('animate-spin');
    expect(spinner).toHaveStyle({ width: '24px', height: '24px', borderWidth: '4px' });
  });

  it('applies custom size, color, and thickness', () => {
    setup({ size: 'lg', color: 'text-red-500', thickness: 6 });
    const spinner = screen.getByRole('status');
    expect(spinner).toHaveClass('text-red-500');
    expect(spinner).toHaveStyle({ width: '32px', height: '32px', borderWidth: '6px' });
  });

  it('applies custom speed class', () => {
    setup({ speed: 'fast' });
    const spinner = screen.getByRole('status');
    expect(spinner).toHaveClass('animate-spin-fast');
  });

  it('applies custom className', () => {
    setup({ className: 'custom-class' });
    const spinner = screen.getByRole('status');
    expect(spinner).toHaveClass('custom-class');
  });

  it('renders with the correct aria-label', () => {
    setup({ 'aria-label': 'Loading spinner' });
    const spinner = screen.getByRole('status');
    expect(spinner).toHaveAttribute('aria-label', 'Loading spinner');
  });
});
