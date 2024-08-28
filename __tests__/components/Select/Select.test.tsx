import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Select from '../../../components/Select/Select';

describe('Select Component', () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2', disabled: true },
    { value: '3', label: 'Option 3' },
  ];

  it('renders the select component with options', () => {
    const { getByRole } = render(<Select options={options} />);
    const select = getByRole('combobox');
    expect(select).toBeInTheDocument();
    options.forEach(option => {
      expect(select).toHaveTextContent(option.label);
    });
  });

  it('calls onChange when an option is selected', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<Select options={options} onChange={handleChange} />);
    const select = getByRole('combobox');
    
    fireEvent.change(select, { target: { value: '1' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('renders the clear button and calls onClear when clicked', () => {
    const handleClear = jest.fn();
    const { getByRole, getByLabelText } = render(<Select options={options} isClearable onClear={handleClear} value="1" />);
    const select = getByRole('combobox');
    
    expect(select).toHaveValue('1');
    const clearButton = getByLabelText('Clear selection');
    fireEvent.click(clearButton);
    expect(handleClear).toHaveBeenCalled();
  });

  it('shows error message when error prop is provided', () => {
    const { getByText } = render(<Select options={options} error="This is an error" />);
    expect(getByText('This is an error')).toBeInTheDocument();
  });

  it('disables the select component when disabled prop is set', () => {
    const { getByRole } = render(<Select options={options} disabled />);
    const select = getByRole('combobox');
    expect(select).toBeDisabled();
  });
});
