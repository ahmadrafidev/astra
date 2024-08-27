import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from '../../../components/Header/Header';

describe('Header Component', () => {
  const setActiveSectionMock = jest.fn();
  const toggleSidebarMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    render(<Header setActiveSection={setActiveSectionMock} />);
    
    expect(screen.getByLabelText('Main Navigation')).toBeInTheDocument();
  });

  test('changes background on scroll', () => {
    render(<Header setActiveSection={setActiveSectionMock} />);
    
    window.scrollY = 100;
    fireEvent.scroll(window);
    
    expect(screen.getByLabelText('Main Navigation')).toHaveClass('bg-transparent backdrop-blur');
  });

  test('opens and closes mobile menu', () => {
    render(<Header setActiveSection={setActiveSectionMock} />);
    
    const menuButton = screen.getByLabelText('Toggle Mobile Menu');
    fireEvent.click(menuButton);
    
    expect(screen.getByLabelText('Mobile Navigation')).toBeVisible();
    
    fireEvent.click(menuButton);
    expect(screen.queryByLabelText('Mobile Navigation')).not.toBeInTheDocument();
  });

  test('calls setActiveSection on section link click', () => {
    render(<Header setActiveSection={setActiveSectionMock} />);
    
    const aboutLink = screen.getByLabelText('About');
    fireEvent.click(aboutLink);
    
    expect(setActiveSectionMock).toHaveBeenCalledWith('about');
  });
});
