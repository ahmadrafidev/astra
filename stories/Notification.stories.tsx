// stories/Notification.stories.tsx
import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Notification, { NotificationProps } from '../components/Notification/Notification';
import { CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

export default {
  title: 'Components/Notification',
  component: Notification,
} as Meta;

const Template: StoryFn<NotificationProps> = (args) => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {visible && <Notification {...args} onClose={() => setVisible(false)} />}
      <button
        onClick={() => setVisible(true)}
        style={{ marginTop: '20px', padding: '10px', borderRadius: '5px', background: '#3182ce', color: '#fff' }}
      >
        Show Notification
      </button>
    </>
  );
};

export const Success = Template.bind({});
Success.args = {
  message: 'This is a success message!',
  className: 'bg-green-100 text-green-900 border border-green-200',
  icon: <CheckCircle className="w-6 h-6 text-green-900" />,
};

export const Error = Template.bind({});
Error.args = {
  message: 'This is an error message!',
  className: 'bg-red-100 text-red-900 border border-red-200',
  icon: <AlertCircle className="w-6 h-6 text-red-900" />,
};

export const InfoNotification = Template.bind({});
InfoNotification.args = {
  message: 'This is an info message!',
  className: 'bg-blue-100 text-blue-900 border border-blue-200',
  icon: <Info className="w-6 h-6 text-blue-900" />,
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'This is a warning message!',
  className: 'bg-yellow-100 text-yellow-900 border border-yellow-200',
  icon: <AlertTriangle className="w-6 h-6 text-yellow-900" />,
};
