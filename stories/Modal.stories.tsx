// stories/Modal.stories.tsx
import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Modal, { ModalProps } from '../components/Modal/Modal';

export default {
    title: 'Components/Modal',
    component: Modal,
} as Meta;

const Template: StoryFn<ModalProps> = (args) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <p>This is a modal content</p>
            </Modal>
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    isOpen: false,
};
