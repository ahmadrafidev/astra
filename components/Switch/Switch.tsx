// components/Switch/Switch.tsx
import React from 'react';

export interface SwitchProps {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange, className = '' }) => {
    return (
        <label className={`switch ${className}`}>
            <input type="checkbox" checked={checked} onChange={onChange} />
            <span className="slider round"></span>
        </label>
    );
};

Switch.displayName = "Switch";
export default Switch;
