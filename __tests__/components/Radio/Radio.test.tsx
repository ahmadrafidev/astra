import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Radio from '../../../components/Radio/Radio';

describe('Radio Component', () => {
  const handleChange = jest.fn();

  it('renders correctly with default props', () => {
    render(
      <Radio 
        label="Radio Label" 
        value="radioValue" 
        onChange={handleChange} 
        checked={false} 
      />
    );

    const radioInput = screen.getByLabelText('Radio Label');
    expect(radioInput).toBeInTheDocument();
    expect(radioInput).not.toBeChecked();
  });

  it('renders with description and error', () => {
    render(
      <Radio 
        label="Radio Label" 
        description="Radio Description" 
        error="Radio Error" 
        value="radioValue" 
        onChange={handleChange} 
        checked={false} 
      />
    );

    const description = screen.getByText('Radio Description');
    const error = screen.getByText('Radio Error');

    expect(description).toBeInTheDocument();
    expect(error).toBeInTheDocument();
  });

  it('calls onChange function when clicked', () => {
    render(
      <Radio 
        label="Radio Label" 
        value="radioValue" 
        onChange={handleChange} 
        checked={false} 
      />
    );

    const radioInput = screen.getByLabelText('Radio Label');
    fireEvent.click(radioInput);
    expect(handleChange).toHaveBeenCalledWith('radioValue');
  });

  it('does not call onChange function when disabled', () => {
    render(
      <Radio 
        label="Radio Label" 
        value="radioValue" 
        onChange={handleChange} 
        checked={false} 
        disabled 
      />
    );

    const radioInput = screen.getByLabelText('Radio Label');
    fireEvent.click(radioInput);
    expect(handleChange).not.toHaveBeenCalled();
  });
});
