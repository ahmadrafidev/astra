import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { XIcon } from 'lucide-react';

export interface SnackbarProps {
  message: string;
  className?: string;
  open: boolean;
  duration?: number;
  onClose: () => void;
  variant?: 'info' | 'success' | 'warning' | 'error';
  action?: React.ReactNode;
  showCloseButton?: boolean;
  icon?: React.ReactNode
}

const Snackbar: React.FC<SnackbarProps> = ({
  message,
  open,
  duration = 3000,
  onClose,
  className = '',
  variant = 'info',
  action,
  showCloseButton = false,
  icon
}) => {
  const [isVisible, setIsVisible] = useState(open);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setIsVisible(open);
  }, [open]);

  useEffect(() => {
    if (isVisible && duration !== Infinity) {
      timerRef.current = setTimeout(() => {
        setIsVisible(false);
      }, duration);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isVisible, duration]);

  useEffect(() => {
    if (!isVisible) {
      const transitionDuration = 300; 
      const closeTimer = setTimeout(() => {
        onClose();
      }, transitionDuration);

      return () => clearTimeout(closeTimer);
    }
  }, [isVisible, onClose]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const variantClasses = {
    info: 'bg-blue-600',
    success: 'bg-green-600',
    warning: 'bg-yellow-400',
    error: 'bg-red-500',
  };

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 text-white rounded shadow-md transition-all duration-300 ease-in-out flex items-center justify-between max-w-md w-full ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      } ${variantClasses[variant]} ${className}`}
      role="alert"
      aria-live="assertive"
    >
      {icon && <div className="mr-1">{icon}</div>}
      <div className="mr-2 flex-grow">{message}</div>
      {action && <div className="mr-2">{action}</div>}
      {showCloseButton && (
        <button
          onClick={handleClose}
          className="p-1 rounded-full hover:bg-white/20 transition-colors duration-200"
          aria-label="Close"
        >
          <XIcon size={18} />
        </button>
      )}
    </div>
  );
};

Snackbar.displayName = "Snackbar";
export default Snackbar;
