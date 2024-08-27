import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';

describe('Breadcrumbs Component', () => {
  const mockItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  test('renders all breadcrumb items', () => {
    render(<Breadcrumbs items={mockItems} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('applies active styles to the last item', () => {
    render(<Breadcrumbs items={mockItems} />);

    const activeItem = screen.getByText('Contact');
    expect(activeItem).toHaveClass('font-semibold');
    expect(activeItem).toHaveClass('text-gray-900');
  });

  test('renders custom separator', () => {
    render(<Breadcrumbs items={mockItems} separator={<span>|</span>} />);

    expect(screen.getAllByText('|')).toHaveLength(2);
  });

  test('renders only the last maxItems items', () => {
    render(<Breadcrumbs items={mockItems} maxItems={2} />);

    expect(screen.queryByText('Home')).not.toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
