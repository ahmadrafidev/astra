import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProgressBar from '../../../components/ProgressBar/ProgressBar';

describe('ProgressBar Component', () => {
  test('renders correctly with default props', () => {
    render(<ProgressBar progress={50} />);
    
    // Check if the progress bar container is rendered
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toBeInTheDocument();

    // Check if the progress value is set correctly
    expect(progressBar).toHaveAttribute('aria-valuenow', '50');
  });

  test('renders with a custom className', () => {
    render(<ProgressBar progress={50} className="custom-class" />);

    // Check if the progress bar container has the custom class
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveClass('custom-class');
  });

  test('renders with a custom progressClassName', () => {
    render(<ProgressBar progress={50} progressClassName="custom-progress-class" />);

    // Check if the progress element has the custom class
    const progressElement = screen.getByText('50%').parentElement;
    expect(progressElement).toHaveClass('custom-progress-class');
  });

  test('shows the progress label inside by default', () => {
    render(<ProgressBar progress={50} />);

    // Check if the label is displayed inside the progress bar
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  test('shows the progress label outside when labelPosition is set to "outside"', () => {
    render(<ProgressBar progress={50} labelPosition="outside" />);

    // Check if the label is displayed outside the progress bar
    const outsideLabel = screen.getByText('50%');
    expect(outsideLabel).toBeInTheDocument();
    expect(outsideLabel).toHaveClass('mt-1');
  });

  test('uses custom label when provided', () => {
    render(<ProgressBar progress={50} customLabel="Halfway there!" />);

    // Check if the custom label is displayed
    expect(screen.getByText('Halfway there!')).toBeInTheDocument();
  });

  test('renders with stripe styles when hasStripe is true', () => {
    render(<ProgressBar progress={50} hasStripe />);

    // Check if the stripe styles are applied
    const progressElement = screen.getByText('50%').parentElement;
    expect(progressElement).toHaveStyle('background-image: linear-gradient(45deg');
  });

  test('does not render label when showLabel is false', () => {
    render(<ProgressBar progress={50} showLabel={false} />);

    // Check if the label is not rendered
    expect(screen.queryByText('50%')).not.toBeInTheDocument();
  });

  test('progress is clamped between 0 and 100', () => {
    const { rerender } = render(<ProgressBar progress={-10} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');

    rerender(<ProgressBar progress={150} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
  });

  test('applies correct size class based on size prop', () => {
    const { rerender } = render(<ProgressBar progress={50} size="sm" />);
    expect(screen.getByRole('progressbar')).toHaveClass('h-3');

    rerender(<ProgressBar progress={50} size="lg" />);
    expect(screen.getByRole('progressbar')).toHaveClass('h-6');
  });

  test('applies correct progress variant class based on progressVariant prop', () => {
    const { rerender } = render(<ProgressBar progress={50} progressVariant="success" />);
    expect(screen.getByText('50%').parentElement).toHaveClass('bg-green-500');

    rerender(<ProgressBar progress={50} progressVariant="default" />);
    expect(screen.getByText('50%').parentElement).toHaveClass('bg-blue-500');
  });
});
