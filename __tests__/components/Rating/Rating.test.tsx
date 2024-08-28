import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Rating from '../../../components/Rating/Rating';

describe('Rating Component', () => {
  it('renders the correct number of stars based on maxRating', () => {
    const { getAllByRole } = render(<Rating maxRating={5} />);
    const stars = getAllByRole('button');
    expect(stars.length).toBe(5);
  });

  it('calls onRate with correct value when a star is clicked', () => {
    const handleRate = jest.fn();
    const { getAllByRole } = render(<Rating maxRating={5} onRate={handleRate} />);
    const stars = getAllByRole('button');
    fireEvent.click(stars[2]); // Click the third star
    expect(handleRate).toHaveBeenCalledWith(3);
  });

  it('does not allow rating if readOnly is true', () => {
    const handleRate = jest.fn();
    const { getAllByRole } = render(<Rating maxRating={5} onRate={handleRate} readOnly />);
    const stars = getAllByRole('button');
    fireEvent.click(stars[2]); // Click the third star
    expect(handleRate).not.toHaveBeenCalled();
  });

  it('clears the rating if allowClear is true and the star is clicked again', () => {
    const handleRate = jest.fn();
    const { getAllByRole } = render(<Rating maxRating={5} onRate={handleRate} allowClear />);
    const stars = getAllByRole('button');
    fireEvent.click(stars[2]); // Click the third star
    fireEvent.click(stars[2]); // Click the third star again to clear
    expect(handleRate).toHaveBeenCalledWith(null);
  });
});
