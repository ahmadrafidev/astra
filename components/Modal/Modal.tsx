// components/Modal/Modal.tsx
import React from 'react';

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className = '' }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className={`bg-white p-6 rounded ${className}`}>
            <button onClick={onClose} className="absolute top-0 right-0 p-2">X</button>
            {children}
            </div>
        </div>
    );
};

export default Modal;
