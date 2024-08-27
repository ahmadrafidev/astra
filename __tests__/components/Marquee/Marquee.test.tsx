import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Marquee from '../../../components/Marquee/Marquee';

describe('Marquee Component', () => {
  test('renders marquee text', () => {
    render(<Marquee text="Scrolling Text" />);
    expect(screen.getByText('Scrolling Text')).toBeInTheDocument();
  });

  test('applies correct animation direction', () => {
    render(<Marquee text="Scrolling Text" direction="right" />);
    const marquee = screen.getByText('Scrolling Text').parentElement;
    expect(marquee).toHaveStyle('animation-direction: normal');
  });
});
