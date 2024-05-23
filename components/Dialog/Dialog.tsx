import React from 'react';

const Dialog = ({ open, onClose, children }) => {
    if (!open) return null;

    return (
    <div className="dialog" onClick={onClose}>
        <div className="dialog-content" onClick={e => e.stopPropagation()}>
        {children}
        </div>
    </div>
    );
};

export default Dialog;
