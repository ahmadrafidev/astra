import React, { ReactNode } from 'react';

export interface AlertDialogProps {
    children: ReactNode; 
    open: boolean;
    onClose: () => void;
    className?: string;
}

const AlertDialog: React.FC<AlertDialogProps> = ({ open, onClose, children, className }) => {
    if (!open) return null;

    return (
        <div className="alert-dialog" onClick={onClose}>
            <div className="alert-dialog-content" onClick={e => e.stopPropagation()}>
            {children}
            </div>
        </div>
    );
};

AlertDialog.displayName = "AlertDialog";
export default AlertDialog;
