import React, { ReactNode } from 'react';

interface DialogProps {
    children: ReactNode;
    open: boolean; 
    onClose: () => void; 
}

const Dialog: React.FC<DialogProps>  = ({ open, onClose, children }) => {
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
