import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Avatar from '../../../components/Avatar/Avatar';

describe('Avatar Component', () => {
  it('renders an image with the correct src and alt attributes', () => {
    render(<Avatar src="/images/horse-1.png" alt="User Avatar" />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('src', '/avatar.png');
    expect(imgElement).toHaveAttribute('alt', 'User Avatar');
  });

  it('applies the correct size class based on the size prop', () => {
    render(<Avatar src="/images/horse-1.png" size="lg" />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('width', '42');
    expect(imgElement).toHaveAttribute('height', '42');
  });

  it('renders a fallback content when the image fails to load', () => {
    render(<Avatar src="/invalid.png" fallback={<span>Fallback</span>} />);
    const imgElement = screen.getByRole('img');
    fireEvent.error(imgElement);
    expect(screen.getByText('Fallback')).toBeInTheDocument();
  });

  it('handles the click event when onClick is provided', () => {
    const handleClick = jest.fn();
    render(<Avatar src="/avatar.png" onClick={handleClick} />);
    const imgElement = screen.getByRole('img');
    fireEvent.click(imgElement);
    expect(handleClick).toHaveBeenCalled();
  });

  it('applies the correct shape class based on the shape prop', () => {
    render(<Avatar src="/images/horse-1.png" shape="square" />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveClass('rounded-lg');
  });

  it('applies additional class names provided via the className prop', () => {
    render(<Avatar src="/images/horse-1.png" className="custom-class" />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveClass('custom-class');
  });
});
