import React, { ReactNode } from 'react';

interface AccordionProps {
    children: ReactNode; 
}

const Accordion: React.FC<AccordionProps> = ({ children }) => {
    return (
        <div className="accordion">
            {children}
        </div>
    );
};

export default Accordion;
