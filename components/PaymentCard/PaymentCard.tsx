// components/PaymentCard/PaymentCard.tsx
import React from 'react';
import Link from 'next/link';

export interface PaymentCardProps {
    className?: string;
}

const PaymentCard: React.FC<PaymentCardProps> = ({ className = '' }) => {
    return (
        <div className={`flex text-gray-700 dark:text-gray-200 ${className}`} aria-label="PaymentCard">
          <p>PaymentCard</p>
        </div>
    );
};

PaymentCard.displayName = "PaymentCard";
export default PaymentCard;
