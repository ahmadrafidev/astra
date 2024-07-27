import React, { ReactNode } from 'react';

export interface DialogProps {
    children: ReactNode;
    open: boolean;
    onClose: () => void;
    className?: string;
}

const Dialog: React.FC<DialogProps> = ({ open, onClose, children, className }) => {
    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            role="dialog"
            aria-modal="true"
            onClick={onClose}
        >
            <div
                className={`bg-white p-6 rounded ${className}`}
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 m-2 p-2 text-gray-500 hover:text-gray-700"
                    aria-label="Close dialog"
                >
                    X
                </button>
                {children}
            </div>
        </div>
    );
};

Dialog.displayName = "Dialog";
export default Dialog;
