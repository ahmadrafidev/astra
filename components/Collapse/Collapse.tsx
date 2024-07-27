import React, { useState } from 'react';

export interface CollapseProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Collapse: React.FC<CollapseProps> = ({ title, children, className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => setIsOpen(!isOpen);

    return (
        <div className={`border-b border-gray-200 ${className}`}>
            <button
                className="w-full text-left py-2 px-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                onClick={toggleCollapse}
                aria-expanded={isOpen}
                aria-controls="collapse-content"
            >
                {title}
            </button>
            {isOpen && (
                <div id="collapse-content" className="p-4 bg-white">
                    {children}
                </div>
            )}
        </div>
    );
};

Collapse.displayName = "Collapse";
export default Collapse;
