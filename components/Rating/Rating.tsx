import React, { useState } from 'react';

export interface RatingProps {
    maxRating: number;
    onRate: (rating: number) => void;
    className?: string;
}

const Rating: React.FC<RatingProps> = ({ maxRating, onRate, className }) => {
    const [rating, setRating] = useState(0);

    const handleRating = (rate: number) => {
        setRating(rate);
        onRate(rate);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>, index: number) => {
        if (event.key === 'Enter' || event.key === ' ') {
            handleRating(index + 1);
        }
    };

    return (
        <div className={`flex ${className}`}>
            {Array.from({ length: maxRating }, (_, index) => (
                <span
                    key={index}
                    onClick={() => handleRating(index + 1)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Rate ${index + 1} star${index + 1 > 1 ? 's' : ''}`}
                    style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'gray' }}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

Rating.displayName = "Rating";
export default Rating;
