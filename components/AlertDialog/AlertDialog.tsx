import React, { ReactNode } from 'react';

interface AlertDialogProps {
    children: ReactNode; 
    open: boolean;
    onClose: () => void;
}

const AlertDialog: React.FC<AlertDialogProps> = ({ open, onClose, children }) => {
    if (!open) return null;

    return (
        <div className="alert-dialog" onClick={onClose}>
            <div className="alert-dialog-content" onClick={e => e.stopPropagation()}>
            {children}
            </div>
        </div>
    );
};

export default AlertDialog;
