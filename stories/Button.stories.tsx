import React from 'react';
import { Plus } from 'lucide-react';
import { Meta, StoryFn } from '@storybook/react';

import Button, { ButtonProps } from '@/components/Button/Button'; 

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        variant: {
            control: { type: 'select', options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] },
            description: 'The variant of the button.',
            table: {
                type: { summary: "'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'" },
                defaultValue: { summary: 'default' },
            },
        },
        size: {
            control: { type: 'select', options: ['xs', 'sm', 'md', 'lg'] },
            description: 'The size of the button.',
            table: {
                type: { summary: "'xs' | 'sm' | 'md' | 'lg'" },
                defaultValue: { summary: 'md' },
            },
        },
        icon: {
            control: 'text',
            description: 'Optional icon to display in the button.',
            table: {
                type: { summary: 'ReactNode' },
            },
        },
        iconPosition: {
            control: { type: 'radio', options: ['left', 'right'] },
            description: 'The position of the icon relative to the button content.',
            table: {
                type: { summary: "'left' | 'right'" },
                defaultValue: { summary: 'left' },
            },
        },
        className: {
            control: 'text',
            description: 'Additional class names for custom styling.',
            table: {
                type: { summary: 'string' },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the button is disabled.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        children: {
            control: 'text',
            description: 'The content of the button.',
            table: {
                type: { summary: 'ReactNode' },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'The Button component allows for rendering a button with various styles, sizes, and optional icons.',
            },
        },
    },
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default Button',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    children: 'Add',
    icon: <Plus />,
    variant: 'default',
};

export const Destructive = Template.bind({});
Destructive.args = {
    children: 'Delete',
    variant: 'destructive',
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Outline Button',
    variant: 'outline',
};

export const Ghost = Template.bind({});
Ghost.args = {
    children: 'Ghost Button',
    variant: 'ghost',
};

export const Link = Template.bind({});
Link.args = {
    children: 'Link Button',
    variant: 'link',
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Disabled Button',
    disabled: true,
};
