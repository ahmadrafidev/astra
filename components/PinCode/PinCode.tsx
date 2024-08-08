import React, { useState, useEffect } from 'react';

/**
 * Props for the PinCode component.
 * 
 * @typedef {Object} PinCodeProps
 * @property {number} [length=6] - The length of the PIN code.
 * @property {string} [className] - Additional class names for custom styling.
 * @property {string} [inputClassName] - Additional class names for the input elements.
 * @property {boolean} [isMask=true] - Whether to mask the input values.
 * @property {(pin: string) => void} [onComplete] - Callback when the PIN code input is complete.
 * @property {string[]} [pin=[]] - The current PIN code.
 * @property {(pin: string[]) => void} [onPinChange] - Callback when the PIN code changes.
 */
export interface PinCodeProps {
  length?: number;
  className?: string;
  inputClassName?: string;
  isMask?: boolean;
  pin?: string[];
  onComplete?: (pin: string) => void;
  onPinChange?: (pin: string[]) => void;
}

/**
 * PinCode component for inputting a PIN code.
 * 
 * @component
 * @param {PinCodeProps} props - Props for the PinCode component.
 * @returns {JSX.Element} The rendered PinCode component.
 */
const PinCode: React.FC<PinCodeProps> = ({
  length = 6,
  className,
  inputClassName,
  isMask = true,
  pin = [],
  onPinChange,
  onComplete,
}) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (pin.length === 0) {
      onPinChange?.(new Array(length).fill(''));
    }
  }, [length, pin.length, onPinChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    // there is a bug here
    const { value } = e.target;
    if (/^[0-9]?$/.test(value)) {
      setError(null);
      const newPin = [...pin];
      newPin[index] = value;
      onPinChange?.(newPin);

      if (value && index < length - 1) {
        const nextInput = document.getElementById(`pin-${index + 1}`);
        nextInput?.focus();
      }

      if (value && index === length - 1 && onComplete) {
        onComplete(newPin.join(''));
      }
    } else {
      setError('Only numeric values are allowed');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !pin[index] && index > 0) {
      const prevInput = document.getElementById(`pin-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <div className={`flex flex-col space-y-1 ${className}`}>
      <div className="flex space-x-2" role="group" aria-label="PIN Code">
        {pin.map((value, index) => (
          <input
            key={index}
            id={`pin-${index}`}
            type={isMask ? 'password' : 'text'}
            maxLength={1}
            value={value}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`w-12 h-12 text-center text-lg bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-50 border border-gray-400 dark:border-gray-600 rounded ${inputClassName}`}
            aria-label={`Digit ${index + 1}`}
          />
        ))}
      </div>
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
};

PinCode.displayName = "PinCode";
export default PinCode;
