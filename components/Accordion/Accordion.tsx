// components/Accordion/Accordion.tsx
'use client'

import React, { useState, ReactNode } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

export interface AccordionProps {
    children: ReactNode;
    className?: string;
    border?: string;
    shadow?: string;
    singleOpen?: boolean;
    variant?: 'default' | 'split';
}

export interface AccordionItemProps {
    title: string;
    subtitle?: string;
    children: ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
    border?: string;
    shadow?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
    title,
    subtitle,
    children,
    isOpen = false,
    onToggle,
    border,
    shadow,
}) => {
    const [isItemOpen, setIsItemOpen] = useState(isOpen);

    const handleToggle = () => {
        setIsItemOpen(!isItemOpen);
        if (onToggle) onToggle();
    };

    return (
        <div className={`border-b ${border || 'border-gray-200'} ${shadow || ''}`}>
            <button
                className="w-full text-left py-4 px-4 bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
                onClick={handleToggle}
            >
                <div className="flex flex-col justify-start">
                    <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                    <h4 className="text-sm font-normal text-gray-700">{subtitle}</h4>
                </div>
                {isItemOpen ? (
                    <ChevronUpIcon className="h-5 w-5 text-gray-900" />
                ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-900" />
                )}
            </button>
            {isItemOpen && (
                <div className="p-4 bg-white">
                    <p className="text-base font-normal text-gray-900">
                        {children}
                    </p> 
                </div>
            )}
        </div>
    );
};

const Accordion: React.FC<AccordionProps> = ({
    children,
    className = '',
    border,
    shadow,
    singleOpen = false,
    variant = 'default',
}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        if (singleOpen) {
            setOpenIndex(openIndex === index ? null : index);
        }
    };

    return (
        <div className={`accordion ${className} ${variant === 'split' ? 'space-y-2' : ''}`}>
            {React.Children.map(children, (child, index) =>
                React.isValidElement(child) &&
                (child.type === AccordionItem ? (
                    React.cloneElement(child, {
                        isOpen: singleOpen ? openIndex === index : undefined,
                        onToggle: () => handleToggle(index),
                        border: border,
                        shadow: shadow,
                    })
                ) : (
                    child
                ))
            )}
        </div>
    );
};

Accordion.displayName = "Accordion";
AccordionItem.displayName = "AccordionItem";

export { Accordion, AccordionItem };
