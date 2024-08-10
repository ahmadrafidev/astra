import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Modal, { ModalProps } from '../components/Modal/Modal'; 
import Button from '../components/Button/Button'; 

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
        onClose: {
            action: 'closed',
            description: 'Function to call when the modal is closed.',
            table: {
                type: { summary: '() => void' },
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
                <p>This is a modal. You can put any content here.</p>
            </Modal>
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    isOpen: false,
    title: 'Default Modal',
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
    isOpen: false,
    children: (
        <p>
            This modal doesn`t have a title. It`s just a plain modal with content inside.
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
