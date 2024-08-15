import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import ProgressBar, { ProgressBarProps } from '@/components/ProgressBar/ProgressBar'; 

export default {
    title: 'Components/ProgressBar',
    component: ProgressBar,
    argTypes: {
        progress: {
            control: { type: 'number', min: 0, max: 100 },
            description: 'The progress percentage (0-100).',
            table: {
                type: { summary: 'number' },
            },
        },
        size: {
            control: { type: 'select', options: ['sm', 'md', 'lg'] },
            description: 'The size of the progress bar.',
            table: {
                type: { summary: "'sm' | 'md' | 'lg'" },
                defaultValue: { summary: 'md' },
            },
        },
        progressBarVariant: {
            control: { type: 'select', options: ['default', 'custom'] },
            description: 'The variant of the progress bar container.',
            table: {
                type: { summary: "'default' | 'custom'" },
                defaultValue: { summary: 'default' },
            },
        },
        progressVariant: {
            control: { type: 'select', options: ['default', 'custom', 'success', 'warning', 'danger'] },
            description: 'The variant of the progress element.',
            table: {
                type: { summary: "'default' | 'custom' | 'success' | 'warning' | 'danger'" },
                defaultValue: { summary: 'default' },
            },
        },
        showLabel: {
            control: 'boolean',
            description: 'Whether to show the progress label.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'true' },
            },
        },
        labelPosition: {
            control: { type: 'select', options: ['inside', 'outside'] },
            description: 'The position of the progress label.',
            table: {
                type: { summary: "'inside' | 'outside'" },
                defaultValue: { summary: 'inside' },
            },
        },
        customLabel: {
            control: 'text',
            description: 'Custom label for the progress bar.',
            table: {
                type: { summary: 'React.ReactNode' },
            },
        },
        animate: {
            control: 'boolean',
            description: 'Whether to animate the progress bar.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'true' },
            },
        },
        hasStripe: {
            control: 'boolean',
            description: 'Whether to show a stripe pattern on the progress element.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        className: {
            control: 'text',
            description: 'Additional class names for the progress bar container.',
            table: {
                type: { summary: 'string' },
            },
        },
        progressClassName: {
            control: 'text',
            description: 'Additional class names for the progress element.',
            table: {
                type: { summary: 'string' },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'The ProgressBar component displays a progress bar with customizable size, color, label, and animation.',
            },
        },
    },
} as Meta<ProgressBarProps>;

const Template: StoryFn<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    progress: 50,
    size: 'md',
    progressBarVariant: 'default',
    progressVariant: 'default',
    showLabel: true,
    labelPosition: 'inside',
    animate: true,
};

export const CustomLabel = Template.bind({});
CustomLabel.args = {
    progress: 75,
    size: 'lg',
    progressBarVariant: 'default',
    progressVariant: 'success',
    showLabel: true,
    labelPosition: 'outside',
    customLabel: '75% Completed',
};
