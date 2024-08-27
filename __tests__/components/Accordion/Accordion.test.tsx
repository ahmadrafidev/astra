import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Accordion } from './../../../components/Accordion/Accordion';
import { AccordionItem } from './../../../components/Accordion/AccordionItem';

describe('Accordion Component', () => {
  test('renders without crashing', () => {
    render(
      <Accordion>
        <AccordionItem title="Item 1">Content 1</AccordionItem>
        <AccordionItem title="Item 2">Content 2</AccordionItem>
      </Accordion>
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  test('toggles an item when clicked in single selection mode', async () => {
    render(
      <Accordion selectionMode="single">
        <AccordionItem title="Item 1">Content 1</AccordionItem>
        <AccordionItem title="Item 2">Content 2</AccordionItem>
      </Accordion>
    );

    const item1 = screen.getByText('Item 1');
    // Initially content should not be in the document
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();

    // Click to open
    fireEvent.click(item1);
    // After clicking, content should be visible
    expect(await screen.findByText('Content 1')).toBeVisible();

    // Click again to close
    fireEvent.click(item1);
    // After clicking again, content should not be in the document
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });

  test('allows multiple items to be open in multiple selection mode', async () => {
    render(
      <Accordion selectionMode="multiple">
        <AccordionItem title="Item 1">Content 1</AccordionItem>
        <AccordionItem title="Item 2">Content 2</AccordionItem>
      </Accordion>
    );

    const item1 = screen.getByText('Item 1');
    const item2 = screen.getByText('Item 2');

    // Initially, neither content should be in the document
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();

    // Open first item
    fireEvent.click(item1);
    expect(await screen.findByText('Content 1')).toBeVisible();

    // Open second item without closing the first one
    fireEvent.click(item2);
    expect(await screen.findByText('Content 2')).toBeVisible();
    expect(screen.getByText('Content 1')).toBeVisible();
  });
});
