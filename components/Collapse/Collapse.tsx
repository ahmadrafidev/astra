// components/Collapse/Collapse.tsx
import React, { useState } from 'react';

export interface CollapseProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Collapse: React.FC<CollapseProps> = ({ title, children, className }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
            className="w-full text-left py-2 px-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            >
            {title}
            </button>
            {isOpen && <div className="p-4 bg-white">{children}</div>}
        </div>
    );
};

Collapse.displayName = "Collapse";
export default Collapse;
