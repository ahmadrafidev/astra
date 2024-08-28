import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Switch, { SwitchProps } from '../../../components/Switch/Switch';

describe('Switch Component', () => {
  const setup = (props: Partial<SwitchProps> = {}) => {
    render(<Switch checked={false} onChange={() => {}} {...props} />);
  };

  it('renders with default properties', () => {
    setup();
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toBeInTheDocument();
    expect(switchElement).not.toBeChecked();
  });

  it('renders as checked when the checked prop is true', () => {
    setup({ checked: true });
    expect(screen.getByRole('switch')).toBeChecked();
  });

  it('renders with the correct size', () => {
    setup({ size: 'large' });
    const switchElement = screen.getByRole('switch');
    expect(switchElement.nextSibling).toHaveClass('w-14 h-7');
  });

  it('calls onChange when toggled', () => {
    const onChange = jest.fn();
    setup({ onChange });
    fireEvent.click(screen.getByRole('switch'));
    expect(onChange).toHaveBeenCalled();
  });

  it('does not call onChange when disabled', () => {
    const onChange = jest.fn();
    setup({ onChange, disabled: true });
    fireEvent.click(screen.getByRole('switch'));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('has correct aria attributes when checked', () => {
    setup({ checked: true, ariaLabel: 'Test Switch' });
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('aria-checked', 'true');
    expect(switchElement).toHaveAttribute('aria-label', 'Test Switch');
  });

  it('applies custom class names', () => {
    setup({ className: 'custom-class' });
    const switchElement = screen.getByRole('switch');
    expect(switchElement.parentElement).toHaveClass('custom-class');
  });
});
