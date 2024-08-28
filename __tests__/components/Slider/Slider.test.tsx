import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Slider from '../../../components/Slider/Slider';

describe('Slider Component', () => {
  it('renders with correct value and min/max attributes', () => {
    const { getByRole } = render(<Slider value={50} min={0} max={100} onChange={jest.fn()} />);
    const slider = getByRole('slider');
    expect(slider).toHaveAttribute('value', '50');
    expect(slider).toHaveAttribute('min', '0');
    expect(slider).toHaveAttribute('max', '100');
  });

  it('calls onChange when slider value is changed', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<Slider value={50} min={0} max={100} onChange={handleChange} />);
    const slider = getByRole('slider');

    fireEvent.change(slider, { target: { value: '60' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('applies additional class names', () => {
    const { getByRole } = render(<Slider value={50} min={0} max={100} onChange={jest.fn()} className="custom-slider" />);
    const slider = getByRole('slider');
    expect(slider).toHaveClass('custom-slider');
  });

  it('displays with correct aria attributes', () => {
    const { getByRole } = render(<Slider value={50} min={0} max={100} onChange={jest.fn()} aria-label="Volume control" />);
    const slider = getByRole('slider');
    expect(slider).toHaveAttribute('aria-label', 'Volume control');
  });
});
