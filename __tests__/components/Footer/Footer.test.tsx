import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../../../components/Footer/Footer';

describe('Footer Component', () => {
  test('renders with default content', () => {
    render(<Footer />);

    expect(screen.getByText(/Engineered with passion by/)).toBeInTheDocument();
    expect(screen.getByText(/© 2024 AstraUI/)).toBeInTheDocument();
  });

  test('contains link to Rafi\'s Twitter', () => {
    render(<Footer />);
    
    const link = screen.getByLabelText(/Visit Rafi's Twitter/);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://x.com/rafiwiranaa');
  });
});
