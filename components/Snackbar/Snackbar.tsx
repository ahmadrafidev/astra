// components/Snackbar/Snackbar.tsx
import React, { useEffect } from 'react';

export interface SnackbarProps {
    message: string;
    open: boolean;
    duration?: number; 
    onClose: () => void;
    className?: string;
}

const Snackbar: React.FC<SnackbarProps> = ({ message, open, duration = 3000, onClose, className }) => {
    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [open, duration, onClose]);

    return (
        <div
            className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gray-800 text-white rounded shadow-md transition-transform ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            } ${className}`}
            style={{ transitionDuration: '300ms' }}
            role="status"
            aria-live="polite"
        >
            {message}
        </div>
    );
};

Snackbar.displayName = "Snackbar";
export default Snackbar;
