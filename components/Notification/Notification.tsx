import React from 'react';

export interface NotificationProps {
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    onClose: () => void;
    className?: string;
}

const notificationStyles = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
};

const Notification: React.FC<NotificationProps> = ({ message, type, onClose, className = '' }) => {
    return (
        <div className={`p-4 rounded ${notificationStyles[type]} ${className}`} role="alert" aria-live="assertive">
            <span>{message}</span>
            <button onClick={onClose} className="ml-4">X</button>
        </div>
    );
};

Notification.displayName = "Notification";
export default Notification;
