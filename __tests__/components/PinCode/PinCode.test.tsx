import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import PinCode from '../../../components/PinCode/PinCode';

describe('PinCode Component', () => {
  test('renders correctly with default props', () => {
    render(<PinCode />);

    // Check if the correct number of input fields is rendered
    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(6);

    // Verify each input field has the correct attributes
    inputs.forEach((input) => {
      expect(input).toHaveAttribute('type', 'password');
      expect(input).toHaveAttribute('maxlength', '1');
    });
  });

  test('allows input and handles change correctly', () => {
    const handlePinChange = jest.fn();
    render(<PinCode onPinChange={handlePinChange} />);

    // Simulate entering a digit in the first input
    const firstInput = screen.getAllByRole('textbox')[0];
    fireEvent.change(firstInput, { target: { value: '1' } });

    // Check if the input value is updated
    expect(firstInput).toHaveValue('1');

    // Verify that the onPinChange callback is called with the correct new pin array
    expect(handlePinChange).toHaveBeenCalledWith(['1', '', '', '', '', '']);
  });

  test('focuses the next input after entering a digit', () => {
    render(<PinCode />);

    const inputs = screen.getAllByRole('textbox');
    
    // Simulate entering a digit in the first input
    fireEvent.change(inputs[0], { target: { value: '2' } });

    // Check if the focus moves to the second input
    expect(document.activeElement).toBe(inputs[1]);
  });

  test('backspaces to the previous input when empty', () => {
    render(<PinCode />);

    const inputs = screen.getAllByRole('textbox');

    // Simulate entering digits in the first two inputs
    fireEvent.change(inputs[0], { target: { value: '3' } });
    fireEvent.change(inputs[1], { target: { value: '4' } });

    // Simulate backspace on the second input
    fireEvent.keyDown(inputs[1], { key: 'Backspace' });

    // Check if the focus moves back to the first input
    expect(document.activeElement).toBe(inputs[0]);
  });

  test('triggers onComplete callback when all inputs are filled', () => {
    const handleComplete = jest.fn();
    render(<PinCode onComplete={handleComplete} />);

    const inputs = screen.getAllByRole('textbox');
    
    // Simulate entering digits in all inputs
    inputs.forEach((input, index) => {
      fireEvent.change(input, { target: { value: `${index + 1}` } });
    });

    // Verify that the onComplete callback is called with the complete pin
    expect(handleComplete).toHaveBeenCalledWith('123456');
  });

  test('shows error message for non-numeric input', () => {
    render(<PinCode />);

    const firstInput = screen.getAllByRole('textbox')[0];

    // Simulate entering a non-numeric character
    fireEvent.change(firstInput, { target: { value: 'a' } });

    // Check if the error message is displayed
    expect(screen.getByText('Only numeric values are allowed')).toBeInTheDocument();
  });
});
