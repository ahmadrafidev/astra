import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Accordion, AccordionProps } from '@/components/Accordion/Accordion';
import { AccordionItem } from '@/components/Accordion/AccordionItem';

export default {
    title: 'Components/Accordion',
    component: Accordion,
    argTypes: {
        className: {
            control: 'text',
            description: 'Optional class name for custom styling.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
        },
        itemClassName: {
            control: 'text',
            description: 'Optional class name for custom styling of individual accordion items.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
        },
        border: {
            control: 'text',
            description: 'Optional border styling for accordion items.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
        },
        selectionMode: {
            control: { type: 'radio' },
            options: ['single', 'multiple'],
            description: 'The selection mode of the accordion, either "single" or "multiple".',
            table: {
                type: { summary: "'single' | 'multiple'" },
                defaultValue: { summary: 'single' },
            },
        },
        variant: {
            control: { type: 'radio' },
            options: ['default', 'split'],
            description: 'The variant style of the accordion, either "default" or "split".',
            table: {
                type: { summary: "'default' | 'split'" },
                defaultValue: { summary: 'default' },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'The Accordion component is used to display collapsible content panels. It supports multiple selection modes and variant styles.',
            },
        },
    },
} as Meta;

const Template: StoryFn<AccordionProps> = (args) => (
    <Accordion {...args}>
        <AccordionItem title="Item 1">Content for item 1</AccordionItem>
        <AccordionItem title="Item 2">Content for item 2</AccordionItem>
        <AccordionItem title="Item 3">Content for item 3</AccordionItem>
    </Accordion>
);

export const Default = Template.bind({});
Default.args = {
    selectionMode: 'single',
    variant: 'default',
};

export const MultipleSelection = Template.bind({});
MultipleSelection.args = {
    selectionMode: 'multiple',
    variant: 'default',
};

export const SplitVariant = Template.bind({});
SplitVariant.args = {
    selectionMode: 'single',
    variant: 'split',
    border: 'border border-gray-300',
    className: 'bg-gray-50',
    itemClassName: 'p-4',
};
