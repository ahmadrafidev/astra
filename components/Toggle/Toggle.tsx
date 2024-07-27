// components/Toggle/Toggle.tsx
import React, { ReactNode, useState } from 'react';

export interface ToggleProps {
    children?: ReactNode; 
    className?: string;
    ariaLabel?: string;
}

const Toggle: React.FC<ToggleProps> = ({ children, className, ariaLabel }) => {
    const [on, setOn] = useState(false);

    return (
        <button 
            onClick={() => setOn(!on)} 
            className={`px-4 py-2 border rounded ${on ? 'bg-green-500' : 'bg-red-500'} text-white ${className}`}
            aria-pressed={on}
            aria-label={ariaLabel}
        >
            {on ? 'On' : 'Off'}
        </button>
    );
};

Toggle.displayName = "Toggle";
export default Toggle;
