import React from 'react';
import Link from 'next/link';

export interface PhoneNumberProps {
    className?: string;
}

const PhoneNumber: React.FC<PhoneNumberProps> = ({ className }) => {
    return (
        <div className={`flex text-gray-700 dark:text-gray-200 ${className}`} aria-label="PhoneNumber">
          <p>PhoneNumber</p>
        </div>
    );
};

PhoneNumber.displayName = "PhoneNumber";
export default PhoneNumber;
