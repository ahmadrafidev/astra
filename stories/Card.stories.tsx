import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Card, { CardProps } from '../components/Card/Card';

export default {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        title: {
            control: 'text',
            description: 'The title of the card.',
            table: {
                type: { summary: 'string' },
            },
        },
        description: {
            control: 'text',
            description: 'The description of the card.',
            table: {
                type: { summary: 'string' },
            },
        },
        imageSrc: {
            control: 'text',
            description: 'The source URL of the image.',
            table: {
                type: { summary: 'string' },
            },
        },
        imageWidth: {
            control: { type: 'number' },
            description: 'The width of the image.',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '300' },
            },
        },
        imageHeight: {
            control: { type: 'number' },
            description: 'The height of the image.',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '200' },
            },
        },
        imageAlt: {
            control: 'text',
            description: 'The alt text for the image.',
            table: {
                type: { summary: 'string' },
            },
        },
        variant: {
            control: { type: 'select', options: ['default', 'hover', 'interactive'] },
            description: 'The variant of the card.',
            table: {
                type: { summary: "'default' | 'hover' | 'interactive'" },
                defaultValue: { summary: 'default' },
            },
        },
        titleElement: {
            control: { type: 'select', options: ['h2', 'h3', 'h4', 'h5', 'h6'] },
            description: 'The HTML element to use for the title.',
            table: {
                type: { summary: "'h2' | 'h3' | 'h4' | 'h5' | 'h6'" },
                defaultValue: { summary: 'h3' },
            },
        },
        className: {
            control: 'text',
            description: 'Additional class names for custom styling.',
            table: {
                type: { summary: 'string' },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'The Card component is used to display content in a card layout with an optional image, title, description, and various styling options.',
            },
        },
    },
} as Meta<CardProps>;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Card Title',
    description: 'This is the description of the card. It provides additional information about the content of the card.',
    imageSrc: 'https://via.placeholder.com/300x200',
    variant: 'default',
};

export const HoverEffect = Template.bind({});
HoverEffect.args = {
    title: 'Card with Hover Effect',
    description: 'This card has a hover effect that adds a shadow when hovered.',
    imageSrc: 'https://via.placeholder.com/300x200',
    variant: 'hover',
};

export const Interactive = Template.bind({});
Interactive.args = {
    title: 'Interactive Card',
    description: 'This card is interactive and responds to hover and click events.',
    imageSrc: 'https://via.placeholder.com/300x200',
    variant: 'interactive',
};
