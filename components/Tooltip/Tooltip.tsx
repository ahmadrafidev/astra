import React, { useState } from 'react';

export interface TooltipProps {
    children: React.ReactNode;
    text: string;
    className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text, className }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div 
            className="relative flex items-center"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            {visible && (
            <div className="absolute bottom-full mb-2 w-max bg-gray-700 text-white text-sm rounded py-1 px-2">
                {text}
            </div>
        )}
        </div>
    );
};

Tooltip.displayName = "Tooltip";
export default Tooltip;
