import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProgressTracker from '../../../components/ProgressTracker/ProgressTracker';

describe('ProgressTracker Component', () => {
  test('renders correctly with default props', () => {
    const steps = ['Step 1', 'Step 2', 'Step 3'];
    render(<ProgressTracker steps={steps} currentStep={1} />);
    
    // Check if the progress tracker is rendered
    const progressTracker = screen.getByRole('progressbar');
    expect(progressTracker).toBeInTheDocument();

    // Check if the steps are rendered
    steps.forEach((step, index) => {
      expect(screen.getByText(step)).toBeInTheDocument();
      expect(screen.getByLabelText(`Step ${index + 1}: ${step}`)).toBeInTheDocument();
    });
  });

  test('applies active and inactive class names correctly', () => {
    const steps = ['Step 1', 'Step 2', 'Step 3'];
    render(
      <ProgressTracker
        steps={steps}
        currentStep={1}
        activeClassName="active-step"
        inactiveClassName="inactive-step"
      />
    );

    // Check if the active and inactive classes are applied correctly
    steps.forEach((_, index) => {
      const stepElement = screen.getByLabelText(`Step ${index + 1}: ${steps[index]}`);
      if (index <= 1) {
        expect(stepElement).toHaveClass('active-step');
      } else {
        expect(stepElement).toHaveClass('inactive-step');
      }
    });
  });

  test('renders with custom class names for steps and separators', () => {
    const steps = ['Step 1', 'Step 2', 'Step 3'];
    render(
      <ProgressTracker
        steps={steps}
        currentStep={1}
        stepNumberClassName="custom-step-number"
        stepLabelClassName="custom-step-label"
        separatorClassName="custom-separator"
      />
    );

    // Check if the custom class names are applied correctly
    steps.forEach((step, index) => {
      expect(screen.getByText(step)).toHaveClass('custom-step-label');
      expect(screen.getByLabelText(`Step ${index + 1}: ${step}`)).toHaveClass('custom-step-number');
    });

    // Check if the separator class is applied correctly
    const separators = screen.getAllByRole('separator');
    separators.forEach((separator) => {
      expect(separator).toHaveClass('custom-separator');
    });
  });

  test('does not render separators after the last step', () => {
    const steps = ['Step 1', 'Step 2', 'Step 3'];
    render(<ProgressTracker steps={steps} currentStep={1} />);
    
    // Check if the separators are not rendered after the last step
    const separators = screen.getAllByRole('separator');
    expect(separators.length).toBe(steps.length - 1);
  });

  test('renders with custom container class name', () => {
    render(<ProgressTracker steps={['Step 1']} currentStep={0} className="custom-container" />);

    // Check if the custom container class is applied
    const progressTracker = screen.getByRole('progressbar');
    expect(progressTracker).toHaveClass('custom-container');
  });

  test('aria attributes are set correctly', () => {
    const steps = ['Step 1', 'Step 2', 'Step 3'];
    render(<ProgressTracker steps={steps} currentStep={1} />);
    
    // Check if the aria attributes are set correctly
    const progressTracker = screen.getByRole('progressbar');
    expect(progressTracker).toHaveAttribute('aria-valuenow', '2');
    expect(progressTracker).toHaveAttribute('aria-valuemin', '1');
    expect(progressTracker).toHaveAttribute('aria-valuemax', `${steps.length}`);
  });
});
