import React, { ReactNode } from 'react';

/**
 * Props for the AlertDialog component.
 * 
 * @typedef {Object} AlertDialogProps
 * @property {ReactNode} children - The content of the alert dialog.
 * @property {boolean} open - Determines if the dialog is open.
 * @property {() => void} onClose - Function to call when the dialog is closed.
 * @property {() => void} onConfirm - Function to call when the confirm action is triggered.
 * @property {string} [confirmText='Continue'] - Text for the confirm button.
 * @property {string} [closeText='Cancel'] - Text for the close button.
 * @property {string} [className] - Additional class names for custom styling.
 */
export interface AlertDialogProps {
    children: ReactNode; 
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    confirmText?: string;
    closeText?: string;
    className?: string;
}

/**
 * AlertDialog component for displaying a modal dialog with confirm and cancel actions.
 * 
 * @component
 * @param {AlertDialogProps} props - Props for the AlertDialog component.
 * @returns {JSX.Element} The rendered AlertDialog component.
 */
const AlertDialog: React.FC<AlertDialogProps> = ({ 
    open,
    onClose,
    onConfirm,
    children,
    confirmText = 'Continue',
    closeText = 'Cancel',
    className
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
