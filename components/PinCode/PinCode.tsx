// components/PhoneNumber/PhoneNumber.tsx
import React from 'react';
import Link from 'next/link';

export interface PinCodeProps {
    className?: string;
}

const PinCode: React.FC<PinCodeProps> = ({ className }) => {
    return (
        <div className={`flex text-gray-700 dark:text-gray-200 ${className}`} aria-label="PinCode">
            <p>PinCode</p>
        </div>
    );
};

PinCode.displayName = "PinCode";
export default PinCode;
