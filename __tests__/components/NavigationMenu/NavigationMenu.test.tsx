import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import NavigationMenu, { NavigationMenuProps } from '../../../components/NavigationMenu/NavigationMenu';

describe('NavigationMenu Component', () => {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
  ];

  const setup = (props: Partial<NavigationMenuProps> = {}) => {
    render(
      <NavigationMenu
        links={links}
        {...props}
      />
    );
  };

  test('renders navigation links', () => {
    setup();
    links.forEach(link => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });
  });

  test('renders hero content when provided', () => {
    const hero = <div>Hero Content</div>;
    setup({ hero });
    expect(screen.getByText('Hero Content')).toBeInTheDocument();
  });

  test('calls toggleSidebar when sidebar toggle button is clicked', () => {
    const toggleSidebar = jest.fn();
    setup({ toggleSidebar, isSidebarOpen: false });
    
    const toggleButton = screen.getByRole('button', { name: /open sidebar/i });
    fireEvent.click(toggleButton);

    expect(toggleSidebar).toHaveBeenCalled();
  });

  test('displays correct icon based on isSidebarOpen prop', () => {
    setup({ toggleSidebar: jest.fn(), isSidebarOpen: true });

    // Verify that the 'close' icon is shown when sidebar is open
    expect(screen.getByLabelText(/close sidebar/i)).toBeInTheDocument();
  });

  test('logs props in debug mode', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    setup({ debug: true });
    expect(consoleSpy).toHaveBeenCalledWith('NavigationMenu props:', expect.any(Object));
    consoleSpy.mockRestore();
  });
});
