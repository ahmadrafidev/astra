// components/Alert/Alert.tsx
import React, { ReactNode } from 'react';

export interface AlertProps {
    children?: ReactNode; 
    type: 'info' | 'success' | 'warning' | 'error';
    message: string;
    className?: string;
}

const alertStyles = {
    info: "bg-blue-100 text-blue-700 border-blue-500",
    success: "bg-green-100 text-green-700 border-green-500",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-500",
    error: "bg-red-100 text-red-700 border-red-500",
};

const Alert: React.FC<AlertProps> = ({ type, message, children, className = '' }) => {
    return (
        <div className={`border-l-4 p-4 ${alertStyles[type]} ${className}`}>
            <p>{message}</p>
            {children && <div className="mt-2">{children}</div>}
        </div>
    );
};

Alert.displayName = "Alert";
export default Alert;
