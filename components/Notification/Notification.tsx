import React, { useState } from 'react';

/**
 * Props for the Notification component.
 * 
 * @typedef {Object} NotificationProps
 * @property {string} message - The message to display in the notification.
 * @property {() => void} onClose - Function to call when the notification is closed.
 * @property {string} [className] - Additional class names for styling.
 * @property {React.ReactNode} [icon] - Custom icon to display in the notification.
 */
export interface NotificationProps {
  message: string;
  onClose: () => void;
  className?: string;
  icon?: React.ReactNode;
}

/**
 * Notification component for displaying a dismissible notification with swipe-to-dismiss functionality.
 * 
 * @component
 * @param {NotificationProps} props - Props for the Notification component.
 * @returns {JSX.Element | null} The rendered Notification component.
 */
const Notification: React.FC<NotificationProps> = ({
  message,
  onClose,
  className,
  icon,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    setIsDeleted(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 500); 
  };

  const handleUndo = () => {
    setIsDeleted(false);
    setIsVisible(true);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`p-4 rounded-lg shadow-lg flex items-center justify-between transition-opacity duration-300 ease-in-out ${isDeleted ? 'opacity-0' : 'opacity-100'} ${className}`}
      role="alert"
      aria-live="assertive"
      onTouchEnd={handleDelete}
    >
      <div className="flex items-center">
        {icon && <span className="mr-3">{icon}</span>}
        <span className="text-sm font-medium">{message}</span>
      </div>
      {isDeleted && (
        <button
          onClick={handleUndo}
          className="ml-4 p-1 rounded-full text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          aria-label="Undo delete"
        >
          Undo
        </button>
      )}
    </div>
  );
};

Notification.displayName = "Notification";
export default Notification;
