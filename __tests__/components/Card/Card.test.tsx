import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Card from '../../../components/Card/Card';

describe('Card Component', () => {
  test('renders with default props', () => {
    render(<Card title="Card Title" description="Card description" />);

    const cardTitle = screen.getByText('Card Title');
    const cardDescription = screen.getByText('Card description');

    expect(cardTitle).toBeInTheDocument();
    expect(cardDescription).toBeInTheDocument();
  });

  test('renders image when imageSrc is provided', () => {
    render(
      <Card
        title="Card Title"
        description="Card description"
        imageSrc="/image.jpg"
        imageAlt="Card Image"
      />
    );

    const cardImage = screen.getByAltText('Card Image');
    expect(cardImage).toBeInTheDocument();
  });

  test('applies correct styles for variant prop', () => {
    render(
      <Card
        title="Card Title"
        description="Card description"
        variant="hover"
      />
    );

    const card = screen.getByText('Card Title').closest('div');
    expect(card).toHaveClass('hover:shadow-lg');
  });

  test('uses correct HTML element for title', () => {
    render(
      <Card
        title="Card Title"
        description="Card description"
        titleElement="h2"
      />
    );

    const cardTitle = screen.getByText('Card Title');
    expect(cardTitle.tagName).toBe('H2');
  });
});
