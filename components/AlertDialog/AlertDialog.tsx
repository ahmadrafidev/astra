// components/AlertDialog/AlertDialog.tsx
import React, { ReactNode } from 'react';

export interface AlertDialogProps {
    children: ReactNode; 
    open: boolean;
    onClose: () => void;
    className?: string;
}

const AlertDialog: React.FC<AlertDialogProps> = ({ open, onClose, children, className = '' }) => {
    if (!open) return null;

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${className}`} onClick={onClose}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" onClick={e => e.stopPropagation()}>
                {children}
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

AlertDialog.displayName = "AlertDialog";
export default AlertDialog;
