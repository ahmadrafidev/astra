import React, { ReactNode } from 'react';

export interface DialogProps {
    children: ReactNode;
    open: boolean; 
    onClose: () => void; 
    className?: string;
}

const Dialog: React.FC<DialogProps>  = ({ open, onClose, children, className }) => {
    if (!open) return null;

    return (
    <div className="dialog" onClick={onClose}>
        <div className="dialog-content" onClick={e => e.stopPropagation()}>
        {children}
        </div>
    </div>
    );
};

Dialog.displayName = "Dialog";
export default Dialog;
