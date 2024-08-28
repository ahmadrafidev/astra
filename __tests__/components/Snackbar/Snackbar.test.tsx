import React from 'react';

import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import Snackbar from '../../../components/Snackbar/Snackbar';

jest.useFakeTimers();

describe('Snackbar Component', () => {
  const onCloseMock = jest.fn();

  const setup = (props = {}) => {
    render(
      <Snackbar
        message="Test Snackbar"
        open={true}
        onClose={onCloseMock}
        {...props}
      />
    );
  };

  it('renders the snackbar message', () => {
    setup();
    expect(screen.getByText('Test Snackbar')).toBeInTheDocument();
  });

  it('closes the snackbar after the specified duration', () => {
    setup({ duration: 1000 });
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('does not close the snackbar if duration is Infinity', () => {
    setup({ duration: Infinity });
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(onCloseMock).not.toHaveBeenCalled();
  });

  it('renders with the correct variant class', () => {
    setup({ variant: 'success' });
    const snackbarElement = screen.getByRole('alert');
    expect(snackbarElement).toHaveClass('bg-green-600');
  });

  it('renders the close button when showCloseButton is true', () => {
    setup({ showCloseButton: true });
    expect(screen.getByLabelText('Close')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    setup({ showCloseButton: true });
    fireEvent.click(screen.getByLabelText('Close'));
    expect(onCloseMock).toHaveBeenCalled();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
  });
});
