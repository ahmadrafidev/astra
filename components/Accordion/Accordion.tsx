// Accordion.tsx
'use client'

import React, { useState, ReactNode } from 'react';
import { AccordionItemProps } from './AccordionItem';

export interface AccordionProps {
    children: ReactNode;
    className?: string;
    itemClassName?: string;
    border?: string;
    selectionMode?: 'single' | 'multiple';
    variant?: 'default' | 'split';
}

export const Accordion: React.FC<AccordionProps> = ({
    children,
    className = '',
    itemClassName = '',
    border,
    selectionMode = 'single',
    variant = 'default',
}) => {
    const [openIndices, setOpenIndices] = useState<number[]>([]);

    const handleToggle = (index: number) => {
        if (selectionMode === 'single') {
            setOpenIndices(openIndices.includes(index) ? [] : [index]);
        } else {
            setOpenIndices(
                openIndices.includes(index)
                    ? openIndices.filter(i => i !== index)
                    : [...openIndices, index]
            );
        }
    };

    return (
        <div className={`${className} ${variant === 'split' ? 'space-y-2' : ''}`}>
            {React.Children.map(children, (child, index) =>
                React.isValidElement(child)
                    ? React.cloneElement(child as React.ReactElement<AccordionItemProps>, {
                            isOpen: openIndices.includes(index),
                            onToggle: () => handleToggle(index),
                            border: border,
                            className: itemClassName,
                            variant: variant
                        })
                    : child
            )}
        </div>
    );
};

Accordion.displayName = "Accordion";
