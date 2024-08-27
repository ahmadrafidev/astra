import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Dock from '../../../components/Dock/Dock';

describe('Dock Component', () => {
  const mockItems = [
    { icon: () => <svg data-testid="home-icon" />, label: 'Home' },
    { icon: () => <svg data-testid="search-icon" />, label: 'Search' },
    { icon: () => <svg data-testid="profile-icon" />, label: 'Profile', onClick: jest.fn() },
  ];

  test('renders all dock items', () => {
    render(<Dock items={mockItems} />);

    expect(screen.getByTestId('home-icon')).toBeInTheDocument();
    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
    expect(screen.getByTestId('profile-icon')).toBeInTheDocument();
  });

  test('calls onClick handler when dock item is clicked', () => {
    render(<Dock items={mockItems} />);

    const profileItem = screen.getByLabelText('Profile');
    fireEvent.click(profileItem);

    expect(mockItems[2].onClick).toHaveBeenCalled();
  });

  test('applies hover effect based on hoverEffect prop', () => {
    render(<Dock items={mockItems} hoverEffect="floating" />);

    const profileItem = screen.getByLabelText('Profile');
    expect(profileItem.firstChild).toHaveClass('transition-transform hover:scale-110');
  });
});
