import React from 'react';

import Image from 'next/image';

export interface CardProps {
    title: string;
    description: string;
    imageSrc?: string;
    imageWidth?: number;
    imageHeight?: number;
    className?: string;
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc, imageWidth = 300, imageHeight = 200, className = '', children }) => {
    return (
        <div className={`bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden ${className}`}>
            {imageSrc && (
                <Image src={imageSrc} alt={title} width={imageWidth} height={imageHeight} className="w-full h-48 object-fit" />
            )}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{title}</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
                {children}
            </div>
        </div>
    );
};

Card.displayName = "Card";
export default Card;
