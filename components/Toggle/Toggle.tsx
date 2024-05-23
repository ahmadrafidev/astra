import React, { useState } from 'react';

const Toggle = () => {
    const [on, setOn] = useState(false);

    return (
        <button onClick={() => setOn(!on)}>
            {on ? 'On' : 'Off'}
        </button>
    );
};

export default Toggle;
