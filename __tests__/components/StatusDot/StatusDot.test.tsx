import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import StatusDot, { StatusDotProps } from '../../../components/StatusDot/StatusDot';

describe('StatusDot Component', () => {
  const setup = (props: Partial<StatusDotProps> = {}) => {
    render(<StatusDot status="online" {...props} />);
  };

  it('renders the dot with the correct color for online status', () => {
    setup();
    const dot = screen.getByRole('status');
    expect(dot).toHaveClass('bg-green-500');
  });

  it('renders the dot with the correct color for offline status', () => {
    setup({ status: 'offline' });
    const dot = screen.getByRole('status');
    expect(dot).toHaveClass('bg-gray-500');
  });

  it('renders the dot with the correct color for busy status', () => {
    setup({ status: 'busy' });
    const dot = screen.getByRole('status');
    expect(dot).toHaveClass('bg-red-500');
  });

  it('displays the label when showLabel is true', () => {
    setup({ status: 'online', showLabel: true });
    expect(screen.getByText('Online')).toBeInTheDocument();
  });

  it('does not display the label when showLabel is false', () => {
    setup({ status: 'online', showLabel: false });
    expect(screen.queryByText('Online')).not.toBeInTheDocument();
  });

  it('renders with custom label', () => {
    setup({ status: 'online', label: 'Available' });
    expect(screen.getByText('Available')).toBeInTheDocument();
  });

  it('renders the icon when type is "icon" and icon is provided', () => {
    const TestIcon = <span>Test Icon</span>;
    setup({ type: 'icon', icon: TestIcon });
    expect(screen.getByText('Test Icon')).toBeInTheDocument();
  });

  it('applies additional class names correctly', () => {
    setup({ className: 'custom-class' });
    const dot = screen.getByRole('status');
    expect(dot).toHaveClass('custom-class');
  });

  it('renders children inside the status indicator', () => {
    setup({ children: <span>Child Content</span> });
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  it('has correct aria-label for status', () => {
    setup({ status: 'busy' });
    const dot = screen.getByRole('status');
    expect(dot).toHaveAttribute('aria-label', 'Busy');
  });
});
