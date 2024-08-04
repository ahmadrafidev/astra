import React, { ReactNode, useState, forwardRef, useImperativeHandle, useRef } from 'react';

export interface ToggleProps {
    children?: ReactNode; 
    className?: string;
    ariaLabel?: string;
    onIcon?: ReactNode;
    offIcon?: ReactNode;
    onChange?: (state: boolean) => void;
    defaultOn?: boolean;
}

interface ToggleButtonHandle extends HTMLButtonElement {
    toggle: () => void;
}

const Toggle = forwardRef<ToggleButtonHandle, ToggleProps>(
    ({ children, className, ariaLabel, onIcon, offIcon, onChange, defaultOn = false }, ref) => {
        const [on, setOn] = useState(defaultOn);
        const internalRef = useRef<HTMLButtonElement>(null);

        useImperativeHandle(ref, () => ({
            ...internalRef.current!,
            toggle: () => setOn(prevOn => !prevOn),
        }));

        const handleClick = () => {
            const newOn = !on;
            setOn(newOn);
            onChange?.(newOn);
        };

        return (
            <button 
                ref={internalRef}
                onClick={handleClick} 
                className={`px-4 py-2 border rounded-lg ${on ? 'bg-green-500' : 'bg-red-500'} text-white ${className}`}
                aria-pressed={on}
                aria-label={ariaLabel}
            >
                {on ? onIcon : offIcon}
            </button>
        );
    }
);

Toggle.displayName = "Toggle";
export default Toggle;
