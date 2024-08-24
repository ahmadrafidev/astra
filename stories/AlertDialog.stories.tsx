import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import AlertDialog, { AlertDialogProps } from '@/components/AlertDialog/AlertDialog';

export default {
    title: 'Components/Alert Dialog',
    component: AlertDialog,
    argTypes: {
        open: {
            control: { type: 'boolean' },
            description: 'Determines if the dialog is open.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },  
            },
        },
        onClose: {
            action: 'closed',
            description: 'Function to call when the dialog is closed.',
            table: {
                type: { summary: '() => void' },
            },
        },
        onConfirm: {
            action: 'confirmed',
            description: 'Function to call when the confirm action is triggered.',
            table: {
                type: { summary: '() => void' },
            },
        },
        confirmText: {
            control: { type: 'text' },
            description: 'Text for the confirm button.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Continue' },
            },
        },
        closeText: {
            control: { type: 'text' },
            description: 'Text for the close button.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Cancel' },
            },
        },
        className: {
            control: { type: 'text' },
            description: 'Additional class names for custom styling.',
            table: {
                type: { summary: 'string' },
            },
        },
        children: {
            control: 'text',
            description: 'The content of the alert dialog.',
            table: {
                type: { summary: 'ReactNode' },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'The AlertDialog component is used to display a modal dialog with confirm and cancel actions. It can be customized with different button texts and content.',
            },
        },
    },
} as Meta<AlertDialogProps>;

const Template: StoryFn<AlertDialogProps> = (args) => <AlertDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
    open: true,
    confirmText: 'Continue',
    closeText: 'Cancel',
    children: 'Are you sure you want to proceed with this action?',
};

export const CustomContent = Template.bind({});
CustomContent.args = {
    open: true,
    confirmText: 'Yes, Delete',
    closeText: 'No, Keep',
    children: (
        <>
            <h3 className="text-lg font-semibold mb-4">Delete Item</h3>
            <p>This action cannot be undone. Do you want to continue?</p>
        </>
    ),
    className: 'custom-alert-dialog',
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
    open: true,
    confirmText: 'Proceed',
    closeText: 'Cancel',
    children: 'This is a custom-styled alert dialog.',
    className: 'bg-red-100 border border-red-500',
};
