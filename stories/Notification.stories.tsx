// stories/Notification.stories.tsx
import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Notification, { NotificationProps } from '../components/Notification/Notification';

export default {
  title: 'Components/Notification',
  component: Notification,
} as Meta;

const Template: StoryFn<NotificationProps> = (args) => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {visible && <Notification {...args} onClose={() => setVisible(false)} />}
      <button onClick={() => setVisible(true)}>Show Notification</button>
    </>
  );
};

export const Success = Template.bind({});
Success.args = {
  message: 'This is a success message!',
  type: 'success',
};

export const Error = Template.bind({});
Error.args = {
  message: 'This is an error message!',
  type: 'error',
};

export const Info = Template.bind({});
Info.args = {
  message: 'This is an info message!',
  type: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'This is a warning message!',
  type: 'warning',
};
