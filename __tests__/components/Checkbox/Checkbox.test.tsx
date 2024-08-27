import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Checkbox from '../../../components/Checkbox/Checkbox';

describe('Checkbox Component', () => {
  test('renders with default props', () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  test('renders label when provided', () => {
    render(<Checkbox label="Accept Terms" />);

    const label = screen.getByText('Accept Terms');
    expect(label).toBeInTheDocument();
  });

  test('is disabled when the disabled prop is set', () => {
    render(<Checkbox disabled />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  test('displays error message when provided', () => {
    render(<Checkbox error="This field is required" />);

    const errorMessage = screen.getByText('This field is required');
    expect(errorMessage).toBeInTheDocument();
  });
});
