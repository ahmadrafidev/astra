import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CheckCircle } from 'lucide-react';

import { List, ListItem } from '../../../components/List/List';

describe('List Component', () => {
  test('renders an unordered list by default', () => {
    render(
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </List>
    );
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    expect(list.tagName).toBe('UL');
  });

  test('renders an ordered list when variant is set to "ordered"', () => {
    render(
      <List variant="ordered">
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </List>
    );
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    expect(list.tagName).toBe('OL');
  });

  test('renders list items with icons', () => {
    render(
      <List items={[{ content: 'Item 1', icon: <CheckCircle /> }, { content: 'Item 2' }]} />
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getAllByRole('img').length).toBe(1);
  });
});
