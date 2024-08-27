import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Dropdown from '../../../components/Dropdown/Dropdown';

describe('Dropdown Component', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const onSelectMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders with placeholder text', () => {
    render(<Dropdown options={options} onSelect={onSelectMock} />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Select an option');
  });

  test('opens dropdown when button is clicked', () => {
    render(<Dropdown options={options} onSelect={onSelectMock} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const dropdownOptions = screen.getByRole('listbox');
    expect(dropdownOptions).toBeVisible();
  });

  test('closes dropdown when an option is selected', () => {
    render(<Dropdown options={options} onSelect={onSelectMock} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const option = screen.getByText('Option 1');
    fireEvent.click(option);

    expect(onSelectMock).toHaveBeenCalledWith('Option 1');
    expect(button).toHaveTextContent('Option 1');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  test('closes dropdown when clicking outside', () => {
    render(<Dropdown options={options} onSelect={onSelectMock} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);

    fireEvent.mouseDown(document);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  test('closes dropdown when Escape key is pressed', () => {
    render(<Dropdown options={options} onSelect={onSelectMock} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    fireEvent.keyDown(button, { key: 'Escape', code: 'Escape' });
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  test('selects option with Enter key', () => {
    render(<Dropdown options={options} onSelect={onSelectMock} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const option = screen.getByText('Option 2');
    fireEvent.keyDown(option, { key: 'Enter', code: 'Enter' });

    expect(onSelectMock).toHaveBeenCalledWith('Option 2');
    expect(button).toHaveTextContent('Option 2');
  });
});
