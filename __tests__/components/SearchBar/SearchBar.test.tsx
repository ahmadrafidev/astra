import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import SearchBar from '../../../components/SearchBar/SearchBar';

jest.useFakeTimers();

describe('SearchBar', () => {
  it('renders the input element', () => {
    render(<SearchBar onSearch={jest.fn()} />);
    const input = screen.getByPlaceholderText('Search AstraUI');
    expect(input).toBeInTheDocument();
  });

  it('calls onSearch with the correct query after debounce', () => {
    const handleSearch = jest.fn();
    render(<SearchBar onSearch={handleSearch} debounceTime={300} />);
    const input = screen.getByPlaceholderText('Search AstraUI');

    fireEvent.change(input, { target: { value: 'test' } });
    jest.advanceTimersByTime(300);

    expect(handleSearch).toHaveBeenCalledWith('test');
  });

  it('renders with custom icon and placeholder', () => {
    render(<SearchBar onSearch={jest.fn()} icon={<div>Custom Icon</div>} placeholder="Search here" />);
    const icon = screen.getByText('Custom Icon');
    const input = screen.getByPlaceholderText('Search here');

    expect(icon).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('applies additional class names', () => {
    render(<SearchBar onSearch={jest.fn()} className="custom-class" />);
    const inputContainer = screen.getByRole('textbox').closest('div');
    expect(inputContainer).toHaveClass('custom-class');
  });
});
