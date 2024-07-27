// components/Accordion/Accordion.tsx
'use client'

import React, { useState, ReactNode } from 'react';

export interface AccordionProps {
    children: ReactNode;
    className?: string;
}

export interface AccordionItemProps {
    title: string;
    children: ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-gray-200">
            <button
                className="w-full text-left py-4 px-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                onClick={toggleOpen}
            >
                <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            </button>
            {isOpen && (
                <div className="p-4 bg-white">
                    {children}
                </div>
            )}
        </div>
    );
};

const Accordion: React.FC<AccordionProps> = ({ children, className }) => {
    return (
        <div className={`accordion ${className}`}>
            {children}
        </div>
    );
};

Accordion.displayName = "Accordion";
AccordionItem.displayName = "AccordionItem";

export { Accordion, AccordionItem };
