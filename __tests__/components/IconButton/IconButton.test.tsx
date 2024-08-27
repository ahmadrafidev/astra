import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Trash } from 'lucide-react';

import { IconButton } from '../../../components/IconButton/IconButton';

describe('IconButton Component', () => {
  const onClickMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders with default props', () => {
    render(<IconButton icon={Trash} onClick={onClickMock} />);
    
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('inline-flex items-center justify-center');
  });

  test('applies correct styles based on variant and size', () => {
    render(<IconButton icon={Trash} variant="outlinedBorder" size="lg" onClick={onClickMock} />);
    
    expect(screen.getByRole('button')).toHaveClass('p-3 border text-blue-500');
  });

  test('calls onClick when button is clicked', () => {
    render(<IconButton icon={Trash} onClick={onClickMock} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(onClickMock).toHaveBeenCalled();
  });
});
