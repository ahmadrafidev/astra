import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import PaymentCard, { PaymentCardProps } from '../../../components/PaymentCard/PaymentCard';

describe('PaymentCard Component', () => {
  const setup = (props: Partial<PaymentCardProps> = {}) => {
    render(
      <PaymentCard
        amount={100}
        onPaymentSuccess={jest.fn()}
        onPaymentError={jest.fn()}
        {...props}
      />
    );
  };

  test('renders correctly with default props', () => {
    setup();

    // Check if form elements are rendered
    expect(screen.getByLabelText(/Card Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Expiry Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/CVV/i)).toBeInTheDocument();
    expect(screen.getByText(/Pay \$100.00/i)).toBeInTheDocument();
  });

  test('validates card number input', () => {
    setup();
    
    const cardNumberInput = screen.getByLabelText(/Card Number/i);
    
    // Enter invalid card number
    fireEvent.change(cardNumberInput, { target: { value: '1234' } });
    fireEvent.submit(screen.getByRole('form'));

    expect(screen.getByText(/Invalid card number. Must be exactly 16 digits./i)).toBeInTheDocument();
  });

  test('validates expiry date input', () => {
    setup();
    
    const expiryInput = screen.getByLabelText(/Expiry Date/i);
    
    // Enter invalid expiry date
    fireEvent.change(expiryInput, { target: { value: '13/25' } });
    fireEvent.submit(screen.getByRole('form'));

    expect(screen.getByText(/Invalid expiry date. Use MM\/YY format./i)).toBeInTheDocument();
  });

  test('validates CVV input', () => {
    setup();
    
    const cvvInput = screen.getByLabelText(/CVV/i);
    
    // Enter invalid CVV
    fireEvent.change(cvvInput, { target: { value: '12' } });
    fireEvent.submit(screen.getByRole('form'));

    expect(screen.getByText(/Invalid CVV. Must be exactly 3 digits./i)).toBeInTheDocument();
  });

  test('handles successful payment', () => {
    const onPaymentSuccess = jest.fn();
    setup({ onPaymentSuccess });
    
    const cardNumberInput = screen.getByLabelText(/Card Number/i);
    const expiryInput = screen.getByLabelText(/Expiry Date/i);
    const cvvInput = screen.getByLabelText(/CVV/i);

    // Enter valid card details
    fireEvent.change(cardNumberInput, { target: { value: '1234567812345678' } });
    fireEvent.change(expiryInput, { target: { value: '12/25' } });
    fireEvent.change(cvvInput, { target: { value: '123' } });
    fireEvent.submit(screen.getByRole('form'));

    expect(onPaymentSuccess).toHaveBeenCalled();
  });

  test('handles payment error', () => {
    const onPaymentError = jest.fn();
    setup({ onPaymentError });

    const cardNumberInput = screen.getByLabelText(/Card Number/i);
    const expiryInput = screen.getByLabelText(/Expiry Date/i);
    const cvvInput = screen.getByLabelText(/CVV/i);

    // Enter valid card details
    fireEvent.change(cardNumberInput, { target: { value: '1234567812345678' } });
    fireEvent.change(expiryInput, { target: { value: '12/25' } });
    fireEvent.change(cvvInput, { target: { value: '123' } });

    // Simulate error during form submission
    jest.spyOn(console, 'log').mockImplementation(() => {
      throw new Error('Payment processing failed');
    });

    fireEvent.submit(screen.getByRole('form'));

    expect(onPaymentError).toHaveBeenCalledWith(new Error('Payment processing failed'));
  });
});
