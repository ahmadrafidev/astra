import React from 'react';
import { AlertCircle, Wifi, FileWarning, RefreshCw } from 'lucide-react';

export type AlertType = 'upload' | 'network' | 'filesize';

export interface ErrorProps {
  type: AlertType;
  title: string;
  message: string;
  primaryAction: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

const alertIcons: Record<AlertType, React.ReactNode> = {
  upload: <AlertCircle className="w-8 h-8 text-red-500" />,
  network: <Wifi className="w-8 h-8 text-red-500" />,
  filesize: <FileWarning className="w-8 h-8 text-red-500" />,
};

const Error: React.FC<ErrorProps> = ({
  type,
  title,
  message,
  primaryAction,
  secondaryAction,
  className,
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md w-64 p-4 flex flex-col items-center ${className}`}>
      <div className="mb-3">
        {alertIcons[type]}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 text-center mb-4">{message}</p>
      <div className="flex justify-center space-x-2 w-full">
        {secondaryAction && (
          <button
            onClick={secondaryAction.onClick}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {secondaryAction.label}
          </button>
        )}
        <button
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