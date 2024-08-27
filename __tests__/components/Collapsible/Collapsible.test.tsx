import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Collapsible from '../../../components/Collapsible/Collapsible';

describe('Collapsible Component', () => {
  test('renders with title and children', () => {
    render(<Collapsible title="Section Title">Content</Collapsible>);

    expect(screen.getByText('Section Title')).toBeInTheDocument();
    expect(screen.getByText('Content')).not.toBeVisible();
  });

  test('toggles open and close on header click', () => {
    render(<Collapsible title="Section Title">Content</Collapsible>);

    const header = screen.getByRole('button', { name: /section title/i });
    fireEvent.click(header);

    expect(screen.getByText('Content')).toBeVisible();

    fireEvent.click(header);
    expect(screen.getByText('Content')).not.toBeVisible();
  });

  test('does not toggle when disabled', () => {
    render(<Collapsible title="Section Title" disabled>Content</Collapsible>);

    const header = screen.getByRole('button', { name: /section title/i });
    fireEvent.click(header);

    expect(screen.getByText('Content')).not.toBeVisible();
  });

  test('calls onOpenChange callback with correct state', () => {
    const onOpenChange = jest.fn();
    render(<Collapsible title="Section Title" onOpenChange={onOpenChange}>Content</Collapsible>);

    const header = screen.getByRole('button', { name: /section title/i });
    fireEvent.click(header);

    expect(onOpenChange).toHaveBeenCalledWith(true);
  });
});
