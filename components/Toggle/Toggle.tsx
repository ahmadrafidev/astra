import React, { ReactNode, useState } from 'react';

interface ToggleProps {
    children?: ReactNode; 
}

const Toggle: React.FC<ToggleProps> = ({children}) => {
    const [on, setOn] = useState(false);

    return (
        <button onClick={() => setOn(!on)}>
            {on ? 'On' : 'Off'}
        </button>
    );
};

export default Toggle;
