import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import ScrollToTopButton from '../../../components/ScrollToTopButton/ScrollToTopButton';

describe('ScrollToTopButton', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'scrollTo', { value: jest.fn(), writable: true });
  });

  it('renders the button', () => {
    const { getByLabelText } = render(<ScrollToTopButton />);
    expect(getByLabelText('Scroll to top')).toBeInTheDocument();
  });

  it('does not display the button initially', () => {
    const { getByLabelText } = render(<ScrollToTopButton showAt={100} />);
    expect(getByLabelText('Scroll to top')).toHaveClass('opacity-0');
  });

  it('shows the button when scrolling down', () => {
    const { getByLabelText } = render(<ScrollToTopButton showAt={100} />);
    fireEvent.scroll(window, { target: { pageYOffset: 150 } });
    expect(getByLabelText('Scroll to top')).toHaveClass('opacity-100');
  });

  it('scrolls to the top when clicked', () => {
    const { getByLabelText } = render(<ScrollToTopButton />);
    fireEvent.click(getByLabelText('Scroll to top'));
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
