import React, { ReactNode, useState } from 'react';

export interface ToggleProps {
    children?: ReactNode; 
    className?: string;
}

const Toggle: React.FC<ToggleProps> = ({ children, className }) => {
    const [on, setOn] = useState(false);

    return (
        <button onClick={() => setOn(!on)}>
            {on ? 'On' : 'Off'}
        </button>
    );
};

Toggle.displayName = "Toggle";
export default Toggle;
