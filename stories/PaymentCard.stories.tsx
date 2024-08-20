import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import PaymentCard, { PaymentCardProps } from '@/components/PaymentCard/PaymentCard';

export default {
  title: 'Components/PaymentCard',
  component: PaymentCard,
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional class names for custom styling.',
      table: {
        type: { summary: 'string' },
      },
    },
    onPaymentSuccess: {
      action: 'paymentSuccessful',
      description: 'Callback when the payment is successful.',
      table: {
        type: { summary: '() => void' },
      },
    },
    onPaymentError: {
      action: 'paymentFailed',
      description: 'Callback when there is a payment error.',
      table: {
        type: { summary: '(error: Error) => void' },
      },
    },
    amount: {
      control: { type: 'number', min: 0 },
      description: 'The amount to be paid.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' }, 
      },
    },
  },
} as Meta<PaymentCardProps>;

const Template: StoryFn<PaymentCardProps> = (args) => <PaymentCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  amount: 50,
};

export const CustomAmount = Template.bind({});
CustomAmount.args = {
  amount: 100,
};

export const NoAmount = Template.bind({});
NoAmount.args = {
  amount: undefined,
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  className: 'custom-payment-card',
  amount: 75,
};
