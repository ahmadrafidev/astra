'use client'

import React, { ReactNode, useState } from 'react';
import { AlertCircle, CheckCircle, XCircle, AlertTriangle, X } from 'lucide-react';

type AlertType = 'info' | 'success' | 'warning' | 'error';

interface AlertProps {
  type: AlertType;
  title?: string;
  children?: ReactNode;
  isDismissible?: boolean;
  className?: string;
}

const alertStyles: Record<AlertType, string> = {
  info: "bg-blue-50 border-blue-500 text-blue-700",
  success: "bg-green-50 border-green-500 text-green-700",
  warning: "bg-yellow-50 border-yellow-500 text-yellow-700",
  error: "bg-red-50 border-red-500 text-red-700",
};

const alertIcons: Record<AlertType, React.ReactNode> = {
  info: <AlertCircle className="w-5 h-5" />,
  success: <CheckCircle className="w-5 h-5" />,
  warning: <AlertTriangle className="w-5 h-5" />,
  error: <XCircle className="w-5 h-5" />,
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ type, title, children, isDismissible = false, className }, ref) => {

    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
      <div
        ref={ref}
        role="alert"
        className={`flex p-4 rounded-lg ${alertStyles[type]} ${className}`}
      >
        <div className="flex-shrink-0 mr-3 mt-0.5">
          {alertIcons[type]}
        </div>
        <div className="flex-grow">
          {title && <h3 className="text-base font-normal">{title}</h3>}
          <div className="text-sm">{children}</div>
        </div>
        {isDismissible && (
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 ml-3 hover:text-gray-700 focus:outline-none"
            aria-label="Dismiss"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = "Alert";

const AlertTitle: React.FC<{ children: ReactNode }> = ({ children }) => (
  <h3 className="text-base font-normal mb-1">{children}</h3>
);

const AlertContent: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="text-sm font-normal">{children}</div>
);

export { Alert, AlertTitle, AlertContent };
export type { AlertProps, AlertType };
