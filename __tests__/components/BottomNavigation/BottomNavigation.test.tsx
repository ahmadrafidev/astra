import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import BottomNavigation from '../../../components/BottomNavigation/BottomNavigation';

describe('BottomNavigation Component', () => {
  const mockItems = [
    { icon: () => <svg data-testid="home-icon" />, label: 'Home' },
    { icon: () => <svg data-testid="search-icon" />, label: 'Search' },
    { icon: () => <svg data-testid="profile-icon" />, label: 'Profile' },
  ];

  const mockOnItemClick = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders all navigation items', () => {
    render(
      <BottomNavigation
        items={mockItems}
        activeItem="Home"
        onItemClick={mockOnItemClick}
      />
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByTestId('home-icon')).toBeInTheDocument();
    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
    expect(screen.getByTestId('profile-icon')).toBeInTheDocument();
  });

  test('applies active styles to the active item', () => {
    render(
      <BottomNavigation
        items={mockItems}
        activeItem="Search"
        onItemClick={mockOnItemClick}
      />
    );

    const activeItem = screen.getByText('Search');
    expect(activeItem).toHaveClass('text-gray-900');
    expect(activeItem).toHaveClass('dark:text-gray-50');
  });

  test('calls onItemClick with the correct label when an item is clicked', () => {
    render(
      <BottomNavigation
        items={mockItems}
        activeItem="Home"
        onItemClick={mockOnItemClick}
      />
    );

    const profileItem = screen.getByText('Profile');
    fireEvent.click(profileItem);

    expect(mockOnItemClick).toHaveBeenCalledWith('Profile');
    expect(mockOnItemClick).toHaveBeenCalledTimes(1);
  });
});
