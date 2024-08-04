import React, { ReactNode, useState, forwardRef, useImperativeHandle, useRef } from 'react';

export interface ToggleProps {
    children?: ReactNode; 
    onIcon?: ReactNode;
    offIcon?: ReactNode;
    className?: string;
    onClassName?: string;
    offClassName?: string;
    iconClassName?: string;
    ariaLabel?: string;
    defaultOn?: boolean;
    hideOffIcon?: boolean;
    onChange?: (state: boolean) => void;
}

interface ToggleButtonHandle extends HTMLButtonElement {
    toggle: () => void;
}

const Toggle = forwardRef<ToggleButtonHandle, ToggleProps>(
    (
        {
            children,
            className,
            ariaLabel,
            onIcon,
            offIcon,
            onChange,
            defaultOn = false,
            onClassName,
            offClassName,
            iconClassName,
            hideOffIcon = false
        }, ref) => {

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
                className={`${on ? onClassName : offClassName} ${className}`}
                aria-pressed={on}
                aria-label={ariaLabel}
            >
                <span className={iconClassName}>
                    {on ? onIcon : (hideOffIcon ? null : offIcon)}
                </span>
                {children}
            </button>
        );
    }
);

Toggle.displayName = "Toggle";
export default Toggle;
