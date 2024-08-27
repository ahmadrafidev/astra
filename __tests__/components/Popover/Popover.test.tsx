import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Popover from '../../../components/Popover/Popover';

describe('Popover Component', () => {
  test('renders correctly with default props', () => {
    render(
      <Popover content={<div>Popover Content</div>}>
        <button>Trigger</button>
      </Popover>
    );

    // Check if the trigger element is in the document
    expect(screen.getByRole('button', { name: /trigger/i })).toBeInTheDocument();
  });

  test('displays popover content on click trigger', () => {
    render(
      <Popover content={<div>Popover Content</div>} trigger="click">
        <button>Trigger</button>
      </Popover>
    );

    // Simulate click on the trigger
    fireEvent.click(screen.getByRole('button', { name: /trigger/i }));

    // Check if the popover content is displayed
    expect(screen.getByText(/popover content/i)).toBeInTheDocument();
  });

  test('closes popover content on click outside', () => {
    render(
      <div>
        <Popover content={<div>Popover Content</div>} trigger="click">
          <button>Trigger</button>
        </Popover>
        <button>Outside Button</button>
      </div>
    );

    // Simulate click on the trigger to open the popover
    fireEvent.click(screen.getByRole('button', { name: /trigger/i }));
    expect(screen.getByText(/popover content/i)).toBeInTheDocument();

    // Simulate click outside the popover
    fireEvent.mouseDown(screen.getByRole('button', { name: /outside button/i }));

    // Check if the popover content is closed
    expect(screen.queryByText(/popover content/i)).not.toBeInTheDocument();
  });

  test('closes popover content on pressing Escape key', () => {
    render(
      <Popover content={<div>Popover Content</div>} trigger="click">
        <button>Trigger</button>
      </Popover>
    );

    // Simulate click on the trigger to open the popover
    fireEvent.click(screen.getByRole('button', { name: /trigger/i }));
    expect(screen.getByText(/popover content/i)).toBeInTheDocument();

    // Simulate pressing Escape key
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });

    // Check if the popover content is closed
    expect(screen.queryByText(/popover content/i)).not.toBeInTheDocument();
  });

  test('does not close popover content on outside click if closeOnClickOutside is false', () => {
    render(
      <div>
        <Popover content={<div>Popover Content</div>} trigger="click" closeOnClickOutside={false}>
          <button>Trigger</button>
        </Popover>
        <button>Outside Button</button>
      </div>
    );

    // Simulate click on the trigger to open the popover
    fireEvent.click(screen.getByRole('button', { name: /trigger/i }));
    expect(screen.getByText(/popover content/i)).toBeInTheDocument();

    // Simulate click outside the popover
    fireEvent.mouseDown(screen.getByRole('button', { name: /outside button/i }));

    // Check if the popover content is still displayed
    expect(screen.getByText(/popover content/i)).toBeInTheDocument();
  });

  test('does not close popover content on pressing Escape if closeOnEsc is false', () => {
    render(
      <Popover content={<div>Popover Content</div>} trigger="click" closeOnEsc={false}>
        <button>Trigger</button>
      </Popover>
    );

    // Simulate click on the trigger to open the popover
    fireEvent.click(screen.getByRole('button', { name: /trigger/i }));
    expect(screen.getByText(/popover content/i)).toBeInTheDocument();

    // Simulate pressing Escape key
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });

    // Check if the popover content is still displayed
    expect(screen.getByText(/popover content/i)).toBeInTheDocument();
  });

  test('displays popover content on hover trigger', () => {
    render(
      <Popover content={<div>Popover Content</div>} trigger="hover">
        <button>Trigger</button>
      </Popover>
    );

    // Simulate mouse enter on the trigger
    fireEvent.mouseEnter(screen.getByRole('button', { name: /trigger/i }));

    // Check if the popover content is displayed
    expect(screen.getByText(/popover content/i)).toBeInTheDocument();
  });

  test('displays popover content on focus trigger', () => {
    render(
      <Popover content={<div>Popover Content</div>} trigger="focus">
        <button>Trigger</button>
      </Popover>
    );

    // Simulate focus on the trigger
    fireEvent.focus(screen.getByRole('button', { name: /trigger/i }));

    // Check if the popover content is displayed
    expect(screen.getByText(/popover content/i)).toBeInTheDocument();
  });
});
