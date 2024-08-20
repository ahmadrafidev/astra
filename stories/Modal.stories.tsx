import React, { useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { X } from 'lucide-react';

import Modal, { ModalProps } from '@/components/Modal/Modal'; 
import Button from '@/components/Button/Button'; 

export default {
    title: 'Components/Modal',
    component: Modal,
    argTypes: {
        isOpen: {
            control: 'boolean',
            description: 'Whether the modal is open.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        closeOnOutsideClick: {
            control: 'boolean',
            description: 'Whether to close the modal on outside click.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'true' },
            },
        },
        title: {
            control: 'text',
            description: 'The title of the modal.',
            table: {
                type: { summary: 'string' },
            },
        },
        description: {
            control: 'text',
            description: 'The description of the modal.',
            table: {
                type: { summary: 'string' },
            },
        },
        className: {
            control: 'text',
            description: 'Additional class names for custom styling.',
            table: {
                type: { summary: 'string' },
            },
        },
        closeButton: {
            control: 'text',
            description: 'Custom close button element.',
            table: {
                type: { summary: 'React.ReactNode' },
            },
        },
        footerContent: {
            control: 'text',
            description: 'Content to be displayed in the modal footer.',
            table: {
                type: { summary: 'React.ReactNode' },
            },
        },
        onClose: {
            action: 'closed',
            description: 'Function to call when the modal is closed.',
            table: {
                type: { summary: '() => void' },
            },
        },
        size: {
            control: { type: 'select', options: ['sm', 'md', 'lg', 'full'] },
            description: 'Size of the modal.',
            table: {
                type: { summary: "'sm' | 'md' | 'lg' | 'full'" },
                defaultValue: { summary: "'md'" },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'The Modal component is used to display content in a modal dialog with customizable behavior and styling.',
            },
        },
    },
} as Meta<ModalProps>;

const Template: StoryFn<ModalProps> = (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <>
            <Button onClick={handleOpen}>Open Modal</Button>
            <Modal {...args} isOpen={isOpen} onClose={handleClose}>
                {args.children || <p>This is a modal. You can put any content here.</p>}
            </Modal>
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    isOpen: false,
    title: 'Default Modal',
    size: 'md',
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
    isOpen: false,
    size: 'md',
    children: (
        <p>
            This modal doesn’t have a title. It’s just a plain modal with content inside.
        </p>
    ),
};

export const CustomCloseButton = Template.bind({});
CustomCloseButton.args = {
    isOpen: false,
    title: 'Custom Close Button',
    closeButton: <span aria-hidden="true">&times;</span>,
    children: (
        <p>
            This modal uses a custom close button instead of the default one.
        </p>
    ),
};

export const NoOutsideClickClose = Template.bind({});
NoOutsideClickClose.args = {
    isOpen: false,
    title: 'No Outside Click Close',
    closeOnOutsideClick: false,
    children: (
        <p>
            This modal cannot be closed by clicking outside of it.
        </p>
    ),
};
