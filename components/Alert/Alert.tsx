import React, { ReactNode } from 'react';

interface AlertProps {
    children: ReactNode; 
    type: String;
    message: String;
}

const alertTypes = {
    info: "info",
};

const Alert: React.FC<AlertProps> = ({ type, message, children }) => {
    return (
        <div className={`alert alert-${type}`}>
            {message}
        </div>
    );
};

Alert.displayName = "Alert";
export default Alert;
