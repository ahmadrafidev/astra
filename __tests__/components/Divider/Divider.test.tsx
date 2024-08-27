import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Divider from '../../../components/Divider/Divider';

describe('Divider Component', () => {
  test('renders with default props', () => {
    render(<Divider />);

    const divider = screen.getByRole('separator');
    expect(divider).toHaveClass('w-full h-0.5');
  });

  test('applies correct orientation and size classes', () => {
    render(<Divider orientation="vertical" size="lg" />);

    const divider = screen.getByRole('separator');
    expect(divider).toHaveClass('h-full w-1');
  });

  test('renders label when provided', () => {
    render(<Divider label="Section" />);

    const label = screen.getByText('Section');
    expect(label).toBeInTheDocument();
  });

  test('applies custom color', () => {
    render(<Divider color="bg-red-500" />);

    const divider = screen.getByRole('separator');
    expect(divider).toHaveClass('bg-red-500');
  });
});
