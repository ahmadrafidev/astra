import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Tooltip from '../../../components/Tooltip/Tooltip';

describe('Tooltip Component', () => {
  it('renders the children', () => {
    render(
      <Tooltip text="Tooltip text">
        <button>Hover over me</button>
      </Tooltip>
    );
    
    expect(screen.getByText('Hover over me')).toBeInTheDocument();
  });

  it('shows the tooltip text on hover', () => {
    render(
      <Tooltip text="Tooltip text">
        <button>Hover over me</button>
      </Tooltip>
    );

    const button = screen.getByText('Hover over me');
    fireEvent.mouseEnter(button);

    expect(screen.getByRole('tooltip')).toBeVisible();
    expect(screen.getByText('Tooltip text')).toBeInTheDocument();
  });

  it('hides the tooltip text when not hovering', () => {
    render(
      <Tooltip text="Tooltip text">
        <button>Hover over me</button>
      </Tooltip>
    );

    const button = screen.getByText('Hover over me');
    fireEvent.mouseLeave(button);

    expect(screen.getByRole('tooltip')).not.toBeVisible();
  });

  it('shows the tooltip text on focus', () => {
    render(
      <Tooltip text="Tooltip text">
        <button>Hover over me</button>
      </Tooltip>
    );

    const button = screen.getByText('Hover over me');
    fireEvent.focus(button);

    expect(screen.getByRole('tooltip')).toBeVisible();
    expect(screen.getByText('Tooltip text')).toBeInTheDocument();
  });

  it('hides the tooltip text on blur', () => {
    render(
      <Tooltip text="Tooltip text">
        <button>Hover over me</button>
      </Tooltip>
    );

    const button = screen.getByText('Hover over me');
    fireEvent.focus(button);
    fireEvent.blur(button);

    expect(screen.getByRole('tooltip')).not.toBeVisible();
  });

  it('applies the correct variant class for arrow-bottom', () => {
    const { container } = render(
      <Tooltip text="Tooltip text" variant="arrow-bottom">
        <button>Hover over me</button>
      </Tooltip>
    );

    const tooltip = container.querySelector('[role="tooltip"]');
    expect(tooltip).toHaveClass('top-full mt-2');
  });

  it('applies the correct variant class for arrow-top', () => {
    const { container } = render(
      <Tooltip text="Tooltip text" variant="arrow-top">
        <button>Hover over me</button>
      </Tooltip>
    );

    const tooltip = container.querySelector('[role="tooltip"]');
    expect(tooltip).toHaveClass('bottom-full mb-2');
  });
});
