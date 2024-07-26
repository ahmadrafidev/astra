import React, { ReactNode } from 'react';

export interface AlertProps {
    children: ReactNode; 
    type: String;
    message: String;
    className?: string;
}

const alertTypes = {
    info: "info",
};

const Alert: React.FC<AlertProps> = ({ type, message, children, className }) => {
    return (
        <div className={`alert alert-${type}`}>
            {message}
        </div>
    );
};

Alert.displayName = "Alert";
export default Alert;
