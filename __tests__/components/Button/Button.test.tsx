import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from '../../../components/Button/Button';

describe('Button Component', () => {
  test('renders with default props', () => {
    render(<Button>Click Me</Button>);

    const button = screen.getByText('Click Me');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-gray-800');
    expect(button).toHaveClass('text-white');
    expect(button).toHaveClass('px-4 py-2 text-base');
  });

  test('applies the correct variant and size', () => {
    render(<Button variant="destructive" size="lg">Delete</Button>);

    const button = screen.getByText('Delete');
    expect(button).toHaveClass('bg-red-600');
    expect(button).toHaveClass('text-white');
    expect(button).toHaveClass('px-6 py-3 text-lg');
  });

  test('positions the icon correctly', () => {
    render(<Button icon={<span data-testid="icon">Icon</span>} iconPosition="right">Click Me</Button>);

    const button = screen.getByText('Click Me');
    const icon = screen.getByTestId('icon');
    expect(button).toHaveClass('flex-row-reverse');
    expect(icon).toBeInTheDocument();
  });

  test('is disabled when the disabled prop is set', () => {
    render(<Button disabled>Click Me</Button>);

    const button = screen.getByText('Click Me');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('cursor-not-allowed');
  });

  test('calls onClick handler when clicked', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click Me</Button>);

    const button = screen.getByText('Click Me');
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
