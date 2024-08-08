import React, { useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the PaymentCard component.
 * 
 * @typedef {Object} PaymentCardProps
 * @property {string} [className] - Additional class names for custom styling.
 * @property {() => void} [onPaymentSuccess] - Callback when the payment is successful.
 * @property {(error: Error) => void} [onPaymentError] - Callback when there is a payment error.
 * @property {number} [amount] - The amount to be paid.
 */
export interface PaymentCardProps {
  className?: string;
  onPaymentSuccess?: () => void;
  onPaymentError?: (error: Error) => void;
  amount?: number;
}

/**
 * PaymentCard component for processing payments.
 * 
 * @component
 * @param {PaymentCardProps} props - Props for the PaymentCard component.
 * @returns {JSX.Element} The rendered PaymentCard component.
 */
const PaymentCard: React.FC<PaymentCardProps> = ({
  className,
  onPaymentSuccess,
  onPaymentError,
  amount
}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({ cardNumber: '', expiry: '', cvv: '' });

  const validateInput = () => {
    let isValid = true;
    const errors = { cardNumber: '', expiry: '', cvv: '' };
    
    if (!cardNumber.match(/^\d{16}$/)) {
      errors.cardNumber = 'Invalid card number. Must be exactly 16 digits.';
      isValid = false;
    }

    if (!expiry.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)) {
      errors.expiry = 'Invalid expiry date. Use MM/YY format.';
      isValid = false;
    }

    if (!cvv.match(/^\d{3}$/)) {
      errors.cvv = 'Invalid CVV. Must be exactly 3 digits.';
      isValid = false;
    }
    
    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateInput()) {
      return;
    }
    try {
      console.log('Processing payment for: ', cardNumber, expiry, cvv);
      onPaymentSuccess && onPaymentSuccess();
    } catch (error) {
      console.error('Payment failed: ', error);
      onPaymentError && onPaymentError(new Error('Payment processing failed'));
    }
  };

  return (
    <div className={cn("flex flex-col p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md", className)} aria-label="Payment Card Interface">
      <form onSubmit={handleSubmit} aria-live="polite">
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-gray-700 dark:text-gray-200">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full p-2 border text-black dark:text-white border-gray-200 dark:border-gray-700 focus:outline-black dark:focus:outline-white rounded bg-gray-50 dark:bg-gray-800"
            placeholder="1234 1234 1234 1234"
            required
            aria-describedby="cardNumberError"
          />
          {errors.cardNumber && <p id="cardNumberError" className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
        </div>
        <div className="flex justify-between gap-3 mb-4">
          <div className="flex-1">
            <label htmlFor="expiry" className="block text-gray-700 dark:text-gray-200">Expiry Date</label>
            <input
              type="text"
              id="expiry"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              className="w-full p-2 border text-black dark:text-white border-gray-200 dark:border-gray-700 focus:outline-black dark:focus:outline-white rounded bg-gray-50 dark:bg-gray-800"
              placeholder="MM/YY"
              required
              aria-describedby="expiryError"
            />
            {errors.expiry && <p id="expiryError" className="text-red-500 text-xs mt-1">{errors.expiry}</p>}
          </div>
          <div className="flex-1">
            <label htmlFor="cvv" className="block text-gray-700 dark:text-gray-200">Security Code</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full p-2 border text-black dark:text-white dark:border-gray-700 focus:outline-black dark:focus:outline-white rounded bg-gray-50 dark:bg-gray-800"
              placeholder="CVV"
              required
              aria-describedby="cvvError"
            />
            {errors.cvv && <p id="cvvError" className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
          </div>
        </div>
        <button type="submit" className="w-full p-3 bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-200">
          {amount ? `Pay $${amount.toFixed(2)}` : 'Submit Payment'}
        </button>
      </form>
    </div>
  );
};

PaymentCard.displayName = 'PaymentCard';
export default PaymentCard;
