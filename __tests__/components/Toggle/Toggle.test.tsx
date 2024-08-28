import React, { useRef } from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Toggle, { ToggleProps } from '../../../components/Toggle/Toggle';

describe('Toggle Component', () => {
  const setup = (props: Partial<ToggleProps> = {}) => {
    render(<Toggle {...props}>Toggle Button</Toggle>);
  };

  it('renders children correctly', () => {
    setup();
    expect(screen.getByText('Toggle Button')).toBeInTheDocument();
  });

  it('uses default on state correctly', () => {
    setup({ defaultOn: true });
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true');
  });

  it('handles click to toggle state', () => {
    setup();
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-pressed', 'false');

    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-pressed', 'true');

    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-pressed', 'false');
  });

  it('calls onChange with the correct state', () => {
    const handleChange = jest.fn();
    setup({ onChange: handleChange });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleChange).toHaveBeenCalledWith(true);
    fireEvent.click(button);
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  it('displays onIcon and offIcon correctly based on state', () => {
    setup({ onIcon: <span>On Icon</span>, offIcon: <span>Off Icon</span> });

    const button = screen.getByRole('button');
    expect(screen.getByText('Off Icon')).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.queryByText('Off Icon')).not.toBeInTheDocument();
    expect(screen.getByText('On Icon')).toBeInTheDocument();
  });

  it('hides the off icon when hideOffIcon is true', () => {
    setup({ offIcon: <span>Off Icon</span>, hideOffIcon: true });

    const button = screen.getByRole('button');
    expect(screen.queryByText('Off Icon')).not.toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.queryByText('Off Icon')).not.toBeInTheDocument();
  });

  it('exposes the toggle method through ref', () => {
    const TestComponent = () => {
      const ref = useRef<HTMLButtonElement & { toggle: () => void }>(null);
      return (
        <>
          <Toggle ref={ref} />
          <button onClick={() => ref.current?.toggle()}>Toggle from Outside</button>
        </>
      );
    };

    render(<TestComponent />);

    const toggleButton = screen.getByRole('button', { name: /toggle from outside/i });
    const toggle = screen.getByRole('button', { name: /toggle/i });

    expect(toggle).toHaveAttribute('aria-pressed', 'false');
    fireEvent.click(toggleButton);
    expect(toggle).toHaveAttribute('aria-pressed', 'true');
  });

  it('applies custom class names correctly', () => {
    setup({ className: 'custom-class', onClassName: 'on-class', offClassName: 'off-class' });

    const button = screen.getByRole('button');
    expect(button).toHaveClass('off-class');
    expect(button).toHaveClass('custom-class');

    fireEvent.click(button);
    expect(button).toHaveClass('on-class');
    expect(button).toHaveClass('custom-class');
  });
});
