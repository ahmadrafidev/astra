import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Input from '../../../components/Input/Input';

describe('Input Component', () => {
  const onChangeMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders with default props', () => {
    render(<Input value="" onChange={onChangeMock} />);
    
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('calls onChange when input value changes', () => {
    render(<Input value="" onChange={onChangeMock} />);
    
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New Value' } });
    expect(onChangeMock).toHaveBeenCalledWith(expect.anything());
  });

  test('toggles password visibility when icon is clicked', () => {
    render(<Input type="password" value="password" onChange={onChangeMock} icon={<span>icon</span>} />);
    
    const icon = screen.getByText('icon');
    fireEvent.click(icon);
    
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text');
    
    fireEvent.click(icon);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'password');
  });
});
