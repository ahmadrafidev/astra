// components/Accordion/Accordion.tsx
import React, { ReactNode } from 'react';

export interface AccordionProps {
    children: ReactNode; 
    className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ children, className }) => {
    return (
        <div className="accordion">
            {children}
        </div>
    );
};

Accordion.displayName = "Accordion";
export default Accordion;
