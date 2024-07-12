// components/Rating/Rating.tsx
import React, { useState } from 'react';

export interface RatingProps {
    maxRating: number;
    onRate: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ maxRating, onRate }) => {
    const [rating, setRating] = useState(0);

    const handleRating = (rate: number) => {
    setRating(rate);
    onRate(rate);
    };

    return (
        <div>
            {Array.from({ length: maxRating }, (_, index) => (
            <span
                key={index}
                onClick={() => handleRating(index + 1)}
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
