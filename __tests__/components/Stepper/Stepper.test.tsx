import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Stepper, { StepperProps } from '../../../components/Stepper/Stepper';

describe('Stepper Component', () => {
  const steps = [
    { label: 'Step 1', description: 'Description 1' },
    { label: 'Step 2', description: 'Description 2' },
    { label: 'Step 3', description: 'Description 3' },
  ];

  const setup = (props: Partial<StepperProps> = {}) => {
    render(<Stepper steps={steps} currentStep={1} {...props} />);
  };

  it('renders all steps', () => {
    setup();
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('Step 3')).toBeInTheDocument();
  });

  it('renders descriptions for steps', () => {
    setup();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
    expect(screen.getByText('Description 3')).toBeInTheDocument();
  });

  it('applies active color to current step', () => {
    setup({ activeColor: 'bg-blue-500' });
    expect(screen.getByLabelText('Step 2: Step 2')).toHaveClass('bg-blue-500');
  });

  it('applies inactive color to other steps', () => {
    setup({ inactiveColor: 'bg-gray-300' });
    expect(screen.getByLabelText('Step 1: Step 1')).toHaveClass('bg-gray-300');
  });

  it('calls onStepClick when a step is clicked', () => {
    const onStepClick = jest.fn();
    setup({ onStepClick });
    fireEvent.click(screen.getByLabelText('Step 1: Step 1'));
    expect(onStepClick).toHaveBeenCalledWith(0);
  });

  it('renders vertical orientation correctly', () => {
    setup({ orientation: 'vertical' });
    expect(screen.getByLabelText('Progress')).toHaveClass('flex-col');
  });
});
