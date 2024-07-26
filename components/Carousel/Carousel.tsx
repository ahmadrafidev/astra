import React, { useState } from 'react';
import Image from 'next/image';

export interface CarouselProps {
    images: string[];
    className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, className }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full max-w-md mx-auto">
            <Image src={images[currentIndex]} alt="carousel" className="w-full" />
                <button
                    onClick={handlePrev}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
                >
                Prev
                </button>
            <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
            >
                Next
            </button>
        </div>
    );
};

Carousel.displayName = "Carousel";
export default Carousel;
