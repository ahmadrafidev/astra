import React from 'react';
import { 
  AlertCircle, 
  Wifi, 
  FileWarning, 
  RefreshCw,
  Lock,
  Timer,
  Clock,
  Server,
  CreditCard 
} from 'lucide-react';

/**
 * Type of errors that the Error component can display.
 * 
 * @typedef {'upload' | 'network' | 'filesize' | 'authentication' | 'limiter' | 'timeout' | 'server' | 'payment'} ErrorType
 */
export type ErrorType = 'upload' | 'network' | 'filesize' | 'authentication'| 'limiter'| 'timeout'| 'server' | 'payment';

/**
 * Props for the Error component.
 * 
 * @typedef {Object} ErrorProps
 * @property {ErrorType} type - The type of error to display.
 * @property {string} title - The title of the error message.
 * @property {string} message - The detailed error message.
 * @property {string} [className] - Additional class names for custom styling.
 * @property {{ label: string; onClick: () => void }} primaryAction - Primary action for the error.
 * @property {{ label: string; onClick: () => void }} [secondaryAction] - Secondary action for the error.
 */
export interface ErrorProps {
  type: ErrorType;
  title: string;
  message: string;
  className?: string;
  primaryAction: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
}

const alertIcons: Record<ErrorType, React.ReactNode> = {
  upload: <AlertCircle className="w-9 h-9 text-red-500" />,
  network: <Wifi className="w-9 h-9 text-red-500" />,
  filesize: <FileWarning className="w-9 h-9 text-red-500" />,
  authentication: <Lock className="w-9 h-9 text-red-500" />,
  limiter: <Timer className="w-9 h-9 text-red-500" />,
  timeout: <Clock className="w-9 h-9 text-red-500" />,
  server: <Server className="w-9 h-9 text-red-500" />,
  payment: <CreditCard className="w-9 h-9 text-red-500" />,
};

/**
 * Error component for displaying error messages with actions.
 * 
 * @component
 * @param {ErrorProps} props - Props for the Error component.
 * @returns {JSX.Element} The rendered Error component.
 */
const Error: React.FC<ErrorProps> = ({
  type,
  title,
  message,
  className,
  primaryAction,
  secondaryAction,
}) => {
  return (
    <div className={`rounded-lg shadow-md w-64 p-4 flex flex-col items-center ${className}`} role="alert">
      <div className="mb-4">
        {alertIcons[type]}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1 text-center">{title}</h3>
      <p className="text-sm text-gray-700 text-center mb-4">{message}</p>
      <div className="flex justify-center space-x-2 w-full">
        {secondaryAction && (
          <button
            type="button" 
            onClick={secondaryAction.onClick}
            className="px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            {secondaryAction.label}
          </button>
        )}
        <button
          type="button" 
          onClick={primaryAction.onClick}
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          {primaryAction.label}
        </button>
      </div>
    </div>
  );
};

Error.displayName = "Error";
export default Error;
