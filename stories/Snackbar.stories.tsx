import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Snackbar from '../components/Snackbar/Snackbar';

export default {
    title: 'Components/Snackbar',
    component: Snackbar,
} as Meta;

const Template: StoryFn<typeof Snackbar> = (args) => {
    const [open, setOpen] = useState(args.open);

    const handleClose = () => setOpen(false);

    return (
        <div>
            <button
                className="mb-4 p-2 bg-blue-500 text-white rounded"
                onClick={() => setOpen(true)}
            >
                Show Snackbar
            </button>
            <Snackbar {...args} open={open} onClose={handleClose} />
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {
    message: 'This is a snackbar notification',
    open: false,
    duration: 3000,
};
