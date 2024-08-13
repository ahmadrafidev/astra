'use client'

import React, { useState, ReactNode } from 'react';
import { AccordionItemProps } from './AccordionItem';

/**
 * Props for the Accordion component.
 * 
 * @typedef {Object} AccordionProps
 * @property {ReactNode} children - The content of the accordion, typically AccordionItem components.
 * @property {string} [className] - Optional class name for custom styling.
 * @property {string} [itemClassName] - Optional class name for custom styling of individual accordion items.
 * @property {string} [border] - Optional border styling for accordion items.
 * @property {'single'|'multiple'} [selectionMode='single'] - The selection mode of the accordion, either 'single' or 'multiple'.
 * @property {'default'|'split'} [variant='default'] - The variant style of the accordion, either 'default' or 'split'.
 */
export interface AccordionProps {
    children: ReactNode;
    className?: string;
    itemClassName?: string;
    border?: string;
    selectionMode?: 'single' | 'multiple';
    variant?: 'default' | 'split';
}

/**
 * Accordion component for displaying collapsible content panels.
 * 
 * @component
 * @param {AccordionProps} props - Props for the Accordion component.
 * @returns {JSX.Element} The rendered Accordion component.
 */
const Accordion: React.FC<AccordionProps> = ({
    children,
    className = '',
    itemClassName = '',
    border,
    selectionMode = 'single',
    variant = 'default',
}) => {
    const [openIndices, setOpenIndices] = useState<number[]>([]);

    /**
     * Toggles the open state of an accordion item.
     * 
     * @param {number} index - The index of the accordion item to toggle.
     */
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
export default Accordion;
