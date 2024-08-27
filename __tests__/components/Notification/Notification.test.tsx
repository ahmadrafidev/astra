import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Notification, { NotificationProps } from '../../../components/Notification/Notification';

describe('Notification Component', () => {
  const setup = (props: Partial<NotificationProps> = {}) => {
    const onCloseMock = jest.fn();
    render(
      <Notification
        message="Test message"
        onClose={onCloseMock}
        {...props}
      />
    );
    return { onCloseMock };
  };

  test('renders the notification with message and icon', () => {
    const icon = <span data-testid="icon">Icon</span>;
    setup({ icon });

    expect(screen.getByText('Test message')).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  test('calls onClose when notification is closed', () => {
    const { onCloseMock } = setup();
    fireEvent.touchEnd(screen.getByRole('alert'));
    setTimeout(() => {
      expect(onCloseMock).toHaveBeenCalled();
    }, 500);
  });

  test('swipe-to-dismiss functionality works correctly', () => {
    const { onCloseMock } = setup();
    fireEvent.touchEnd(screen.getByRole('alert'));
    setTimeout(() => {
      expect(onCloseMock).toHaveBeenCalled();
      expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    }, 500);
  });

  test('undo deletion restores visibility', () => {
    setup();
    fireEvent.touchEnd(screen.getByRole('alert'));

    setTimeout(() => {
      const undoButton = screen.getByRole('button', { name: /undo delete/i });
      fireEvent.click(undoButton);

      expect(screen.getByRole('alert')).toBeVisible();
    }, 500);
  });
});
