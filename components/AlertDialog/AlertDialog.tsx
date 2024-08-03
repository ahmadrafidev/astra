import React, { ReactNode } from 'react';

export interface AlertDialogProps {
    children: ReactNode; 
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    confirmText?: string;
    closeText?: string;
    className?: string;
}

const AlertDialog: React.FC<AlertDialogProps> = ({ 
    open,
    onClose,
    onConfirm,
    children,
    confirmText = 'Continue',
    closeText = 'Cancel',
    className = ''
}) => {
    if (!open) return null;

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${className}`} onClick={onClose}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96 max-w-full max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <div className="mb-6">
                    {children}
                </div>
                <div className="flex justify-end space-x-2">
                    <button 
                        className="px-4 py-2 border border-gray-200 dark:border-none bg-white dark:bg-black text-gray-800 dark:text-white rounded-md hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                        onClick={onClose}
                    >
                        {closeText}
                    </button>
                    <button 
                        className="px-4 py-2 border border-gray-900 dark:border-none bg-gray-900 dark:bg-gray-100 text-white dark:text-black rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                        onClick={() => {
                            onConfirm();
                            onClose();
                        }}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};

AlertDialog.displayName = "AlertDialog";
export default AlertDialog;