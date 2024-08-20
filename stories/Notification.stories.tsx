import React, { useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { Bell } from 'lucide-react';

import Notification, { NotificationProps } from '@/components/Notification/Notification'; 

export default {
    title: 'Components/Notification',
    component: Notification,
    argTypes: {
        message: {
            control: 'text',
            description: 'The message to display in the notification.',
            table: {
                type: { summary: 'string' },
            },
        },
        className: {
            control: 'text',
            description: 'Additional class names for styling.',
            table: {
                type: { summary: 'string' },
            },
        },
        icon: {
            control: 'text',
            description: 'Custom icon to display in the notification.',
            table: {
                type: { summary: 'React.ReactNode' },
            },
        },
        onClose: {
            action: 'closed',
            description: 'Function to call when the notification is closed.',
            table: {
                type: { summary: '() => void' },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'The Notification component displays a dismissible notification with optional swipe-to-dismiss functionality and an undo action.',
            },
        },
    },
} as Meta<NotificationProps>;

const Template: StoryFn<NotificationProps> = (args) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        args.onClose();
    };

    return (
        <>
            {isVisible && <Notification {...args} onClose={handleClose} />}
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    message: 'This is a notification message.',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    message: 'This is a notification with an icon.',
    icon: <Bell className="w-6 h-6 text-blue-500" />,
};

export const CustomClass = Template.bind({});
CustomClass.args = {
    message: 'This notification has custom styling.',
    className: 'bg-blue-50 text-blue-700',
    icon: <Bell className="w-6 h-6 text-blue-700" />,
};
