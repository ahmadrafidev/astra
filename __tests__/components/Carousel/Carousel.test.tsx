import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Carousel from '../../../components/Carousel/Carousel';

describe('Carousel Component', () => {
  const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg'];

  test('renders all images', () => {
    render(<Carousel images={images} />);

    images.forEach((src, index) => {
      const image = screen.getByAltText(`Slide ${index + 1}`);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', src);
    });
  });

  test('navigates to next slide on next arrow click', () => {
    render(<Carousel images={images} showArrows={true} />);

    const nextButton = screen.getByLabelText('Next slide');
    fireEvent.click(nextButton);

    const secondImage = screen.getByAltText('Slide 2');
    expect(secondImage).toBeInTheDocument();
  });

  test('navigates to previous slide on previous arrow click', () => {
    render(<Carousel images={images} showArrows={true} />);

    const nextButton = screen.getByLabelText('Next slide');
    fireEvent.click(nextButton);

    const prevButton = screen.getByLabelText('Previous slide');
    fireEvent.click(prevButton);

    const firstImage = screen.getByAltText('Slide 1');
    expect(firstImage).toBeInTheDocument();
  });

  test('shows correct dot as active', () => {
    render(<Carousel images={images} showDots={true} />);

    const dots = screen.getAllByRole('button');
    fireEvent.click(dots[1]);

    expect(dots[1]).toHaveClass('bg-blue-500');
  });
});
